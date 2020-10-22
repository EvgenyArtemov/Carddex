import React, { memo } from 'react';

const ViewVerticalInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path d="M0,30c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2V30z" />
            <path d="M11.5,30c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2V30z" />
            <path d="M23,30c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2V30z" />
        </svg>
    );
};

export const ViewVertical = memo(ViewVerticalInner);
