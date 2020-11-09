import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import _ from 'lodash';
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
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sideFilterIsOpen = useSelector((state: State) => state.securityPost.postMonitoring.sideFilter, shallowEqual);

    useEffect(() => {
        dispatch(requestSecurityPostMonitoringEvents());
    }, [dispatch]);

    const triggerFilter = () => {
        dispatch(toggleSecurityPostMonitoringSideFilter());
    };

    const triggerFilterDebounce = _.debounce(triggerFilter, 250);

    return (
        <div className="page security-post-monitoring" aria-label="page content">
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons name="Filter" typical active={sideFilterIsOpen} size="m" onPress={triggerFilterDebounce} />

                    <Buttons
                        name="QuickFilter"
                        size="m"
                        typical
                        onPress={() => dispatch(toggleSecurityPostMonitoringQuickFilter())}
                    />
                </section>
            </Toolbar>

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <TabBar trigger={toggleBar}>
                        <Tab header="События" index={0}>
                            <MonitoringMonitoring />
                        </Tab>

                        <Tab header="Присутствующие" index={1}>
                            <AttendingMonitoring />
                        </Tab>

                        <Tab header="Статистика" index={2}>
                            <StatisticsMonitoring />
                        </Tab>
                    </TabBar>

                    <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilterIsOpen} iconName="Настройки">
                        <SecurityPostMonitoringFilter />
                    </SideFilter>
                </div>
            </section>
        </div>
    );
};

export default SecurityPostMonitoring;
