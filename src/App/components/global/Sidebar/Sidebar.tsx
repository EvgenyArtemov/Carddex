import React, { useEffect, useRef, memo } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SidebarState } from './sidebarType';
import './Sidebar.scss';

const SidebarInner = (props: SidebarState) => {
    const sidebar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.isOpen) {
            sidebar.current?.classList.add('shown');
        } else {
            sidebar.current?.classList.add('hidden');
        }
    }, [props.isOpen]);

    const openCloseBarBehavior = () => {
        if (props.isOpen) {
            sidebar.current?.classList.remove('shown');
            sidebar.current?.classList.add('anim');
            sidebar.current?.classList.add('hidden');
        } else {
            sidebar.current?.classList.remove('hidden');
            sidebar.current?.classList.add('anim');
            sidebar.current?.classList.add('shown');
        }

        props.sidebarToggler();
    };

    const onAnimEnd = () => {
        if (sidebar.current?.classList.contains('anim')) {
            sidebar.current?.classList.remove('anim');
        }

        props.sidebarTrigger!();
    };

    return (
        <aside ref={sidebar} className="sidebar" onAnimationEnd={onAnimEnd}>
            <div className="sidebar__header">
                <div className="sidebar__header-title">
                    <Buttons
                        name={props.icon}
                        size="m"
                        onPress={openCloseBarBehavior}
                        active={props.isOpen}
                        typical={!props.isOpen}
                    />

                    <div className="sidebar__label">{props.sidebarName}</div>
                </div>

                {props.isOpen && (
                    <div className="sidebar__header-close">
                        <Buttons name="Close" typical size="m" onPress={openCloseBarBehavior} />
                    </div>
                )}
            </div>
            <div className="sidebar__body">{props.isOpen && props.children}</div>
        </aside>
    );
};

export const Sidebar = memo(SidebarInner);
