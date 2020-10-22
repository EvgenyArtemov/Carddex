import React, { memo } from 'react';

const LoaderInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1s"
                    from="0 12 12"
                    to="360 12 12"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    );
};

export const Loader = memo(LoaderInner);
