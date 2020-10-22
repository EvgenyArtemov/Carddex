import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import addProps from 'App/components/global/Modal/templates/addProps';
import editProps from 'App/components/global/Modal/templates/editProps';
import deleteProps from 'App/components/global/Modal/templates/deleteProps';
import deleteText from 'App/components/global/Modal/templates/deleteText';
import { StaffOrganization } from 'App/../redux/Staff/StaffOrganizations/staffOrganizationsTypes';
import {
    requestOrganizations,
    staffOrganizationsToggleSidebar
} from 'redux/Staff/StaffOrganizations/staffOrganizationsAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { appToggleSidebar } from 'redux/App/appActions';
import { Buttons } from '../../../global/Buttons/Buttons';
import { State } from '../../../../../redux/store';
import { Popover } from '../../../global/Popover/Popover';
import OrganizationEdit from './OrganizationEdit/OrganizationEdit';
import { Sidebar } from '../../../global/Sidebar/Sidebar';
import TableBottomCounter from '../../../global/TableBottomCounter/TableBottomCounter';
import { SideFilter } from '../../../global/SideFilter/SideFilter';
import { OrganizationFilter } from './OrganizationFilter/OrganizationFilter';
import './StaffOrganizations.scss';

const StaffOrganizations = () => {
    const dispatch = useDispatch();
    const sidebarOpened = useSelector((state: State) => state.staff.staffOrganizations.sidebarOpened, shallowEqual);
    const tableState = useSelector((state: State) => state.staff.staffOrganizations.organizationsTable, shallowEqual);
    const history = useHistory();
    const [selectedRow, setSelectedRow] = useState<StaffOrganization | null>(null);
    const tableWrapper = useRef<HTMLDivElement>(null);
    const [filterState, setFilterState] = useState(false);
    const [sideFilter, setSideFilter] = useState(false);
    const rowElement = useRef(0);
    const first = useRef(true);
    const table = useRef<HTMLDivElement>(null);

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

    const onDoubleClick = useCallback(
        (e: { originalEvent: Event; data: any; index: number }) => {
            history.push(`${window.location.pathname}/edit`);
        },
        [history]
    );

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
                    onDoubleClick(ev);
                }
                if (first.current === true && ev.key === 'ArrowDown') {
                    first.current = false;
                    setSelectedRow(tableState[0]);
                }
            }
        },
        [history, selectedRow, tableState, onDoubleClick]
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

    /* Calculate and rerender Table height */
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

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
    }, [size]);

    useEffect(() => {
        dispatch(requestOrganizations());
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);

        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [selectedRow, history, onKeyDown]);

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
        onSelectionChange: (e: any) => setSelectedRow(e.value),
        onRowDoubleClick: () => toggleSidebar(),
        paginator: true,
        paginatorTemplate:
            'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        currentPageReportTemplate: `С {first} по {last} из ${tableState.length}`,
        rows: tableState.length,
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
        <div className="page staff-organizations">
            {/* Toolbar */}
            <Toolbar>
                {/* Left side */}
                <section className="toolbar__section">
                    <Buttons name="Settings" size="m" onPress={() => setSideFilter(!sideFilter)} />
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

                {/* Modals */}
                {/* Add */}
                <Modal
                    {...addProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Добавление должности"
                    modalName="add"
                >
                    <div>
                        <span>Add</span>
                    </div>
                </Modal>

                {/* Edit */}
                <Modal
                    {...editProps}
                    onSuccessClick={() => console.log('123')}
                    modalHeader="Редактирование должности"
                    modalName="edit"
                >
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
                    modalName="delete"
                >
                    {selectedRow ? (
                        <span>{deleteText(`должность ${selectedRow.orgShortName}`)}</span>
                    ) : (
                        <span>{deleteText('эту должность')}</span>
                    )}
                </Modal>
            </Toolbar>

            <section className="page__wrapper">
                <div ref={tableWrapper} className="table-wrapper">
                    {/* Table */}
                    <Popover>
                        <div className="table" ref={table}>
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
                    <SideFilter items={tableState} onClose={toggleSideFilter} isOpen={sideFilter}>
                        <OrganizationFilter />
                    </SideFilter>
                </div>
                <Sidebar
                    sidebarName="События"
                    icon="Events"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffOrganizationsToggleSidebar())}
                >
                    <OrganizationEdit toggleSidebar={toggleSidebar} selectedEntry={selectedRow} />
                </Sidebar>
            </section>
        </div>
    );
};

export default StaffOrganizations;
