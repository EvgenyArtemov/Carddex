import React, { memo } from 'react';

const SortInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path
                d="M32 2.25714C31.7333 1.64762 31.6952 1.57143 31.4286 1H0.571429C0.304762 1.57143 0.266667 1.64762 0 2.25714L11.8095 16.2381L14.4762 31.1333L17.8667 29.0762L20.1905 16.2381L32 2.25714Z"
                fill="black"
            />
        </svg>
    );
};

export const Sort = memo(SortInner);
