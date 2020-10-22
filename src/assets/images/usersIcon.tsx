import React, { memo } from 'react';

const UsersIconInner = () => {
    return (
        <svg viewBox="0 0 22 14.44">
            <path
                className="cls-1"
                d="M15,6.19a3,3,0,0,0,3-3.09,3,3,0,1,0-6,0A3,3,0,0,0,15,6.19Zm-8,0a3,3,0,0,0,3-3.09A3,3,0,0,0,7,0,3,3,0,0,0,4,3.09,3,3,0,0,0,7,6.19ZM7,8.25c-2.33,0-7,1.21-7,3.61v2.58H14V11.86C14,9.46,9.33,8.25,7,8.25Zm8,0c-.29,0-.62,0-1,.05a4.38,4.38,0,0,1,2,3.56v2.58h6V11.86C22,9.46,17.33,8.25,15,8.25Z"
            />
        </svg>
    );
};

export const UsersIcon = memo(UsersIconInner);
