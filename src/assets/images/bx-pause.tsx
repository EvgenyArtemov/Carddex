import React, { memo } from 'react';

const StopInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M8 7H11V17H8zM13 7H16V17H13z" />
        </svg>
    );
};

export const Stop = memo(StopInner);
