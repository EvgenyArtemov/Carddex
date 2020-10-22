import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { AttendingMonitoring } from './AttendingMonitoring/AttendingMonitoring';
import { MonitoringMonitoring } from './MonitoringMonitoring/MonitoringMonitoring';
import { StatisticsMonitoring } from './StatisticsMonitoring/StatisticsMonitoring';
import { SecurityPostMonitoringFilter } from './SecurityPostMonitoringFilter/SecurityPostMonitoringFilter';
import {
    requestSecurityPostMonitoringEvents,
    toggleSecurityPostMonitoringQuickFilter,
    toggleSecurityPostMonitoringSideFilter
} from '../../../../../redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import './SecurityPostMonitoring.scss';

const SecurityPostMonitoring = () => {
    const dispatch = useDispatch();
    const pageWrapper = useRef<HTMLDivElement>(null);
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sideFilterIsOpen = useSelector((state: State) => state.securityPost.postMonitoring.sideFilter, shallowEqual);
    const [tab, setTab] = useState(1);
    const [tabs] = useState([
        { index: 1, name: 'Мониторинг' },
        { index: 2, name: 'Присутствующие' },
        { index: 3, name: 'Статистика' }
    ]);

    useEffect(() => {
        dispatch(requestSecurityPostMonitoringEvents());
    }, [dispatch]);

    return (
        <div ref={pageWrapper} className="page security-post-monitoring">
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons
                        name="Settings"
                        active={sideFilterIsOpen}
                        size="m"
                        onPress={() => dispatch(toggleSecurityPostMonitoringSideFilter())}
                    />
                    <Buttons
                        name="QuickFilter"
                        size="m"
                        onPress={() => dispatch(toggleSecurityPostMonitoringQuickFilter())}
                    />
                </section>
            </Toolbar>

            <TabBar tabPosition={tab} setTab={setTab} tabs={tabs} trigger={toggleBar} />

            <div className="tabbar-tabs">
                {tab === 1 && <MonitoringMonitoring />}
                {tab === 2 && <AttendingMonitoring />}
                {tab === 3 && <StatisticsMonitoring />}

                <SideFilter
                    onClose={() => dispatch(toggleSecurityPostMonitoringSideFilter())}
                    isOpen={sideFilterIsOpen}
                    iconName="Настройки"
                >
                    <SecurityPostMonitoringFilter />
                </SideFilter>
            </div>
        </div>
    );
};

export default SecurityPostMonitoring;
