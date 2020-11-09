import React, { useState } from 'react';
import './ReportsWorkingTimeFilter.scss';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Accordion } from './Accordion/Accordion';
import { Add } from '../../../../../../assets/images/add_button';

export const ReportsWorkingTimeFilter = () => {
    const [filterPattern, setFilterPattern] = useState('');
    const inputHandler = (ev: any) => {
        setFilterPattern(ev.target.value);
    };
    const options = ['', 'first option', 'second option', 'third option'];
    return (
        <div className="workingtime__filter__wrapper">
            <div className="filter__selector">
                <h4 className="filter__header p--sm--bold">Сохраненные фильтры</h4>
                <div className="filter__select__container">
                    <Inputs
                        list={options}
                        type="select"
                        name="working__time"
                        value={filterPattern}
                        onInputChange={inputHandler}
                    />
                    <Buttons name="Delete" size="m" typical />
                </div>
                <button type="button" className="p--sm--bold">
                    <Add />
                    Сохранить
                </button>
            </div>
            <Accordion header="Период">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda quisquam exercitationem
                veritatis at deserunt ratione? Nemo esse, incidunt dolores sit saepe repellendus?
            </Accordion>
            <Accordion header="Организации">Content</Accordion>
            <Accordion header="Подразделения">Content</Accordion>
            <Accordion header="Сотрудники">Content</Accordion>
        </div>
    );
};
