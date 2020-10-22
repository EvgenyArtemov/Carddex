import React, { memo } from 'react';

const prevBtn = () => {
    return (
        <svg viewBox="0 0 16 16">
            <path d="M10.5429 0.542969L11.9572 1.95718L6.16426 7.75008L11.9572 13.543L10.5429 14.9572L3.33583 7.75008L10.5429 0.542969Z" />
        </svg>
    );
};

export const PrevButton = memo(prevBtn);
