import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { GeneralFilters } from './GeneralFilters/GeneralFilters';
import { GroupsFilters } from './GroupsFilters/GroupsFilters';
import { EquipmentFilters } from './EquipmentFilters/EquipmentFilters';
import { EventsFilters } from './EventsFilters/EventsFilters';
import { AccessZonesFilters } from './AccessZonesFilters/AccessZonesFilters';

export default function SecurityPostCentralFilter() {
    return (
        <div>
            <Accordion multiple>
                <AccordionTab header="Общие" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <GeneralFilters />
                </AccordionTab>

                <AccordionTab header="Группы" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <GroupsFilters />
                </AccordionTab>

                <AccordionTab
                    header="Оборудование"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <EquipmentFilters />
                </AccordionTab>

                <AccordionTab header="События" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <EventsFilters />
                </AccordionTab>

                <AccordionTab
                    header="Зоны доступа"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <AccessZonesFilters />
                </AccordionTab>
            </Accordion>
        </div>
    );
}
