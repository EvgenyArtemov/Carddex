import React, { memo } from 'react';

const nextBtn = () => {
    return (
        <svg viewBox="0 0 16 16">
            <path d="M5.45712 15.457L4.04291 14.0428L9.8358 8.24992L4.04291 2.45703L5.45712 1.04282L12.6642 8.24992L5.45712 15.457Z" />
        </svg>
    );
};

export const NextButton = memo(nextBtn);
