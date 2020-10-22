import React, { memo } from 'react';

const EnterInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M13 16L18 12 13 8 13 11 4 11 4 13 13 13z" />
            <path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z" />
        </svg>
    );
};

export const Enter = memo(EnterInner);
