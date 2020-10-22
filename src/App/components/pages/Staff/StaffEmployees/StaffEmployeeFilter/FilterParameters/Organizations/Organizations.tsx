// @ts-nocheck
import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

export const Organizations = () => {
    const initialCheckBoxesState = {
        checked: false,
        selectedItems: []
    };
    const [checkBoxesState = initialCheckBoxesState, setcheckBoxesState] = useState();

    const onItemChange = (e: any) => {
        const selectedItems = [...checkBoxesState.selectedItems];

        if (e.checked) selectedItems.push(e.value);
        else selectedItems.splice(selectedItems.indexOf(e.value), 1);

        setcheckBoxesState({ ...checkBoxesState, selectedItems: [...selectedItems] });
    };

    const listBoxHandler = (e) => {
        if (checkBoxesState.selectedItems.includes(e.value?.name)) {
            setcheckBoxesState({
                ...checkBoxesState,
                selectedItems: [...checkBoxesState.selectedItems.filter((el) => el !== e.value?.name)]
            });
        } else if (e.value === null) {
            setcheckBoxesState({
                ...checkBoxesState,
                selectedItems: [...checkBoxesState.selectedItems.splice(-1, 1)]
            });
        } else {
            const selectedItems = [...checkBoxesState.selectedItems];
            selectedItems.push(e.value?.name);
            setcheckBoxesState({ ...checkBoxesState, selectedItems: [...selectedItems] });
        }
    };

    const items = [
        { name: 'Организация 1' },
        { name: 'Организация 2' },
        { name: 'Организация 3' },
        { name: 'Организация 4' },
        { name: 'Организация 5' },
        { name: 'Организация 6' }
    ];

    const itemTemplate = (option) => {
        return (
            <div className="country-item" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="p-field-checkbox">
                    <Checkbox
                        inputId="binary"
                        value={option.name}
                        checked={checkBoxesState.selectedItems.includes(option.name)}
                        onChange={onItemChange}
                        style={{ marginRight: '5px' }}
                    />
                </div>
                <div>{option.name}</div>
            </div>
        );
    };

    const selectAll = () => {
        const allSelected = items.map((el) => {
            return el.name;
        });
        setcheckBoxesState({ ...checkBoxesState, selectedItems: [...allSelected] });
    };

    const deSelectAll = () => {
        setcheckBoxesState({ ...checkBoxesState, selectedItems: [] });
    };
    return (
        <section className="monitoring-params__content">
            {/* <div className="content__header">
                <h2>Категории</h2>
            </div> */}
            <div className="content__items">
                <Button label="Выбрать все" onClick={selectAll} />
                <Button label="Снять выбор" onClick={deSelectAll} />
            </div>
            <div className="content__items">
                <ListBox
                    value={checkBoxesState.selectedItem}
                    options={items}
                    onChange={listBoxHandler}
                    filter
                    optionLabel="name"
                    itemTemplate={itemTemplate}
                    style={{ width: '100%' }}
                    listStyle={{ maxHeight: '198px', height: '100%' }}
                />
            </div>
        </section>
    );
};
