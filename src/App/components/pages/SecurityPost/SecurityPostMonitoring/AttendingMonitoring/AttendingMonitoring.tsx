import React, { memo } from 'react';
import './AttendingMonitoring.scss';

const AttendingMonitoringInner = () => {
    return (
        <div className="attending-monitoring">
            <h1>Скоро тут будут</h1>
            <p>Присутствующие</p>
        </div>
    );
};

export const AttendingMonitoring = memo(AttendingMonitoringInner);
