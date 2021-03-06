import React, { memo } from 'react';

const SearchUserInner = () => {
    return (
        <svg viewBox="0 0 64 64">
            <path
                data-name="layer2"
                d="M45 57a11.9 11.9 0 0 0 6.9-2.2l7.6 7.6a2 2 0 1 0 2.8-2.8L54.7 52a12 12 0 1 0-9.7 5zm0-20a8 8 0 1 1-8 8 8 8 0 0 1 8-8z"
            ></path>
            <path
                data-name="layer1"
                d="M29 45a15.9 15.9 0 0 1 2.6-8.8 5.3 5.3 0 0 1-.2-1.7V33a14.5 14.5 0 0 0 4.2-7c2.5 0 3-5.1 3-5.8s.1-3.8-2.4-3.8C41.6 3.5 27.4-3.3 16.8 4.1c-4.4 0-4.7 5.9-3.1 12.3-2.5 0-2.4 3-2.4 3.8s.6 5.8 3 5.8a14.6 14.6 0 0 0 4.2 7v1.6c0 1.6 0 4-8.1 5.6S1 49 1 49h28.5a15.9 15.9 0 0 1-.5-4z"
            ></path>
        </svg>
    );
};

export const SearchUser = memo(SearchUserInner);
