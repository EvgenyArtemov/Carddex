// @ts-nocheck
import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';

export const Positions = () => {
    const initialCheckBoxesState = {
        checked: false,
        selectedItems: []
    };
    const [checkBoxesState = initialCheckBoxesState, setcheckBoxesState] = useState();

    const onItemChange = (e) => {
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
        { name: 'Должность 1' },
        { name: 'Должность 2' },
        { name: 'Должность 3' },
        { name: 'Должность 4' },
        { name: 'Должность 5' }
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
    return (
        <section className="monitoring-params__content">
            <div className="content__items">
                <ListBox
                    value={checkBoxesState.selectedItems}
                    options={items}
                    onChange={listBoxHandler}
                    optionLabel="name"
                    itemTemplate={itemTemplate}
                    style={{ width: '100%' }}
                    listStyle={{ maxHeight: '120px', height: '100%' }}
                />
            </div>
        </section>
    );
};
