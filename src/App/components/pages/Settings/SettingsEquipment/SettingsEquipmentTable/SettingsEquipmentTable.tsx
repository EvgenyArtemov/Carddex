import React, { useState, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { selectSecurityPostMonitoringTableRow } from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import { Tourniquet } from 'App/../assets/images/tourniquet';
import data from './data.json';
import { SettingsEquipmentTableState, TableState, EquipDitalState } from './SettingsEquipmentTableType';
import './SettingsEquipmentTable.scss';

const SettingsEquipmentTableInner = () => {
    const dispatch = useDispatch();
    const tableState: SettingsEquipmentTableState = JSON.parse(JSON.stringify(data));
    const [expandedRows, setExpandedRows] = useState([]);
    const [expandedSubRows, setExpandedSubRows] = useState([]);
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

    const imageBody = (): JSX.Element | undefined | void => {
        return <Tourniquet />;
    };

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

    const rowExpansionSubTemplate = (tableData: EquipDitalState) => {
        return (
            <div className="orders-subtable">
                <h5>Модули</h5>
                <DataTable value={tableData.modules}>
                    <Column field="id" header="Модули контроля" />
                    <Column field="modulesConrolName" header="Модули идентификации" />
                </DataTable>
            </div>
        );
    };

    const rowExpansionTemplate = (tableData: TableState) => {
        const subTableProps = {
            value: tableData.equipDital,
            expandedSubRows,
            onRowToggle: (e: any) => {
                setExpandedSubRows(e.data);
                console.log(e);
            },
            rowExpansionSubTemplate,
            dataKey: 'id'
        };

        return (
            <div className="orders-subtable">
                <h5>{tableData.equipType} по списку</h5>
                <DataTable {...subTableProps}>
                    <Column expander style={{ width: '50px' }} />
                    <Column field="equipName" header="Имя" sortable />
                    <Column field="equipPort" header="Порт" sortable />
                    <Column field="equipSpeed" header="Скорость" sortable />
                    <Column field="equipGroup" header="Группа" sortable />
                    <Column field="equipPassCount" header="Количество проходов" sortable />
                </DataTable>
            </div>
        );
    };

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        header: 'Оборудование',
        className: 'p-datatable-sm',
        resizableColumns: true,
        style: { height: '100%' },
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        expandedRows,
        onRowToggle: (e: any) => {
            setExpandedRows(e.data);
        },
        rowExpansionTemplate,
        dataKey: 'id',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => console.log('Double click')
    };

    return (
        <div className="table-wrapper">
            {/* Table */}
            <Popover>
                <div className="table" ref={tableElement}>
                    <DataTable {...tableProps}>
                        <Column expander style={{ width: '50px' }} />
                        <Column field="equipType" header="Тип устройства" sortable />
                        <Column header="Image" body={imageBody} style={{ textAlign: 'center', width: '64px' }} />
                        <Column field="equipCount" header="Количество" sortable />
                    </DataTable>
                </div>
            </Popover>
        </div>
    );
};

export const SettingsEquipmentTable = memo(SettingsEquipmentTableInner);
