import React, { memo } from 'react';
import { Control } from 'App/../assets/images/control';
import { CentralPost } from 'App/../assets/images/central-post';
import { Attendance } from 'App/../assets/images/attendance';
import { Monitoring } from 'App/../assets/images/monitoring';

import { Pupils } from 'App/../assets/images/pupils';
import { Organization } from 'App/../assets/images/organization';
import { Subdivisions } from 'App/../assets/images/subdivisions';
import { Positions } from 'App/../assets/images/positions';
import { Employees } from 'App/../assets/images/employees';
import { WorkSchedules } from 'App/../assets/images/work-schedules';

import { Identifiers } from 'App/../assets/images/identifiers';
import { RfidCard } from 'App/../assets/images/rfid-card';
import { Biometry } from 'App/../assets/images/biometry';
import { Qr2D } from 'App/../assets/images/qr2d';

import { Employee } from 'App/../assets/images/employee';

import { Reports } from 'App/../assets/images/reports';
import { Events } from 'App/../assets/images/events';
import { TimeTracking } from 'App/../assets/images/time-tracking';
import { Statistic } from 'App/../assets/images/statistic';
import { Visitors } from 'App/../assets/images/visitors';

import { Settings } from 'App/../assets/images/settings';
import { UserRole } from 'App/../assets/images/user-role';
import { Zoning } from 'App/../assets/images/zoning';
import { Equipment } from 'App/../assets/images/equipment';
import { Calendar } from 'App/../assets/images/calendar';
import { ImportExport } from 'App/../assets/images/import-export';
import { Info } from 'App/../assets/images/info';

import { HomeIcon } from 'App/../assets/images/home';
import { CompanyIcon } from 'App/../assets/images/companyIcon';
import { ShipmentIcon } from 'App/../assets/images/shipmentIcon';

import { CardexxIcon } from 'App/../assets/images/carddex-icon';

interface linkName {
    linkName: string;
    style?: {
        [index: string]: string;
    };
}

const SideNavIconInner = (props: linkName) => {
    const defaultIcon = [
        'Контроль',
        'Центральный пост',
        'Посещаемость',
        'Мониторинг',
        'Учебное заведение 1',
        'Учебное заведение 2',
        'Персонал',
        'Посетители',
        'Идентификаторы',
        'Бесконтактные RFID ключи',
        'Отпечатки пальцев',
        '2D штрих-коды',
        'Отчеты',
        'События',
        'Учет рабочего времени',
        'Статистика',
        'Настройки',
        'Профиль',
        'Пользователи и роли',
        'Зональность территории',
        'Оборудование',
        'Производственный календарь',
        'Импорт, экспорт данных',
        'Производство',
        'Организации',
        'Подразделения',
        'Должности',
        'Сотрудники',
        'Графики работы',
        'О программе',
        'Сервис',
        'CARDDEX'
    ];

    return (
        <div className="icon">
            {props.linkName === 'Контроль' && <Control />}
            {props.linkName === 'Центральный пост' && <CentralPost />}
            {props.linkName === 'Посещаемость' && <Attendance />}
            {props.linkName === 'Мониторинг' && <Monitoring />}

            {props.linkName === 'Учебное заведение 1' && <Pupils />}

            {props.linkName === 'Учебное заведение 2' && <Pupils />}

            {props.linkName === 'Персонал' && <Employee />}
            {props.linkName === 'Организации' && <Organization />}
            {props.linkName === 'Подразделения' && <Subdivisions />}
            {props.linkName === 'Должности' && <Positions />}
            {props.linkName === 'Сотрудники' && <Employees />}
            {props.linkName === 'Графики работы' && <WorkSchedules />}

            {props.linkName === 'Идентификаторы' && <Identifiers />}
            {props.linkName === 'Бесконтактные RFID ключи' && <RfidCard />}
            {props.linkName === 'Отпечатки пальцев' && <Biometry />}
            {props.linkName === '2D штрих-коды' && <Qr2D />}

            {props.linkName === 'Отчеты' && <Reports />}
            {props.linkName === 'События' && <Events />}
            {props.linkName === 'Учет рабочего времени' && <TimeTracking />}
            {props.linkName === 'Статистика' && <Statistic />}
            {props.linkName === 'Посетители' && <Visitors />}

            {props.linkName === 'Настройки' && <Settings />}
            {props.linkName === 'Профиль' && <Employee />}
            {props.linkName === 'Пользователи и роли' && <UserRole />}
            {props.linkName === 'Зональность территории' && <Zoning />}
            {props.linkName === 'Оборудование' && <Equipment />}
            {props.linkName === 'Производственный календарь' && <Calendar />}
            {props.linkName === 'Импорт, экспорт данных' && <ImportExport />}
            {props.linkName === 'О программе' && <Info />}

            {props.linkName === 'Производство' && <CompanyIcon />}
            {props.linkName === 'Сервис' && <ShipmentIcon />}
            {props.linkName === 'CARDDEX' && <CardexxIcon />}
            {!defaultIcon.includes(props.linkName) && <HomeIcon />}
        </div>
    );
};

export const SideNavIcon = memo(SideNavIconInner);
