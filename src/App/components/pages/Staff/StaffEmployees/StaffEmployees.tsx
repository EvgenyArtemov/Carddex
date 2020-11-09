import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import EmployeeDetails from 'App/components/pages/Staff/StaffEmployees/EmployeeDetails/EmployeeDetails';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import deleteText from 'App/components/global/Modal/Alert/DeleteModal/deleteText';
import InfoModal from 'App/components/global/Modal/Alert/InfoModal/InfoModal';
import WarningModal from 'App/components/global/Modal/Alert/WarningModal/WarningModal';
import ErrorModal from 'App/components/global/Modal/Alert/ErrorModal/ErrorModal';
import {
    requestEmployees,
    getStaffEmployees,
    staffEmployeesToggleSidebar,
    staffEmployeesToggleToggleBar,
    staffEmployeesToggleQuickFilter
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Popover } from 'App/components/global/Popover/Popover';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { SideFilter } from '../../../global/SideFilter/SideFilter';
import { Sidebar } from '../../../global/Sidebar/Sidebar';
import { StaffEmployeeFilter } from './StaffEmployeeFilter/StaffEmployeeFilter';
import { EmployeeIdentifiers } from './EmployeeIdentefiers/EmployeeIdentifiers';
import { EmployeeTimetable } from './EmployeeTimetable/EmployeeTimetable';
import { EmployeeEdit } from './EmployeeEdit/EmployeeEdit';
import { EmployeeSchedule } from './EmployeeSchedule/EmployeeSchedule';
import { useTable } from '../../../../../hooks/useTable/useTable';
import './StaffEmployees.scss';

const StaffEmployees = () => {
    const tableState = useSelector((state: State) => state.staff.staffEmployees.employeesTable, shallowEqual);
    const sideabrOpened = useSelector((state: State) => state.staff.staffEmployees.sidebarOpened, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const filterState = useSelector((state: State) => state.staff.staffEmployees.quickFilter, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const [
        selectionChangeHandler,
        onKeyDown,
        rowNumberHandler,
        goToRowElement,
        tableScrolleHeight,
        selectedRow,
        rowNumber
    ] = useTable(tableState);

    //  SideFilter logic
    const [sideFilter, setSideFilter] = useState(false);

    /* Calculate and rerender Table height */
    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    useEffect(() => {
        dispatch(requestEmployees());
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown as EventListener, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown as EventListener, false);
        };
    }, [tableState, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, filterState, tableScrolleHeight]);

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Сотрудники',
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => dispatch(appToggleSidebar()),
        onValueChange: (sortedData: any) => dispatch(getStaffEmployees(sortedData))
    };
    return (
        <>
            <div className="page staff-employees" aria-label="page content">
                {/* Toolbar */}
                <Toolbar>
                    <section className="toolbar__section">
                        <Buttons name="Filter" size="m" typical onPress={toggleSideFilter} />
                        <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />
                        <Buttons
                            name="Edit"
                            size="m"
                            typical={!!selectedRow}
                            disable={!selectedRow}
                            onPress={selectedRow ? () => openModal('edit', history) : undefined}
                        />
                        <Buttons
                            name="Delete"
                            size="m"
                            typical={!!selectedRow}
                            disable={!selectedRow}
                            onPress={selectedRow ? () => openModal('delete', history) : undefined}
                        />
                        <Buttons
                            name="QuickFilter"
                            size="m"
                            typical
                            onPress={() => dispatch(staffEmployeesToggleQuickFilter())}
                        />
                        <Buttons
                            name="Show"
                            size="m"
                            typical={!!selectedRow}
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
                    modalIcon="Info">
                    <div>
                        <span>Add</span>
                    </div>
                </Modal>

                <ErrorModal>Не удалось получить данные о персонале!</ErrorModal>

                <WarningModal>Внимание, что-то пошло не так! Сделайте что-нибудь!</WarningModal>

                <InfoModal>В системе что-то там произошло. Вам следует знать об этом!</InfoModal>

                <Modal
                    {...editProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Редактирование сотрудника"
                    modalName="edit"
                    modalIcon="Edit">
                    <TabBar>
                        <Tab header="Общие" index={0}>
                            <EmployeeEdit />
                        </Tab>
                        <Tab header="График работы" index={1}>
                            <div style={{ width: '630px', height: '278px' }}>Здесь будет график работы</div>
                        </Tab>
                        <Tab header="Идентификаторы" index={2}>
                            <div style={{ width: '630px', height: '278px' }}>Здесь будут идентификаторы</div>
                        </Tab>
                    </TabBar>
                </Modal>

                <Modal
                    {...deleteProps}
                    onSuccessClick={() => console.log('Сотрудник Удален')}
                    modalHeader="Удаление сотрудника"
                    modalName="delete"
                    modalIcon="Warning">
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
                    modalIcon="Info">
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
                                            header="Табельный №"
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
                                            header="Принят"
                                            sortable
                                        />
                                        <Column field="created" header="Уволен" sortable />
                                        <Column field="created" header="Удален" sortable />
                                    </DataTable>
                                ) : (
                                    <DataTable {...tableProps}>
                                        <Column field="uuid" header="Табельный №" sortable />
                                        <Column field="name" header="Фамилия Имя Отчество" sortable />
                                        <Column field="subdivision" header="Подразделение" sortable />
                                        <Column field="occupation" header="Должность" sortable />
                                        <Column field="created" header="Принят" sortable />
                                        <Column field="created" header="Уволен" sortable />
                                        <Column field="created" header="Удален" sortable />
                                    </DataTable>
                                )}
                            </div>
                        </Popover>

                        <TableBottomCounter
                            rowNumber={rowNumberHandler}
                            goToRowElement={goToRowElement}
                            rowElement={rowNumber.current + 1}
                            tableRowCount={tableState.length}
                        />

                        <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки">
                            <StaffEmployeeFilter />
                        </SideFilter>
                    </div>

                    <Sidebar
                        sidebarName="Данные о сотруднике"
                        icon="SearchUser"
                        isOpen={sideabrOpened}
                        sidebarToggler={() => dispatch(staffEmployeesToggleSidebar())}
                        sidebarTrigger={() => dispatch(staffEmployeesToggleToggleBar())}>
                        <TabBar>
                            <Tab header="Общее" index={0}>
                                <EmployeeDetails selectedUser={selectedRow} />
                            </Tab>
                            <Tab header="Календарь" index={1}>
                                <EmployeeTimetable selectedUser={selectedRow} />
                            </Tab>
                            <Tab header="Идентификаторы" index={2}>
                                <EmployeeIdentifiers />
                            </Tab>
                            <Tab header="График" index={3}>
                                <EmployeeSchedule selectedUser={selectedRow} />
                            </Tab>
                        </TabBar>
                    </Sidebar>
                </section>
            </div>
        </>
    );
};

export default StaffEmployees;
