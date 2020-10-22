import React, { useRef, useEffect, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { Button } from 'primereact/button';
import { SideNavIcon } from '../SideNav/SideNavIcon';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import Fade from './Fade/Fade';
import './SideFilter.scss';

const SideFilterInner = (props: any) => {
    // Open & Close Logic >>
    const parent = useRef<HTMLDivElement>(null);
    const closeHandler = (ev: any) => {
        if (!parent.current?.contains(ev.target) && props.isOpen) {
            props.onClose();
        }
    };
    const { toggleBar } = useSelector((state: State) => state.app, shallowEqual);

    useEffect(() => {
        document.addEventListener('click', closeHandler);
        return () => document.removeEventListener('click', closeHandler);
    });

    // Accordeon logic >>

    return (
        <Fade show={props.isOpen}>
            <div ref={parent} className="sidefilter__wrapper">
                <div className="sidefilter__header">
                    <SideNavIcon linkName={props.iconName} style={{ width: '15px', height: '15px' }} />
                    <span className="header__title">Настройки фильтра</span>
                    <i className="pi pi-times header__close" onClick={props.onClose} />
                </div>
                <div className="sidefilter__content">
                    <div className="content__items">
                        <CustomScrollbar trigger={toggleBar}>{props.children}</CustomScrollbar>
                    </div>
                    <div className="content__items-buttons">
                        <Button label="Сбросить" onClick={props.onClose} />
                        <Button className="save__btn" label="Применить" onClick={() => console.log('send request')} />
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export const SideFilter = memo(SideFilterInner);
