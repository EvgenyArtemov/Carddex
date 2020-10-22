import React, { memo } from 'react';

const ViewHorizontalInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path d="M0 7C0 8.10457 0.895431 9 2 9H30C31.1046 9 32 8.10457 32 7V2C32 0.89543 31.1046 0 30 0H2C0.895431 0 0 0.895431 0 2V7Z" />
            <path d="M0 18.5C0 19.6046 0.895431 20.5 2 20.5H30C31.1046 20.5 32 19.6046 32 18.5V13.5C32 12.3954 31.1046 11.5 30 11.5H2C0.895431 11.5 0 12.3954 0 13.5V18.5Z" />
            <path d="M0 30C0 31.1046 0.895431 32 2 32H30C31.1046 32 32 31.1046 32 30V25C32 23.8954 31.1046 23 30 23H2C0.895431 23 0 23.8954 0 25V30Z" />
        </svg>
    );
};

export const ViewHorizontal = memo(ViewHorizontalInner);
