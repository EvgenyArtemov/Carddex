import React, { memo } from 'react';

const CompanyIconInner = () => {
    return (
        <svg viewBox="0 0 22 22">
            <rect className="cls-1" x="12.39" y="6.74" width="9.61" height="1.34" />
            <polygon
                className="cls-1"
                points="12.39 21.89 15.45 21.89 15.45 15.05 19.03 15.05 19.03 21.89 22 21.89 22 9.41 12.39 9.41 12.39 21.89"
            />
            <path
                className="cls-1"
                d="M0,21.91H11V0H0ZM6.85,2.53H9.61V5.35H6.85Zm0,5.5H9.61v2.82H6.85Zm0,5.52H9.61v2.82H6.84Zm-5.45-11H4.16V5.35H1.39Zm0,5.5H4.16v2.82H1.39Zm0,5.52H4.16v2.82H1.39Z"
            />
        </svg>
    );
};

export const CompanyIcon = memo(CompanyIconInner);
