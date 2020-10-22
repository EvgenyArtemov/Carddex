import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './EmployeeSchedule.scss';

// @ts-ignore
export const EmployeeSchedule: EmployeeScheduleProps = ({ selectedUser }) => {
    return (
        <div className="employee__schedule__wrapper">
            <Accordion style={{ width: '92%' }}>
                <AccordionTab
                    header="Расписание"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    График сотрудника <strong>{selectedUser?.name.split(' ').splice(0, 2).join(' ')}:</strong> 5/2
                </AccordionTab>
            </Accordion>
        </div>
    );
};
