import React from 'react';

import { createPortal } from 'react-dom';

import '../Popover.scss';

export const Portal = (props: any) => {
    return createPortal(
        <span
            style={{ top: props.top, left: props.left }}
            className="popover__message p--md--normal">{`${props.text}`}</span>,

        document.body
    );
};
