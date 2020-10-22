import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import TableBottomCounter from 'App/components/global/TableBottomCounter/TableBottomCounter';
import Modal from 'App/components/global/Modal/Modal';
import addProps from 'App/components/global/Modal/templates/addProps';
import editProps from 'App/components/global/Modal/templates/editProps';
import deleteProps from 'App/components/global/Modal/templates/deleteProps';
import deleteText from 'App/components/global/Modal/templates/deleteText';
import openModal from 'utils/openModal/openModal';
import { Popover } from 'App/components/global/Popover/Popover';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SecurityAttendanceElement } from 'App/../redux/SecurityPost/SecurityAttendance/securityAttendanceTypes';
import { requestAttendance } from '../../../../../redux/SecurityPost/SecurityAttendance/securityAttendanceActions';
import { SideFilter } from '../../../global/SideFilter/SideFilter';
import './SecurityAttendance.scss';

const SecurityAttendance = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tableState = useSelector((state: State) => state.securityPost.postAttendance.attendanceTable, shallowEqual);
    const [selectedRow, setSelectedRow] = useState<SecurityAttendanceElement | null>(null);
    const pageWrapper = useRef<HTMLDivElement>(null);
    const table = useRef<HTMLDivElement>(null);
    const rowElement = useRef(0);
    const first = useRef(true);

    useEffect(() => {
        dispatch(requestAttendance());
    }, [dispatch]);

    const selectionChangeHandler = (e: any) => {
        first.current = false;
        rowElement.current = tableState.indexOf(e.value);
        setSelectedRow(e.value);
    };

    //  SideFilter logic

    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    // Table navigation with keyboard
    const onKeyDown = useCallback(
        (ev: any) => {
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
                    setSelectedRow(tableState[rowElement.current]);
                }
                if (rowElement.current < 0) {
                    rowElement.current = 0;
                    first.current = true;
                }
                if (rowElement.current >= tableState.length - 2 && ev.key === 'ArrowDown') {
                    rowElement.current = tableState.length - 2;
                    setSelectedRow(tableState[rowElement.current - 2]);
                    first.current = false;
                }
                if (first.current === false && ev.key === 'ArrowDown') {
                    rowElement.current++;
                    setSelectedRow(tableState[rowElement.current]);
                }
                if (first.current === false && ev.key === 'ArrowUp') {
                    rowElement.current--;
                    setSelectedRow(tableState[rowElement.current]);
                }
                if (ev.key === 'Enter') {
                    history.push(`${window.location.pathname}/edit`);
                }
                if (first.current === true && ev.key === 'ArrowDown') {
                    first.current = false;
                    setSelectedRow(tableState[0]);
                }
            }
        },
        [history, selectedRow, tableState]
    );

    const rowNumber = (e: React.FormEvent<HTMLInputElement>) => {
        first.current = false;
        const { value } = e.currentTarget;
        rowElement.current = +value - 1;
        setSelectedRow(tableState[rowElement.current]);
        console.log(rowElement.current);
    };

    const goToRowElement = () => {
        const table = document.querySelectorAll('.p-datatable-row');
        if (rowElement.current >= 0 && rowElement.current < table.length) {
            table[rowElement.current].scrollIntoView();
            setSelectedRow(tableState[rowElement.current]);
        }
        if (rowElement.current < 0) {
            rowElement.current = 0;
            table[rowElement.current].scrollIntoView();
            setSelectedRow(tableState[rowElement.current]);
        }
        if (rowElement.current >= table.length) {
            rowElement.current = table.length - 1;
            setSelectedRow(tableState[rowElement.current]);
            table[rowElement.current].scrollIntoView();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [history, tableState, onKeyDown]);

    /* Quick filter - show, hide area with quick filter */
    const [filterState, setFilterState] = useState(false);

    /* Calculate and rerender Table height */
    const [size, setSize] = useState([0, 0]);

    const tableScrolleHeight = () => {
        const tableHeader = table.current?.querySelector('.p-datatable-header')?.clientHeight;
        const tableScrollableHeader = table.current?.querySelector('.p-datatable-scrollable-header')?.clientHeight;
        const tablePaginator =
            typeof table.current?.querySelector('.p-paginator')?.clientHeight !== 'undefined'
                ? table.current?.querySelector('.p-paginator')?.clientHeight
                : 0;
        const scrollHeight = table.current?.clientHeight! - (tableHeader! + tableScrollableHeader! + tablePaginator!);

        table.current
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
        header: 'Просмотр посещаемости',
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
        <div ref={pageWrapper} className="page security-attendance">
            {/* Toolbar */}
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons name="Settings" size="m" onPress={toggleSideFilter} />
                    <Buttons name="Add" size="m" onPress={() => openModal('add', history)} />
                    <Buttons
                        name="Edit"
                        size="m"
                        disable={!selectedRow}
                        onPress={selectedRow ? () => openModal('edit', history) : undefined}
                    />
                    <Buttons
                        name="Delete"
                        size="m"
                        disable={!selectedRow}
                        onPress={selectedRow ? () => openModal('delete', history) : undefined}
                    />
                    <Buttons name="QuickFilter" size="m" onPress={() => setFilterState(!filterState)} />
                </section>
            </Toolbar>

            {/* Modals */}
            <Modal
                {...addProps}
                onSuccessClick={() => console.log('Сотрудник добавлен')}
                modalHeader="Добавить сотрудника"
                modalName="add"
                modalIcon="Info"
            >
                <div>
                    <span>Add</span>
                </div>
            </Modal>

            <Modal
                {...editProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование должности"
                modalName="edit"
                modalIcon="Edit"
            >
                <div>
                    <span>Edit</span>
                </div>
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('Сотрудник Удален')}
                modalHeader="Удаление сотрудника"
                modalName="delete"
                modalIcon="Warning"
            >
                {selectedRow ? (
                    <span>{deleteText(`сотрудника: ${selectedRow.name}`)}</span>
                ) : (
                    <span>{deleteText('этого сотрудника')}</span>
                )}
            </Modal>

            <section className="page__wrapper">
                <div className="table-wrapper">
                    {/* Table */}
                    <Popover>
                        <div className="table" ref={table}>
                            {filterState ? (
                                <DataTable {...tableProps}>
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="uuid"
                                        header="Дата учёта"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="name"
                                        header="ФИО"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="occupation"
                                        header="Должность"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="subdivision"
                                        header="Код отклонения"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="created"
                                        header="Вход"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="created"
                                        header="Выход"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="created"
                                        header="Отработанно"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск"
                                        field="created"
                                        header="Уволен"
                                        sortable
                                    />
                                </DataTable>
                            ) : (
                                <DataTable {...tableProps}>
                                    <Column field="uuid" header="Дата учёта" sortable />
                                    <Column field="name" header="ФИО" sortable />
                                    <Column field="occupation" header="Должность" sortable />
                                    <Column field="subdivision" header="Код отклонения" sortable />
                                    <Column field="created" header="Вход" sortable />
                                    <Column field="created" header="Выход" sortable />
                                    <Column field="created" header="Отработанно" sortable />
                                    <Column field="created" header="Уволен" sortable />
                                </DataTable>
                            )}
                        </div>
                    </Popover>
                    <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки" />
                </div>
            </section>
        </div>
    );
};

export default SecurityAttendance;
