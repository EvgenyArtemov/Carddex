// @ts-nocheck
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';

export const OrganizationFilter = () => {
    // Checkboxes logic >>
    // const [selectedItem, setSelectedItem] = useState();
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

    const orgItems = [
        { name: 'Организация 1' },
        { name: 'Организация 2' },
        { name: 'Организация 3' },
        { name: 'Организация 4' },
        { name: 'Организация 5' },
        { name: 'Организация 6' },
        { name: 'Организация 7' },
        { name: 'Организация 8' },
        { name: 'Организация 9' },
        { name: 'Организация 10' },
        { name: 'Организация 11' },
        { name: 'Организация 12' },
        { name: 'Организация 14' },
        { name: 'Организация 15' }
    ];

    const typeItems = [{ name: 'Кадровый' }, { name: 'Производственный' }];

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
        const allSelected = orgItems.map((el) => {
            return el.name;
        });
        setcheckBoxesState({ ...checkBoxesState, selectedItems: [...allSelected] });
    };

    const deSelectAll = () => {
        setcheckBoxesState({ ...checkBoxesState, selectedItems: [] });
    };

    return (
        <div>
            <Accordion multiple>
                <AccordionTab
                    header="Организации"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <div className="content__items">
                        <Button label="Выбрать все" onClick={selectAll} />
                        <Button label="Снять выбор" onClick={deSelectAll} />
                    </div>
                    <div className="content__items">
                        <ListBox
                            value={checkBoxesState.selectedItems}
                            options={orgItems}
                            onChange={listBoxHandler}
                            filter
                            optionLabel="name"
                            itemTemplate={itemTemplate}
                            style={{ width: '100%' }}
                            listStyle={{ maxHeight: '198px', height: '100%' }}
                        />
                    </div>
                </AccordionTab>

                <AccordionTab
                    header="Тип Учета"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <div className="content__items">
                        <ListBox
                            value={checkBoxesState.selectedItems}
                            options={typeItems}
                            onChange={listBoxHandler}
                            optionLabel="name"
                            itemTemplate={itemTemplate}
                            style={{ width: '100%' }}
                            listStyle={{ maxHeight: '198px', height: '100%' }}
                        />
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    );
};
