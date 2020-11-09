import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import deleteText from 'App/components/global/Modal/Alert/DeleteModal/deleteText';
import { requestDepartments, getStaffDepartments } from 'redux/Staff/StaffDepartments/staffDepartmentsAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'App/../redux/store';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { useTable } from 'App/../hooks/useTable/useTable';
import './StaffDepartments.scss';

const StaffDepartments = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tableState = useSelector((state: State) => state.staff.staffDepartments.departmentsTable, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
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
        dispatch(requestDepartments());
    }, [dispatch]);

    /* Quick filter - show, hide area with quick filter */
    const [filterState, setFilterState] = useState(false);

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
        header: 'Подразделения',
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: selectionChangeHandler,
        onValueChange: (sortedData: any) => dispatch(getStaffDepartments(sortedData))
    };

    return (
        <div className="page staff-departments">
            {/* Toolbar */}
            <Toolbar>
                <section className="toolbar__section">
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
                    <Buttons name="QuickFilter" size="m" typical onPress={() => setFilterState(!filterState)} />
                </section>
            </Toolbar>

            {/* Modals */}
            <Modal
                {...addProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Добавление должности"
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
                modalIcon="Attention">
                <div>
                    <span>Edit</span>
                </div>
            </Modal>

            {/* <ErrorModal modalName="delete">Не удалось получить данные о персонале!</ErrorModal>
             */}

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Удаление должности"
                modalName="delete"
                modalIcon="Warning">
                {selectedRow ? (
                    <span>{deleteText(`должность ${selectedRow}`)}</span>
                ) : (
                    <span>{deleteText('эту должность')}</span>
                )}
            </Modal>

            <section className="page__wrapper">
                <div className="table-wrapper">
                    {/* Table */}
                    <Popover>
                        <div className="table">
                            {filterState ? (
                                <DataTable {...tableProps}>
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск по агенту"
                                        field="depName"
                                        header="Наименование агента"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск по руководителю"
                                        style={{ width: '300px' }}
                                        field="chiefPersonName"
                                        header="Руководитель"
                                        sortable
                                    />
                                </DataTable>
                            ) : (
                                <DataTable {...tableProps}>
                                    <Column field="depName" header="Наименование агента" sortable />
                                    <Column
                                        style={{ width: '300px' }}
                                        field="chiefPersonName"
                                        header="Руководитель"
                                        sortable
                                    />
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
                </div>
            </section>
        </div>
    );
};

export default StaffDepartments;
