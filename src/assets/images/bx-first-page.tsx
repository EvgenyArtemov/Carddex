import React, { memo } from 'react';

const LetInOneInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M16.293 17.707L17.707 16.293 13.414 12 17.707 7.707 16.293 6.293 10.586 12zM7 6H9V18H7z" />
        </svg>
    );
};

export const LetInOne = memo(LetInOneInner);
