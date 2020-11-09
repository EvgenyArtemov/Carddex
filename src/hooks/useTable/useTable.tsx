import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { StaffEmployee } from '../../redux/Staff/StaffEmployees/staffEmployeesTypes';

interface RefObject<T> {
    readonly current: T | null;
}

export const useTable = (tableState: any) => {
    const firstKeyDown = useRef(true);
    const rowNumber = useRef(0);
    const history = useHistory();
    const [selectedRow, setSelectedRow] = useState<StaffEmployee | null>(tableState[0] || null);

    const selectionChangeHandler = (e: any) => {
        firstKeyDown.current = false;
        rowNumber.current = tableState.indexOf(e.value);
        setSelectedRow(e.value);
    };

    // Table navigation with keyboard
    const onKeyDown = (ev: KeyboardEvent): any => {
        if (ev.code === 'Delete') {
            if (selectedRow) {
                history.push(`${window.location.pathname}/delete`);
            }
        }

        // Table navigation with keyboard
        const trackedKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
        const evWithKey = trackedKeys.includes(ev.key);

        if (evWithKey) {
            if (firstKeyDown.current === false && ev.key === 'ArrowUp' && rowNumber.current === 0) {
                rowNumber.current = 1;
                setSelectedRow(tableState[rowNumber.current]);
            }
            if (rowNumber.current < 0) {
                rowNumber.current = 0;
                firstKeyDown.current = true;
            }
            if (rowNumber.current >= tableState.length - 2 && ev.key === 'ArrowDown') {
                rowNumber.current = tableState.length - 2;
                setSelectedRow(tableState[rowNumber.current - 2]);
                firstKeyDown.current = false;
            }
            if (firstKeyDown.current === false && ev.key === 'ArrowDown') {
                rowNumber.current++;
                setSelectedRow(tableState[rowNumber.current]);
            }
            if (firstKeyDown.current === false && ev.key === 'ArrowUp') {
                rowNumber.current--;
                setSelectedRow(tableState[rowNumber.current]);
            }
            if (ev.key === 'Enter') {
                history.push(`${window.location.pathname}/edit`);
            }
            if (firstKeyDown.current === true && ev.key === 'ArrowDown') {
                firstKeyDown.current = false;
                setSelectedRow(tableState[0]);
            }
        }
    };

    const rowNumberHandler = (e: number) => {
        firstKeyDown.current = false;
        const value = e;
        rowNumber.current = +value - 1;
        setSelectedRow(tableState[rowNumber.current]);
    };

    const goToRowElement = () => {
        const table = document.querySelectorAll('.p-datatable-row');

        if (rowNumber.current >= 0 && rowNumber.current < table.length) {
            table[rowNumber.current].scrollIntoView({
                behavior: 'smooth'
            });
            setSelectedRow(tableState[rowNumber.current]);
        }
        if (rowNumber.current < 0) {
            rowNumber.current = 0;
            table[rowNumber.current].scrollIntoView({
                behavior: 'smooth'
            });
            setSelectedRow(tableState[rowNumber.current]);
        }
        if (rowNumber.current >= table.length) {
            rowNumber.current = table.length - 1;
            setSelectedRow(tableState[rowNumber.current]);
            table[rowNumber.current].scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const tableScrolleHeight = (tableElement: RefObject<HTMLDivElement>): void => {
        const tableHeader =
            typeof tableElement.current?.querySelector('.p-datatable-header')?.clientHeight !== 'undefined'
                ? tableElement.current?.querySelector('.p-datatable-header')?.clientHeight
                : 0;
        const tableScrollableHeader = tableElement.current?.querySelector('.p-datatable-scrollable-header')
            ?.clientHeight;
        const scrollHeight = tableElement.current?.clientHeight! - (tableHeader! + tableScrollableHeader! + 3);

        console.log(tableElement.current?.clientHeight!);

        tableElement.current
            ?.querySelector('.p-datatable-scrollable-body')
            ?.setAttribute('style', `max-height:${scrollHeight}px;`);
    };

    return [
        selectionChangeHandler,
        onKeyDown,
        rowNumberHandler,
        goToRowElement,
        tableScrolleHeight,
        selectedRow,
        rowNumber
    ] as const;
};
