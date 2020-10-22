import React, { useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { BottombarState } from './bottombarType';
import { appToggleBar } from 'redux/App/appActions';
import { Zones } from './Zones/Zones';
import './Bottombar.scss';

const BottombarInner = (props: BottombarState) => {
    const dispatch = useDispatch();
    const bottombar = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={bottombar}
            className={`bottombar${props.isOpen ? ' shown' : ' hidden'}`}
            onAnimationEnd={() => dispatch(appToggleBar())}
        >
            <div className="bottombar__header">
                <div className="bottombar__header-title">
                    <Buttons name={props.icon} size="m" active={props.isOpen} onPress={props.sidebarToggler} />
                    <div className="bottombar__label">{props.bottombarName}</div>
                </div>
                {props.isOpen && (
                    <div className="bottombar__header-close">
                        <Buttons name="Close" size="m" onPress={props.sidebarToggler} />
                    </div>
                )}
            </div>
            <div className="bottombar__body">
                <Zones />
            </div>
        </div>
    );
};

export const Bottombar = memo(BottombarInner);
