import React, { useState, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { securityPostCentralToggleBottombar } from '../../../../../../redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { Equipments } from './Equipments/Equipments';
import { VideoMonitoring } from './VideoMonitoring/VideoMonitoring';
import { GraphicPlan } from './GraphicPlan/GraphicPlan';
import { Bottombar } from './Bottombar/Bottombar';
import './MonitoringPost.scss';

const MonitoringPostInner = () => {
    const dispatch = useDispatch();
    const { bottombarOpened } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);
    const { toggleBar } = useSelector((state: State) => state.app, shallowEqual);
    const [tab, setTab] = useState(1);
    const [tabs] = useState([
        { index: 1, name: 'Управление' },
        { index: 2, name: 'Видеонаблюдение' },
        { index: 3, name: 'Графический план' }
    ]);

    return (
        <div className="monitoring-post">
            <TabBar tabPosition={tab} setTab={setTab} tabs={tabs} trigger={toggleBar} />

            <div className="tabbar-tabs">
                {tab === 1 && <Equipments />}
                {tab === 2 && <VideoMonitoring />}
                {tab === 3 && <GraphicPlan />}
            </div>

            <Bottombar
                icon="Pie"
                bottombarName="Зональность территории и статистика"
                isOpen={bottombarOpened}
                sidebarToggler={() => dispatch(securityPostCentralToggleBottombar())}
            />
        </div>
    );
};

export const MonitoringPost = memo(MonitoringPostInner);
