// @ts-nocheck
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { appToggleSidebar } from 'redux/App/appActions';
import { State } from 'App/../redux/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import { TimetableParameters } from 'App/components/pages/Staff/StaffEmployees/TimetableParameters/TimetableParameters';
import TableBottomCounter from 'App/components/global/TableBottomCounter/TableBottomCounter';
import EmployeeDetails from 'App/components/pages/Staff/StaffEmployees/EmployeeDetails/EmployeeDetails';
import addProps from 'App/components/global/Modal/templates/addProps';
import editProps from 'App/components/global/Modal/templates/editProps';
import deleteProps from 'App/components/global/Modal/templates/deleteProps';
import deleteText from 'App/components/global/Modal/templates/deleteText';
import { StaffEmployee } from 'App/components/pages/Staff/StaffEmployees/staffEmployeesTypes';
import {
    requestEmployees,
    getStaffEmployees,
    staffEmployeesToggleSidebar
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Popover } from 'App/components/global/Popover/Popover';
import { SideFilter } from '../../../global/SideFilter/SideFilter';
import { Sidebar } from '../../../global/Sidebar/Sidebar';
import { StaffEmployeeFilter } from './StaffEmployeeFilter/StaffEmployeeFilter';
import { Tabs } from '../../../global/Tabs/Tabs';
import { Tab } from '../../../global/Tabs/Tab/Tab';
import { EmployeeIdentifiers } from './EmployeeIdentefiers/EmployeeIdentifiers';
import { EmployeeTimetable } from './EmployeeTimetable/EmployeeTimetable';
import { EmployeeEdit } from './EmployeeEdit/EmployeeEdit';
import { EmployeeSchedule } from './EmployeeSchedule/EmployeeSchedule';
import './StaffEmployees.scss';

const StaffEmployees = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.staff.staffEmployees.employeesTable, shallowEqual);
    const sideabrOpened = useSelector((state: State) => state.staff.staffEmployees.sidebarOpened, shallowEqual);
    const history = useHistory();
    const [selectedRow, setSelectedRow] = useState<StaffEmployee | null>(null);
    const tableElement = useRef<HTMLDivElement>(null);
    const pageWrapper = useRef<HTMLDivElement>(null);
    const rowElement = useRef(0);
    const first = useRef(true);

    useEffect(() => {
        dispatch(requestEmployees());
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
        header: 'Сотрудники',
        className: 'p-datatable-sm',
        resizableColumns: true,
        style: { height: '100%' },
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => dispatch(appToggleSidebar()),
        onValueChange: (sortedData: any) => dispatch(getStaffEmployees(sortedData)),
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
        <>
            <div ref={pageWrapper} className="page staff-employees" aria-label="page content">
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
                        <Buttons
                            name="Preview"
                            size="m"
                            disable={!selectedRow}
                            onPress={selectedRow ? () => openModal('timetable', history) : undefined}
                        />
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

                {/* <ErrorModal modalName="delete">Не удалось получить данные о персонале!</ErrorModal>
                 */}

                <Modal
                    {...editProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Редактирование должности"
                    modalName="edit"
                    modalIcon="Edit"
                >
                    <EmployeeEdit />
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

                <Modal
                    {...editProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Подробный график"
                    modalName="timetable"
                    modalIcon="Info"
                >
                    <TimetableParameters selectedUser={selectedRow} />
                </Modal>

                <section className="page__wrapper">
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
                                            field="uuid"
                                            header="Табельный номер"
                                            sortable
                                        />
                                        <Column
                                            filter
                                            filterMatchMode="contains"
                                            filterPlaceholder="Поиск"
                                            field="name"
                                            header="Фамилия Имя Отчество"
                                            sortable
                                        />
                                        <Column
                                            filter
                                            filterMatchMode="contains"
                                            filterPlaceholder="Поиск"
                                            field="subdivision"
                                            header="Подразделение"
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
                                            field="created"
                                            header="Создан"
                                            sortable
                                        />
                                        <Column field="created" header="Уволен" sortable />
                                        <Column field="created" header="Удален" sortable />
                                    </DataTable>
                                ) : (
                                    <DataTable {...tableProps}>
                                        <Column field="uuid" header="Табельный номер" sortable />
                                        <Column field="name" header="Фамилия Имя Отчество" sortable />
                                        <Column field="subdivision" header="Подразделение" sortable />
                                        <Column field="occupation" header="Должность" sortable />
                                        <Column field="created" header="Создан" sortable />
                                        <Column field="created" header="Уволен" sortable />
                                        <Column field="created" header="Удален" sortable />
                                    </DataTable>
                                )}
                            </div>
                        </Popover>
                        <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки">
                            <StaffEmployeeFilter />
                        </SideFilter>
                    </div>

                    <Sidebar
                        sidebarName="Данные о сотруднике"
                        icon="SearchUser"
                        isOpen={sideabrOpened}
                        sidebarToggler={() => dispatch(staffEmployeesToggleSidebar())}
                    >
                        <Tabs>
                            <Tab header="Общее">
                                <EmployeeDetails selectedUser={selectedRow} />
                            </Tab>
                            <Tab header="Календарь">
                                <EmployeeTimetable selectedUser={selectedRow} />
                            </Tab>
                            <Tab header="Идентификаторы">
                                <EmployeeIdentifiers />
                            </Tab>
                            <Tab header="График">
                                <EmployeeSchedule selectedUser={selectedRow} />
                            </Tab>
                        </Tabs>
                    </Sidebar>
                </section>
            </div>
        </>
    );
};

export default StaffEmployees;
