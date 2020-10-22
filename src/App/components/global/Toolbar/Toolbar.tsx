import React, { memo } from 'react';
import { ToolbarProps } from './toolbarTypes';
import './Toolbar.scss';

const ToolbarInner = (props: ToolbarProps) => {
    return (
        <section className="toolbar" style={props.toolbarStyles}>
            <div className="toolbar__content" style={props.toolbarContentStyles}>
                {props.children}
            </div>
        </section>
    );
};

export const Toolbar = memo(ToolbarInner);
