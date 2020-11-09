import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import {
    securityPostCentralToggleBottombar,
    securityPostCentralToggleBar
} from 'App/../redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { Equipments } from './Equipments/Equipments';
import { VideoMonitoring } from './VideoMonitoring/VideoMonitoring';
import { GraphicPlan } from './GraphicPlan/GraphicPlan';
import { Bottombar } from './Bottombar/Bottombar';
import './MonitoringPost.scss';

const MonitoringPostInner = () => {
    const dispatch = useDispatch();
    const { bottombarOpened, toggleBar } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    return (
        <div className="monitoring-post">
            <TabBar trigger={toggleBar}>
                <Tab header="Управление" index={0}>
                    <Equipments />
                </Tab>
                <Tab header="Видеонаблюдение" index={1}>
                    <VideoMonitoring />
                </Tab>
                <Tab header="Графический план" index={2}>
                    <GraphicPlan />
                </Tab>
            </TabBar>

            <Bottombar
                icon={bottombarOpened ? 'ArrowDown' : 'ArrowUp'}
                bottombarName="Зональность территории и статистика"
                isOpen={bottombarOpened}
                bottombarToggler={() => dispatch(securityPostCentralToggleBottombar())}
                bottomTrigger={() => dispatch(securityPostCentralToggleBar())}
            />
        </div>
    );
};

export const MonitoringPost = memo(MonitoringPostInner);
