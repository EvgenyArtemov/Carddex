import React, { memo } from 'react';

const ArrowDropInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
        </svg>
    );
};

export const ArrowDrop = memo(ArrowDropInner);
