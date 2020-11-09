import React, { memo } from 'react';

const ModalInfoInner = () => {
    return (
        <svg viewBox="0 0 30 30">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27ZM15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM17 7V10H13V7H17ZM17 22V12H13V22H17Z"
            />
        </svg>
    );
};

export const ModalInfo = memo(ModalInfoInner);
