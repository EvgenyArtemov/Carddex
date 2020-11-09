import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import deleteText from 'App/components/global/Modal/Alert/DeleteModal/deleteText';
import {
    requestOrganizations,
    staffOrganizationsToggleSidebar
} from 'redux/Staff/StaffOrganizations/staffOrganizationsAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { appToggleSidebar } from 'redux/App/appActions';
import { useTable } from 'App/../hooks/useTable/useTable';
import { Buttons } from '../../../global/Buttons/Buttons';
import { State } from '../../../../../redux/store';
import { Popover } from '../../../global/Popover/Popover';
import OrganizationEdit from './OrganizationEdit/OrganizationEdit';
import { Sidebar } from '../../../global/Sidebar/Sidebar';
import { TableBottomCounter } from '../../../global/TableBottomCounter/TableBottomCounter';
import { SideFilter } from '../../../global/SideFilter/SideFilter';
import { OrganizationFilter } from './OrganizationFilter/OrganizationFilter';
import './StaffOrganizations.scss';

const StaffOrganizations = () => {
    const dispatch = useDispatch();
    const sidebarOpened = useSelector((state: State) => state.staff.staffOrganizations.sidebarOpened, shallowEqual);
    const tableState = useSelector((state: State) => state.staff.staffOrganizations.organizationsTable, shallowEqual);
    const history = useHistory();
    const tableWrapper = useRef<HTMLDivElement>(null);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const [filterState, setFilterState] = useState(false);
    const [sideFilter, setSideFilter] = useState(false);
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

    const toggleSidebar = () => {
        if (!sidebarOpened) {
            dispatch(appToggleSidebar());
            setTimeout(() => {
                tableWrapper.current?.classList.toggle('edit-entry');
            }, 250);
        } else {
            tableWrapper.current?.classList.toggle('edit-entry');
            setTimeout(() => {
                dispatch(appToggleSidebar());
            }, 250);
        }
    };

    useEffect(() => {
        dispatch(requestOrganizations());
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [tableState, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, filterState, tableScrolleHeight]);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Организации',
        className: 'p-datatable-sm',
        resizableColumns: true,
        style: { height: '100%' },
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => toggleSidebar()
    };

    return (
        <div className="page staff-organizations">
            {/* Toolbar */}
            <Toolbar>
                {/* Left side */}
                <section className="toolbar__section">
                    <Buttons name="Filter" size="m" typical onPress={() => setSideFilter(!sideFilter)} />
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

                {/* Modals */}
                {/* Add */}
                <Modal
                    {...addProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Добавление должности"
                    modalName="add">
                    <div>
                        <span>Add</span>
                    </div>
                </Modal>

                {/* Edit */}
                <Modal
                    {...editProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Редактирование должности"
                    modalName="edit">
                    <div>
                        <span>Edit</span>
                    </div>
                </Modal>

                {/* <ErrorModal modalName="delete">Не удалось получить данные о персонале!</ErrorModal>
                 */}
                {/* Delete */}
                <Modal
                    {...deleteProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Удаление должности"
                    modalName="delete">
                    {selectedRow ? (
                        <span>{deleteText(`должность ${selectedRow}`)}</span>
                    ) : (
                        <span>{deleteText('эту должность')}</span>
                    )}
                </Modal>
            </Toolbar>

            <section className="page__wrapper">
                <div ref={tableWrapper} className="table-wrapper">
                    {/* Table */}
                    <Popover>
                        <div className="table" ref={tableElement}>
                            {filterState ? (
                                <DataTable {...tableProps}>
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск по наименованию"
                                        style={{ width: '30%' }}
                                        field="orgShortName"
                                        header="Наименование"
                                        sortable
                                    />
                                    <Column
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск по ИНН"
                                        field="orgInn"
                                        header="ИНН"
                                        sortable
                                    />
                                    <Column style={{ width: '15%' }} field="orgForm" header="Статус" sortable />
                                    <Column
                                        style={{ width: '20%' }}
                                        field="orgState"
                                        header="Зарегистрирована"
                                        sortable
                                    />
                                    <Column
                                        style={{ width: '15%' }}
                                        filter
                                        filterMatchMode="contains"
                                        filterPlaceholder="Поиск по признаку удаления"
                                        field="deletedStr"
                                        header="Удалён"
                                        sortable
                                    />
                                </DataTable>
                            ) : (
                                <DataTable {...tableProps}>
                                    <Column
                                        style={{ width: '30%' }}
                                        field="orgShortName"
                                        header="Наименование"
                                        sortable
                                    />
                                    <Column field="orgInn" header="ИНН" sortable />
                                    <Column style={{ width: '15%' }} field="orgState" header="Статус" sortable />
                                    <Column
                                        style={{ width: '20%' }}
                                        field="orgForm"
                                        header="Зарегистрирована"
                                        sortable
                                    />
                                    <Column field="deletedStr" header="Удалён" sortable />
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

                    <SideFilter items={tableState} onClose={toggleSideFilter} isOpen={sideFilter}>
                        <OrganizationFilter />
                    </SideFilter>
                </div>
                <Sidebar
                    sidebarName="События"
                    icon="Events"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffOrganizationsToggleSidebar())}>
                    <OrganizationEdit toggleSidebar={toggleSidebar} selectedEntry={selectedRow} />
                </Sidebar>
            </section>
        </div>
    );
};

export default StaffOrganizations;
