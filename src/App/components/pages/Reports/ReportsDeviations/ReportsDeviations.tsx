import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import ToolbarSearch from 'App/components/global/Toolbar/ToolbarSearch/ToolbarSearch';
import { DataTable } from 'primereact/datatable';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import openModal from 'utils/openModal/openModal';
import { Column } from 'primereact/column';
import ToolbarSeparator from '../../../global/Toolbar/ToolbarSeparator/ToolbarSeparator';
import { State } from '../../../../../redux/store';
import { requestDeviationsEvents } from '../../../../../redux/Reports/ReportsDeviations/reportsDeviationsActions';
import { Popover } from '../../../global/Popover/Popover';
import './ReportsDeviations.scss';

const ReportsDeviations = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);
    const { events } = useSelector((state: State) => state.reports.reportsDeviations, shallowEqual);

    const clearSearch = () => {
        setSearch('');
    };

    useEffect(() => {
        dispatch(requestDeviationsEvents());
    }, [dispatch]);

    return (
        <div className="reports-deviations">
            {/* Toolbar */}
            <Toolbar>
                {/* Left side */}
                <Button
                    iconBefore={<AddIcon label="Добавить" />}
                    appearance="primary"
                    onClick={() => openModal('add', history)}
                />
                <ToolbarSeparator />
                <Button
                    isDisabled={!selectedRow}
                    iconBefore={<EditFilledIcon label="Изменить" />}
                    appearance="primary"
                    onClick={() => openModal('edit', history)}
                />
                <ToolbarSeparator />
                <Button
                    isDisabled={!selectedRow}
                    iconBefore={<TrashIcon label="Удалить" />}
                    appearance="primary"
                    onClick={() => openModal('delete', history)}
                />
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
                            header="Отклонения"
                            className="p-datatable-sm"
                            scrollable
                            scrollHeight="90%"
                            selectionMode="single"
                            selection={selectedRow}
                            onSelectionChange={(e) => setSelectedRow(e.value)}
                            onRowDoubleClick={() => history.push(`${window.location.pathname}/edit`)}
                        >
                            <Column field="eventDate" header="Дата" sortable />
                            <Column field="physpersonName" header="Ф.И.О." sortable />
                            <Column field="" header="Должность" sortable />
                            <Column field="" header="Подразделение" sortable />
                            <Column field="eventCodeName" header="Событие" sortable />
                            <Column field="sourceName" header="Источник" sortable />
                        </DataTable>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default ReportsDeviations;
