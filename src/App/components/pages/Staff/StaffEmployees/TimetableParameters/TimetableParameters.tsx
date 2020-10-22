/* eslint-disable no-nested-ternary */
// @ts-nocheck
import React, { useState } from 'react';
import { Menu } from 'primereact/menu';
// import { ListBox } from 'primereact/listbox';
// import { Checkbox } from 'primereact/checkbox';
// import { Button } from 'primereact/button';
// import { GeneralPage } from './GeneralPage/GeneralPage';
import { AutoUpdate } from './AutoUpdatePage/AutoUpdate';
import { Categories } from './CategoriesPage/Categories';
import { SourcesPage } from './SourcesPage/SourcesPage';
import { CodesPage } from './CodesPage/CodesPage';
import { ClassesPage } from './ClassesPage/ClassesPage';
import { EmployeeTimetableBig } from './EmployeeTimetableBig/EmployeeTimetableBig';
// import { StaffEmployee } from '../staffEmployeesTypes';
import './TimetableParameters.scss';

export const TimetableParameters = ({ selectedUser }) => {
    const [currentMenuItem, setCurrentMenuItem] = useState('Январь');
    const onMenuClick = (e: any) => {
        setCurrentMenuItem(e.item.label);
    };

    const menuItems = [
        { label: 'Январь', command: onMenuClick },
        { label: 'Февраль', command: onMenuClick },
        { label: 'Март', command: onMenuClick },
        { label: 'Апрель', command: onMenuClick },
        { label: 'Май', command: onMenuClick },
        { label: 'Июнь', command: onMenuClick },
        { label: 'Июль', command: onMenuClick },
        { label: 'Август', command: onMenuClick },
        { label: 'Сентябрь', command: onMenuClick },
        { label: 'Октябрь', command: onMenuClick },
        { label: 'Ноябрь', command: onMenuClick },
        { label: 'Декабрь', command: onMenuClick }
    ];

    return (
        <div className="monitoring-params">
            <aside className="monitoring-params__menu">
                <Menu model={menuItems} />
            </aside>

            {currentMenuItem === 'Январь' ? (
                <EmployeeTimetableBig selectedUser={selectedUser} />
            ) : currentMenuItem === 'Февраль' ? (
                <AutoUpdate />
            ) : currentMenuItem === 'Март' ? (
                <Categories />
            ) : currentMenuItem === 'Апрель' ? (
                <ClassesPage />
            ) : currentMenuItem === 'Май' ? (
                <CodesPage />
            ) : currentMenuItem === 'Июнь' ? (
                <SourcesPage />
            ) : (
                <div>Выберите пункт меню!</div>
            )}
        </div>
    );
};
