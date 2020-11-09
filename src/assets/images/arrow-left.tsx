import React, { memo } from 'react';

const ArrowLeftInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z" />
        </svg>
    );
};

export const ArrowLeft = memo(ArrowLeftInner);
