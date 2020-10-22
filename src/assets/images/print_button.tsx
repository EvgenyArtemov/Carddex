import React, { memo } from 'react';

const PrintInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path d="M27.4286 2.28571C27.4286 1.024 26.4046 0 25.1428 0H6.85713C5.59541 0 4.57141 1.024 4.57141 2.28571V4.57143H27.4286V2.28571Z" />
            <path d="M29.7143 6.85714H2.28571C1.024 6.85714 0 7.88114 0 9.14285V22.8571C0 24.1189 1.024 25.1429 2.28571 25.1429H4.57143V29.7143C4.57143 30.976 5.59543 32 6.85714 32H25.1429C26.4046 32 27.4286 30.976 27.4286 29.7143V25.1429H29.7143C30.976 25.1429 32 24.1189 32 22.8571V9.14285C32 7.88114 30.976 6.85714 29.7143 6.85714ZM25.1429 29.7143H6.85714V18.2857H25.1429V29.7143ZM27.4286 13.7143H22.8571V11.4286H27.4286V13.7143Z" />
            <path d="M16 25.1429H9.14288V27.4286H16V25.1429Z" />
            <path d="M22.8572 20.5714H9.14288V22.8571H22.8572V20.5714Z" />
        </svg>
    );
};

export const Print = memo(PrintInner);