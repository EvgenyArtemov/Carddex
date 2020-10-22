import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { GeneralPage } from './MonitoringParameters/GeneralPage/GeneralPage';
import { AutoUpdate } from './MonitoringParameters/AutoUpdatePage/AutoUpdate';
import { Categories } from './MonitoringParameters/CategoriesPage/Categories';
import { SourcesPage } from './MonitoringParameters/SourcesPage/SourcesPage';
import { CodesPage } from './MonitoringParameters/CodesPage/CodesPage';
import { ClassesPage } from './MonitoringParameters/ClassesPage/ClassesPage';
import { appToggleBar } from 'redux/App/appActions';

const SecurityPostMonitoringFilterInner = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Accordion multiple onTabOpen={() => dispatch(appToggleBar())}>
                <AccordionTab header="Общее" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <GeneralPage />
                </AccordionTab>

                <AccordionTab
                    header="Автообновление"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <AutoUpdate />
                </AccordionTab>

                <AccordionTab
                    header="Категории"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <Categories />
                </AccordionTab>

                <AccordionTab
                    header="Источники"
                    headerStyle={{ margin: '0 -15px' }}
                    contentStyle={{ margin: '0 -15px' }}
                >
                    <SourcesPage />
                </AccordionTab>

                <AccordionTab header="Коды" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <CodesPage />
                </AccordionTab>

                <AccordionTab header="Классы" headerStyle={{ margin: '0 -15px' }} contentStyle={{ margin: '0 -15px' }}>
                    <ClassesPage />
                </AccordionTab>
            </Accordion>
        </>
    );
};

export const SecurityPostMonitoringFilter = memo(SecurityPostMonitoringFilterInner);
