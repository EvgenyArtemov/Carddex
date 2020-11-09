import React, { memo } from 'react';

const ModalErrorInner = () => {
    return (
        <svg viewBox="0 0 30 30">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM22 19.76L19.76 22L15 17.24L10.24 22L8 19.76L12.76 15L8.00001 10.24L10.24 8L15 12.76L19.76 8L22 10.24L17.24 15L22 19.76Z"
            />
        </svg>
    );
};

export const ModalError = memo(ModalErrorInner);
