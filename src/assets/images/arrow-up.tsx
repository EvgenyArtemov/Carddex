import React, { memo } from 'react';

const ArrowUpInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z" />
        </svg>
    );
};

export const ArrowUp = memo(ArrowUpInner);
