import React, { memo } from 'react';
import './VideoMonitoring.scss';

const VideoMonitoringInner = () => {
    return (
        <div className="video-monitoring">
            <h1>Скоро тут будет</h1>
            <p>Видеонаблюдение</p>
        </div>
    );
};

export const VideoMonitoring = memo(VideoMonitoringInner);
