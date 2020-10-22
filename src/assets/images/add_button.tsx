import React, { memo } from 'react';

const AddInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.44 18.56L29.44 13.44L18.56 13.44V2.56H13.44V13.44L2.56 13.44L2.56 18.56L13.44 18.56V29.44H18.56V18.56L29.44 18.56Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.44 18.56L29.44 13.44L18.56 13.44V2.56H13.44V13.44L2.56 13.44L2.56 18.56L13.44 18.56V29.44H18.56V18.56L29.44 18.56Z"
            />
        </svg>
    );
};

export const Add = memo(AddInner);
