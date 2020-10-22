import React, { memo } from 'react';
import { HomeIcon } from '../../../../assets/images/home';
import { ListIcon } from '../../../../assets/images/listIcon';
import { CompanyIcon } from '../../../../assets/images/companyIcon';
import { ShipmentIcon } from '../../../../assets/images/shipmentIcon';
import { Profile } from '../../../../assets/images/userIcon';
import { Parameters } from '../../../../assets/images/settingsIcon';
import { UsersIcon } from '../../../../assets/images/usersIcon';
import { ConfigIcon } from '../../../../assets/images/configIcon';
import { CoreIcon } from '../../../../assets/images/coreIcon';
import { IdentifiersIcon } from '../../../../assets/images/identifiersIcon';
import { DataIcon } from '../../../../assets/images/dataIcon';
import { TimeIcon } from '../../../../assets/images/timeIcon';

interface linkName {
    linkName: string;
    style?: {
        [index: string]: string;
    };
}

const SideNavIconInner = (props: linkName) => {
    return (
        <div className="icon">
            {props.linkName === 'Контроль' ? (
                <HomeIcon />
            ) : props.linkName === 'Персонал' ? (
                <UsersIcon />
            ) : props.linkName === 'Посетители' ? (
                <Profile />
            ) : props.linkName === 'Идентификаторы' ? (
                <IdentifiersIcon />
            ) : props.linkName === 'Отчеты' ? (
                <ListIcon />
            ) : props.linkName === 'Настройки' ? (
                <Parameters />
            ) : props.linkName === 'Производство' ? (
                <CompanyIcon />
            ) : props.linkName === 'Центральный пост' ? (
                <DataIcon />
            ) : props.linkName === 'Мониторинг' ? (
                <TimeIcon />
            ) : props.linkName === 'Организации' ? (
                <CompanyIcon />
            ) : props.linkName === 'Подразделения' ? (
                <UsersIcon />
            ) : props.linkName === 'Должности' ? (
                <Profile />
            ) : props.linkName === 'Сотрудники' ? (
                <UsersIcon />
            ) : props.linkName === 'Графики работы' ? (
                <TimeIcon />
            ) : props.linkName === 'Отчеты' ? (
                <ListIcon />
            ) : props.linkName === 'О программе' ? (
                <ConfigIcon />
            ) : props.linkName === 'Оборудование' ? (
                <CoreIcon />
            ) : props.linkName === 'Сервис' ? (
                <ShipmentIcon />
            ) : (
                <HomeIcon />
            )}
        </div>
    );
};

export const SideNavIcon = memo(SideNavIconInner);
