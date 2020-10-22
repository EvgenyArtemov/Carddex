import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Organizations } from './FilterParameters/Organizations/Organizations';
import { Departments } from './FilterParameters/Departments/Departments';
import { Positions } from './FilterParameters/Positions/Positions';
import './StaffEmployeeFilter.scss';

export const StaffEmployeeFilter = () => {
    return (
        <div>
            <Accordion multiple>
                <AccordionTab
                    header="Организация"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <Organizations />
                </AccordionTab>

                <AccordionTab
                    header="Подразделения"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <Departments />
                </AccordionTab>

                <AccordionTab
                    header="Должность"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <Positions />
                </AccordionTab>
            </Accordion>
        </div>
    );
};
