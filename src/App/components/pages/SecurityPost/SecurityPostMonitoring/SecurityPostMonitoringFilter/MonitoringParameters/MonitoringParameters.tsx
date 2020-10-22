/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Menu } from 'primereact/menu';
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { GeneralPage } from './GeneralPage/GeneralPage';
import { AutoUpdate } from './AutoUpdatePage/AutoUpdate';
import { Categories } from './CategoriesPage/Categories';
import { SourcesPage } from './SourcesPage/SourcesPage';
import { CodesPage } from './CodesPage/CodesPage';
import { ClassesPage } from './ClassesPage/ClassesPage';
import './MonitoringParameters.scss';

export const MonitoringParameters = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState('Общее');
    const onMenuClick = (e: any) => {
        setCurrentMenuItem(e.item.label);
    };

    const menuItems = [
        { label: 'Общее', icon: 'pi pi-list', command: onMenuClick },
        { label: 'Автообновление', icon: 'pi pi-refresh', command: onMenuClick },
        { label: 'Категории', icon: 'pi pi-sort-alt', command: onMenuClick },
        { label: 'Классы', icon: 'pi pi-sort-alt', command: onMenuClick },
        { label: 'Коды', icon: 'pi pi-sort-numeric-up', command: onMenuClick },
        { label: 'Источники', icon: 'pi pi-sign-in', command: onMenuClick }
    ];

    return (
        <div className="monitoring-params">
            <aside className="monitoring-params__menu">
                <Menu model={menuItems} />
            </aside>

            {currentMenuItem === 'Общее' ? (
                <GeneralPage />
            ) : currentMenuItem === 'Автообновление' ? (
                <AutoUpdate />
            ) : currentMenuItem === 'Категории' ? (
                <Categories />
            ) : currentMenuItem === 'Классы' ? (
                <ClassesPage />
            ) : currentMenuItem === 'Коды' ? (
                <CodesPage />
            ) : currentMenuItem === 'Источники' ? (
                <SourcesPage />
            ) : (
                <div>Выберите пункт меню!</div>
            )}
        </div>
    );
};
