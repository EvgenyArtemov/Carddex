import React, { memo } from 'react';

const QuickFilterInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path
                d="M21,3H5C4.4,3,4,3.4,4,4v2.6c0,0.5,0.2,1,0.6,1.4l1.3,1.3H2v2h5.9l2,2H5v2h5v2H8v2h2V21c0,0.3,0.2,0.7,0.5,0.9
	C10.6,22,10.8,22,11,22c0.2,0,0.3,0,0.4-0.1l4-2c0.3-0.2,0.6-0.5,0.6-0.9v-5.6L21.4,8C21.8,7.6,22,7.1,22,6.6V4C22,3.4,21.6,3,21,3z
	 M14.3,12.3C14.1,12.5,14,12.7,14,13v5.4l-2,1V13c0-0.3-0.1-0.5-0.3-0.7L6,6.6V5h14l0,1.6L14.3,12.3z"
            />
        </svg>
    );
};

export const QuickFilter = memo(QuickFilterInner);