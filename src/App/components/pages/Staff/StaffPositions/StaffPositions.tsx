import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import ToolbarSeparator from 'App/components/global/Toolbar/ToolbarSeparator/ToolbarSeparator';
import ToolbarSearch from 'App/components/global/Toolbar/ToolbarSearch/ToolbarSearch';
import Modal from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import deleteText from 'App/components/global/Modal/Alert/DeleteModal/deleteText';
import { StaffPosition } from 'redux/Staff/StaffPositions/staffPositionsTypes';
import positions from './fakeData';
import { Popover } from '../../../global/Popover/Popover';
import './StaffPositions.scss';

const StaffPositions = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');

    const clearSearch = () => {
        setSearch('');
    };

    const [selectedRow, setSelectedRow] = useState<StaffPosition | null>(null);

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
        <div className="page staff-positions">
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
                <ToolbarSearch
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onCrossClick={clearSearch}
                />
            </Toolbar>

            <div className="table-wrapper">
                {/* Table */}
                <Popover>
                    <div className="table">
                        <DataTable
                            value={positions}
                            loading={positions.length === 0}
                            header="Должности"
                            className="p-datatable-sm"
                            scrollable
                            scrollHeight="90%"
                            selectionMode="single"
                            selection={selectedRow}
                            onSelectionChange={(e) => setSelectedRow(e.value)}
                            onRowDoubleClick={() =>
                                history.push(`${window.location.pathname}/edit`)
                            }>
                            <Column
                                field="name"
                                header="Наименование"
                                sortable
                            />
                            <Column
                                field="count"
                                header="Число сотрудников"
                                sortable
                            />
                            <Column
                                field="isDeleted"
                                header="Статус удаления"
                                sortable
                            />
                        </DataTable>
                    </div>
                </Popover>
            </div>

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
                    <span>{deleteText(`должность ${selectedRow.name}`)}</span>
                ) : (
                    <span>{deleteText('эту должность')}</span>
                )}
            </Modal>
        </div>
    );
};

export default StaffPositions;
