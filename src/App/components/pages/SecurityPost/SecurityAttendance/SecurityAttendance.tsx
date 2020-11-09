import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import Modal from 'App/components/global/Modal/Modal';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import deleteText from 'App/components/global/Modal/Alert/DeleteModal/deleteText';
import openModal from 'utils/openModal/openModal';
import { Popover } from 'App/components/global/Popover/Popover';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTable } from 'App/../hooks/useTable/useTable';
import {
    securityAttendanceToggleQuickFilter,
    requestAttendance
} from 'App/../redux/SecurityPost/SecurityAttendance/securityAttendanceActions';

import { SideFilter } from '../../../global/SideFilter/SideFilter';
import './SecurityAttendance.scss';

const SecurityAttendance = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tableState = useSelector((state: State) => state.securityPost.postAttendance.attendanceTable, shallowEqual);
    const filterState = useSelector((state: State) => state.securityPost.postAttendance.quickFilter, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const pageWrapper = useRef<HTMLDivElement>(null);
    const tableElement = useRef<HTMLDivElement>(null);

    const [
        selectionChangeHandler,
        onKeyDown,
        rowNumberHandler,
        goToRowElement,
        tableScrolleHeight,
        selectedRow,
        rowNumber
    ] = useTable(tableState);

    useEffect(() => {
        dispatch(requestAttendance());
    }, [dispatch]);

    //  SideFilter logic

    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [tableState, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, filterState, tableScrolleHeight]);

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Просмотр посещаемости',
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => console.log('Double click')
        // onValueChange: (sortedData: any) => dispatch(getSecurityAttendance(sortedData))
    };

    return (
        <div ref={pageWrapper} className="page security-attendance">
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
                        onPress={() => dispatch(securityAttendanceToggleQuickFilter())}
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

            <Modal
                {...editProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование должности"
                modalName="edit"
                modalIcon="Edit">
                <div>
                    <span>Edit</span>
                </div>
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

                    <TableBottomCounter
                        rowNumber={rowNumberHandler}
                        goToRowElement={goToRowElement}
                        rowElement={rowNumber.current + 1}
                        tableRowCount={tableState.length}
                    />

                    <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки" />
                </div>
            </section>
        </div>
    );
};

export default SecurityAttendance;
