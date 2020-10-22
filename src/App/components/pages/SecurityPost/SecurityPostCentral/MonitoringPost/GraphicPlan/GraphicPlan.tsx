import React, { memo } from 'react';
import './GraphicPlan.scss';

const GraphicPlanInner = () => {
    return (
        <div className="graphic-plan">
            <h1>Скоро тут будет</h1>
            <p>Графический план</p>
        </div>
    );
};

export const GraphicPlan = memo(GraphicPlanInner);
