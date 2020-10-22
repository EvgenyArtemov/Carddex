// @ts-nocheck
import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

export const Categories = () => {
    const initialCheckBoxesState = {
        checked: false,
        selectedItems: []
    };
    const [checkBoxesState = initialCheckBoxesState, setcheckBoxesState] = useState();

    const onItemChange = (e) => {
        const selectedItems = [...checkBoxesState.selectedItems];
        console.log('checkbox click', e);
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
        { name: 'Категория 1' },
        { name: 'Категория 2' },
        { name: 'Категория 3' },
        { name: 'Категория 4' },
        { name: 'Категория 5' },
        { name: 'Категория 6' },
        { name: 'Категория 7' },
        { name: 'Категория 8' },
        { name: 'Категория 9' },
        { name: 'Категория 10' },
        { name: 'Категория 11' },
        { name: 'Категория 12' },
        { name: 'Категория 14' },
        { name: 'Категория 15' }
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
            <div className="content__items">
                <Button label="Выбрать все" onClick={selectAll} />
                <Button label="Снять выбор" onClick={deSelectAll} />
            </div>
            <div className="content__items">
                <ListBox
                    value={checkBoxesState.selectedItems}
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
