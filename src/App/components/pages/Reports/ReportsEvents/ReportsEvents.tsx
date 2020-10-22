import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import ToolbarSearch from 'App/components/global/Toolbar/ToolbarSearch/ToolbarSearch';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { State } from '../../../../../redux/store';
import { requestReportsEvents } from '../../../../../redux/Reports/ReportsEvents/reportsEventsActions';
import { Popover } from '../../../global/Popover/Popover';
import './ReportsEvents.scss';

const ReportsEvents = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);
    const { events } = useSelector((state: State) => state.reports.reportsEvents, shallowEqual);

    const clearSearch = () => {
        setSearch('');
    };

    useEffect(() => {
        dispatch(requestReportsEvents());
    }, [dispatch]);

    console.log(events);

    return (
        <div className="reports-events">
            {/* Toolbar */}
            <Toolbar>
                {/* Right side */}
                <ToolbarSearch value={search} onChange={(e) => setSearch(e.target.value)} onCrossClick={clearSearch} />
            </Toolbar>

            <div className="table-wrapper">
                {/* Table */}
                <Popover>
                    <div className="table">
                        <DataTable
                            value={events}
                            loading={events.length === 0}
                            header="События"
                            className="p-datatable-sm"
                            scrollable
                            scrollHeight="90%"
                            selectionMode="single"
                            selection={selectedRow}
                            onSelectionChange={(e) => setSelectedRow(e.value)}
                            onRowDoubleClick={() => history.push(`${window.location.pathname}/edit`)}
                        >
                            <Column field="eventDate" header="Дата" />
                            <Column field="physpersonName" header="Ф.И.О." />
                            <Column field="" header="Должность" />
                            <Column field="" header="Подразделение" />
                            <Column field="eventCodeName" header="Событие" />
                            <Column field="sourceName" header="Источник" />
                        </DataTable>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default ReportsEvents;
