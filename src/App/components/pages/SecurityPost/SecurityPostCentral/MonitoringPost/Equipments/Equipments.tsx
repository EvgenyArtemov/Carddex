import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { Equipment } from './Equipment/Equipment';
import './Equipments.scss';

const EquipmentsInner = () => {
    const { toggleBar } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    return (
        <CustomScrollbar trigger={toggleBar}>
            <div className="equipments">
                <Equipment
                    equipmentName="Турникет №1"
                    userFio="Шевцов С.Э."
                    timeData="15:35 / 09.10.2020"
                    userPosition="Программист"
                    userId="0519889656588"
                />
                <Equipment
                    equipmentName="Турникет №2"
                    userFio="Булгакова В.*."
                    timeData="17:35 / 09.10.2020"
                    userPosition="Менеджер"
                    userId="0517850656534"
                />
                <Equipment
                    equipmentName="Турникет №3"
                    userFio="Сорокина Ю.*."
                    timeData="17:12 / 09.10.2020"
                    userPosition="Программист"
                    userId="0817850396464"
                />
                <Equipment
                    equipmentName="Турникет №4"
                    userFio="Ставцева Е.*."
                    timeData="12:58 / 09.10.2020"
                    userPosition="Программист"
                    userId="0817050336264"
                />
                <Equipment
                    equipmentName="Турникет №5"
                    userFio="Сорокина К.*."
                    timeData="15:34 / 09.10.2020"
                    userPosition="Дизайнер"
                    userId="083085266464"
                />
                <Equipment
                    equipmentName="Турникет №6"
                    userFio="Луговой И.*."
                    timeData="09:05 / 09.10.2020"
                    userPosition="Программист"
                    userId="073385266564"
                />
                <Equipment
                    equipmentName="Турникет №7"
                    userFio="Потапов С.*."
                    timeData="19:01 / 09.10.2020"
                    userPosition="Программист"
                    userId="075388262564"
                />
                <Equipment
                    equipmentName="Турникет №8"
                    userFio="Смирнов П.*."
                    timeData="16:40 / 09.10.2020"
                    userPosition="Программист"
                    userId="086085266464"
                />
                {/* Empty contaiber for aligment flexbox */}
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
            </div>
        </CustomScrollbar>
    );
};

export const Equipments = memo(EquipmentsInner);
