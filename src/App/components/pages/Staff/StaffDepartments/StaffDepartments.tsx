import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import addProps from 'App/components/global/Modal/templates/addProps';
import editProps from 'App/components/global/Modal/templates/editProps';
import deleteProps from 'App/components/global/Modal/templates/deleteProps';
import deleteText from 'App/components/global/Modal/templates/deleteText';
import { StaffDepartment } from 'App/../redux/Staff/StaffDepartments/staffDepartmentsTypes';
import { requestDepartments, getStaffDepartments } from 'redux/Staff/StaffDepartments/staffDepartmentsAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'App/../redux/store';
import { Popover } from 'App/components/global/Popover/Popover';
import TableBottomCounter from 'App/components/global/TableBottomCounter/TableBottomCounter';
import './StaffDepartments.scss';

const StaffDepartments = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.staff.staffDepartments.departmentsTable, shallowEqual);
    const history = useHistory();
    const [selectedRow, setSelectedRow] = useState<StaffDepartment | null>(null);
    const rowElement = useRef(0);
    const first = useRef(true);

    useEffect(() => {
        dispatch(requestDepartments());
    }, [dispatch]);

    /* Table interaction logic */

    const selectionChangeHandler = (e: { value: StaffDepartment }) => {
        first.current = false;
        rowElement.current = tableState.indexOf(e.value);
        setSelectedRow(e.value);
    };

    const onDoubleClick = (e: { originalEvent: Event; data: any; index: number }) => {
        history.push(`${window.location.pathname}/edit`);
    };

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

    const tableScrolleHeight = () => {
        const pageWrapper = document.querySelector('.page')?.clientHeight;
        const toolbar = document.querySelector('.toolbar')?.clientHeight;
        const tableHeader = document.querySelector('.p-datatable-header')?.clientHeight;
        const tableScrollableHeader = document.querySelector('.p-datatable-scrollable-header')?.clientHeight;
        const tablePaginator = document.querySelector('.p-paginator')?.clientHeight;
        const tableHeight = pageWrapper! - (tableHeader! + toolbar! + tableScrollableHeader! + tablePaginator!) - 28;
        document.querySelector('.p-datatable-scrollable-body')?.setAttribute('style', `max-height:${tableHeight}px;`);
    };

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Подразделения',
        className: 'p-datatable-sm',
        resizableColumns: true,
        style: { height: '100%' },
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: (e: any) => onDoubleClick(e),
        onValueChange: (sortedData: any) => dispatch(getStaffDepartments(sortedData)),
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
        <div className="page staff-departments">
            {/* Toolbar */}
            <Toolbar>
                <section className="toolbar__section">
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
                onSuccessClick={() => console.log('123')}
                modalHeader="Добавление должности"
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
                modalIcon="Attention"
            >
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
                modalIcon="Warning"
            >
                {selectedRow ? (
                    <span>{deleteText(`должность ${selectedRow.orgName}`)}</span>
                ) : (
                    <span>{deleteText('эту должность')}</span>
                )}
            </Modal>

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
            </div>
        </div>
    );
};

export default StaffDepartments;
