import React, { memo } from 'react';

const ArrowTickInner = () => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.4866 7L6 2.77995L10.5134 7L12 5.61003L6 -5.24537e-07L-8.32159e-07 5.61003L1.4866 7Z"
                fill="#293440"
            />
        </svg>
    );
};

export const ArrowTick = memo(ArrowTickInner);
