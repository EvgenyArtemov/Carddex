import React, { memo } from 'react';

const ZoningInner = () => {
    return (
        <svg viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47 0 0 4.48 0 10C0 15.53 4.47 20 10 20C15.52 20 20 15.53 20 10C20 4.48 15.52 0 10 0ZM12.2645 12.9307L7.05519 7.75933L5.02776 14.2518C4.88607 14.6892 5.31114 15.1138 5.74908 14.9723L12.2645 12.9307ZM12.9356 12.1879L14.9716 5.761C15.1133 5.31072 14.7011 4.88618 14.2503 5.0277L7.76269 7.0526L12.9356 12.1879Z"
            />
        </svg>
    );
};

export const Zoning = memo(ZoningInner);
