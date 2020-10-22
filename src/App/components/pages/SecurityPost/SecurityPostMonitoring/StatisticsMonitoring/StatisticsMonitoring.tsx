import React, { memo } from 'react';
import './StatisticsMonitoring.scss';

const StatisticsMonitoringInner = () => {
    return (
        <div className="statistics-monitoring">
            <h1>Скоро тут будет</h1>
            <p>Статистика</p>
        </div>
    );
};

export const StatisticsMonitoring = memo(StatisticsMonitoringInner);
