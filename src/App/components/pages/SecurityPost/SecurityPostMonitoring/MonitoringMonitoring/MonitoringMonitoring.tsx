import React, { memo } from 'react';
import { MonitoringTable } from './MonitoringTable/MonitoringTable';
import './MonitoringMonitoring.scss';

const MonitoringMonitoringInner = () => {
    return (
        <div className="monitoring-monitoring">
            <MonitoringTable />
        </div>
    );
};

export const MonitoringMonitoring = memo(MonitoringMonitoringInner);
