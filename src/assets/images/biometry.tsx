import React, { memo } from 'react';

const BiometryInner = () => {
    return (
        <svg viewBox="0 0 22 22">
            <path
                d="M11,2.7c1.9,0,3.8,0.7,5.3,1.9c0.3,0.2,0.6,0.3,1,0.2c0.3-0.1,0.6-0.4,0.6-0.7c0.1-0.3-0.1-0.7-0.3-0.9
		c-1.8-1.5-4.2-2.4-6.5-2.4C6.9,0.8,3.2,3.2,1.6,7C1.5,7.3,1.5,7.7,1.7,8c0.2,0.2,0.5,0.4,0.8,0.4c0,0,0.1,0,0.1,0
		c0.3,0,0.6-0.3,0.8-0.6C4.7,4.7,7.7,2.7,11,2.7z"
            />
            <path
                d="M11,3.9c-0.8,0-1.6,0.1-2.4,0.4C8.3,4.4,8.1,4.7,8,5C7.9,5.4,8.1,5.7,8.3,5.9c0.3,0.2,0.6,0.3,1,0.2
		c0.6-0.2,1.1-0.3,1.7-0.3c2.9,0,5.2,2.3,5.2,5.2v7.7c0,0.3,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1
		c0.3-0.2,0.5-0.5,0.5-0.8V11C18.1,7.1,14.9,3.9,11,3.9z"
            />
            <path
                d="M19.9,6.1c-0.2-0.3-0.5-0.5-0.9-0.5c-0.3,0-0.7,0.2-0.8,0.5c-0.2,0.3-0.2,0.7,0,1c0.7,1.2,1,2.6,1,4v5.4
		c0,0.3,0.2,0.7,0.5,0.8c0.2,0.1,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.8V11C21.2,9.3,20.8,7.6,19.9,6.1z"
            />
            <path
                d="M7,6.8C6.8,6.4,6.5,6.2,6.1,6.2h0c-0.3,0-0.5,0.2-0.7,0.4c-1,1.3-1.5,2.8-1.5,4.4v7.7c0,0.3,0.2,0.7,0.5,0.9
		c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.8V11c0-1.2,0.4-2.3,1.1-3.2C7.1,7.5,7.2,7.1,7,6.8z"
            />
            <path
                d="M11,6.9c-2.2,0-4,1.8-4,4v9.2c0,0.3,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1
		c0.3-0.2,0.5-0.5,0.5-0.8V11c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1c0,0.9,0,1.8-0.1,2.8c0,0.3,0.1,0.7,0.4,0.9
		c0.3,0.2,0.7,0.2,1,0.1c0.3-0.2,0.5-0.5,0.5-0.8c0.1-1.1,0.1-2,0.1-2.9C15,8.8,13.2,7,11,6.9z"
            />
            <path
                d="M1.7,9.4c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0,0.5,0,0.7v5.4c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1
		s0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.8V11c0-0.2,0-0.4,0-0.6c0-0.3-0.1-0.6-0.3-0.8C2.3,9.5,2,9.4,1.7,9.4z"
            />
            <path
                d="M10.5,17.1c0.2,0.1,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.8V11c0-0.3-0.1-0.5-0.3-0.7
		C11.5,10.1,11.2,10,11,10c-0.5,0-1,0.4-1,1v5.3C10,16.6,10.2,16.9,10.5,17.1z"
            />
            <path
                d="M14.1,16.4c-0.5,0-1,0.4-1,1v2.9c0,0.3,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1
		c0.3-0.2,0.5-0.5,0.5-0.8v-2.9c0-0.3-0.1-0.5-0.3-0.7C14.6,16.5,14.3,16.4,14.1,16.4z"
            />
            <path
                d="M11,18.4L11,18.4C11,18.4,11,18.4,11,18.4c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.4-0.3,0.7l0,0.9
		c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0,0,0,0c0.5,0,1-0.4,1-1l0-0.8c0-0.3-0.1-0.5-0.3-0.7
		C11.5,18.5,11.3,18.4,11,18.4z"
            />
        </svg>
    );
};

export const Biometry = memo(BiometryInner);
