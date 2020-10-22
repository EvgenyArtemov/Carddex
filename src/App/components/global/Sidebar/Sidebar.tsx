import React, { useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { appToggleBar } from 'redux/App/appActions';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SidebarState } from './sidebarType';
import './Sidebar.scss';

const SidebarInner = (props: SidebarState) => {
    const dispatch = useDispatch();
    const sidebar = useRef<HTMLDivElement>(null);

    return (
        <aside
            ref={sidebar}
            className={`sidebar${props.isOpen ? ' shown' : ' hidden'}`}
            onAnimationEnd={() => dispatch(appToggleBar())}
        >
            <div className="sidebar__header">
                <div className="sidebar__header-title">
                    <Buttons name={props.icon} size="m" onPress={props.sidebarToggler} active={props.isOpen} />

                    <div className="sidebar__label">{props.sidebarName}</div>
                </div>

                {props.isOpen && (
                    <div className="sidebar__header-close">
                        <Buttons name="Close" size="m" onPress={props.sidebarToggler} />
                    </div>
                )}
            </div>
            <div className="sidebar__body">{props.isOpen && props.children}</div>
        </aside>
    );
};

export const Sidebar = memo(SidebarInner);
