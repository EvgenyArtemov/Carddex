import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import TableBottomCounter from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { selectSecurityPostMonitoringTableRow } from '../../../../../../../redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
// import { TableItem } from '../../securityPostMonitoringTypes';
import './MonitoringTable.scss';

const MonitoringTableInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.securityPost.postMonitoring.events, shallowEqual);
    const filterState = useSelector((state: State) => state.securityPost.postMonitoring.quickFilter, shallowEqual);
    const selectedRow = useSelector((state: State) => state.securityPost.postMonitoring.tableRow, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const rowElement = useRef(0);
    const first = useRef(true);

    const selectionChangeHandler = (e: any) => {
        first.current = false;
        rowElement.current = tableState.indexOf(e.value);
        dispatch(selectSecurityPostMonitoringTableRow(e.value));
    };

    // Table navigation with keyboard
    const onKeyDown = useCallback(
        (ev: any) => {
            console.log(selectedRow);
            /* Delete */
            if (ev.code === 'Delete') {
                console.log('delete');
                console.log(selectedRow);
                if (selectedRow) {
                    history.push(`${window.location.pathname}/delete`);
                }
            }

            // Table navigation with keyboard
            const trackedKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
            const evWithKey = trackedKeys.includes(ev.key);

            if (evWithKey) {
                if (first.current === false && ev.key === 'ArrowUp' && rowElement.current === 0) {
                    rowElement.current = 1;
                    dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
                }
                if (rowElement.current < 0) {
                    rowElement.current = 0;
                    first.current = true;
                }
                if (rowElement.current >= tableState.length - 2 && ev.key === 'ArrowDown') {
                    rowElement.current = tableState.length - 2;
                    dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current - 2]));
                    first.current = false;
                }
                if (first.current === false && ev.key === 'ArrowDown') {
                    rowElement.current++;
                    dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
                }
                if (first.current === false && ev.key === 'ArrowUp') {
                    rowElement.current--;
                    dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
                }
                if (ev.key === 'Enter') {
                    history.push(`${window.location.pathname}/edit`);
                }
                if (first.current === true && ev.key === 'ArrowDown') {
                    first.current = false;
                    dispatch(selectSecurityPostMonitoringTableRow(tableState[0]));
                }
            }
        },
        [dispatch, history, selectedRow, tableState]
    );

    const rowNumber = (e: React.FormEvent<HTMLInputElement>) => {
        first.current = false;
        const { value } = e.currentTarget;
        rowElement.current = +value - 1;
        dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
        console.log(rowElement.current);
    };

    const goToRowElement = () => {
        const table = document.querySelectorAll('.p-datatable-row');
        if (rowElement.current >= 0 && rowElement.current < table.length) {
            table[rowElement.current].scrollIntoView();
            dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
        }
        if (rowElement.current < 0) {
            rowElement.current = 0;
            table[rowElement.current].scrollIntoView();
            dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
        }
        if (rowElement.current >= table.length) {
            rowElement.current = table.length - 1;
            dispatch(selectSecurityPostMonitoringTableRow(tableState[rowElement.current]));
            table[rowElement.current].scrollIntoView();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [history, tableState, onKeyDown]);

    /* Calculate and rerender Table height */
    const [size, setSize] = useState([0, 0]);

    const tableScrolleHeight = () => {
        const tableHeader = tableElement.current?.querySelector('.p-datatable-header')?.clientHeight;
        const tableScrollableHeader = tableElement.current?.querySelector('.p-datatable-scrollable-header')
            ?.clientHeight;
        const tablePaginator =
            typeof tableElement.current?.querySelector('.p-paginator')?.clientHeight !== 'undefined'
                ? tableElement.current?.querySelector('.p-paginator')?.clientHeight
                : 0;
        const scrollHeight =
            tableElement.current?.clientHeight! - (tableHeader! + tableScrollableHeader! + tablePaginator!);

        tableElement.current
            ?.querySelector('.p-datatable-scrollable-body')
            ?.setAttribute('style', `max-height:${scrollHeight}px;`);
    };

    useLayoutEffect(() => {
        tableScrolleHeight();
    }, [size, filterState]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Мониторинг',
        className: 'p-datatable-sm',
        resizableColumns: true,
        style: { height: '100%' },
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => console.log('Double click'),
        // onValueChange: (sortedData: any) => dispatch(getSecurityAttendance(sortedData)),
        paginator: true,
        paginatorTemplate:
            'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        currentPageReportTemplate: `С {first} по {last} из ${tableState.length}`,
        rows: tableState.length,
        rowsPerPageOptions: [10, 20, 50],
        paginatorLeft: (
            <TableBottomCounter
                rowNumber={rowNumber}
                goToRowElement={goToRowElement}
                rowElement={rowElement.current + 1}
                tableRowCount={tableState.length}
            />
        )
    };

    return (
        <div className="table-wrapper">
            {/* Table */}
            <Popover>
                <div className="table" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="eventDate"
                                header="Время события"
                                style={{ width: '10%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field=""
                                header="Код события"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="physpersonName"
                                header="Физ. лицо"
                                style={{ width: '25%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field=""
                                header="Идентификатор"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="eventCodeName"
                                header="Описание события"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="sourceName"
                                header="Источник"
                                sortable
                            />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="eventDate" header="Время события" style={{ width: '10%' }} sortable />
                            <Column field="" header="Код события" sortable style={{ width: '15%' }} />
                            <Column field="physpersonName" header="Физ. лицо" style={{ width: '25%' }} sortable />
                            <Column field="" header="Идентификатор" style={{ width: '15%' }} sortable />
                            <Column field="eventCodeName" header="Описание события" sortable />
                            <Column field="sourceName" header="Источник" sortable />
                        </DataTable>
                    )}
                </div>
            </Popover>
        </div>
    );
};

export const MonitoringTable = memo(MonitoringTableInner);
