import React, { memo } from 'react';

const ArrowDownInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
        </svg>
    );
};

export const ArrowDown = memo(ArrowDownInner);
