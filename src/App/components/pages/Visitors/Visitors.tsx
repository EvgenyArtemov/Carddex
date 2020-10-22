import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import ToolbarSeparator from 'App/components/global/Toolbar/ToolbarSeparator/ToolbarSeparator';
import ToolbarSearch from 'App/components/global/Toolbar/ToolbarSearch/ToolbarSearch';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import openModal from 'utils/openModal/openModal';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { Visitor } from 'App/components/pages/Visitors/VisitorTypes';
import visitorData from './fakeData';
import { Popover } from '../../global/Popover/Popover';
import './Visitors.scss';

const Visitors = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [selectedRow, setSelectedRow] = useState<Visitor | null>(null);
    const clearSearch = () => {
        setSearch('');
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            console.log(e);
            /* Delete */
            if (e.code === 'Delete') {
                console.log('delete');
                console.log(selectedRow);
                if (selectedRow) {
                    history.push(`${window.location.pathname}/delete`);
                }
            }
        };

        document.addEventListener('keydown', onKeyDown, false);

        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [selectedRow, history]);

    return (
        <div className="visitors">
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
                            value={visitorData}
                            loading={visitorData.length === 0}
                            header="Посетители"
                            className="p-datatable-sm"
                            scrollable
                            scrollHeight="90%"
                            selectionMode="single"
                            selection={selectedRow}
                            onSelectionChange={(e) => setSelectedRow(e.value)}
                            onRowDoubleClick={() => history.push(`${window.location.pathname}/edit`)}
                        >
                            <Column field="fio" header="ФИО" sortable />
                            <Column field="contactPhone" header="Контактный номер" sortable />
                            <Column field="validity" header="Срок действия" sortable />
                        </DataTable>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Visitors;
