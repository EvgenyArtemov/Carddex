import React, { useEffect, useRef, memo } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { BottombarState } from './bottombarType';
import { Zones } from './Zones/Zones';
import './Bottombar.scss';

const BottombarInner = (props: BottombarState) => {
    const bottombar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.isOpen) {
            bottombar.current?.classList.add('shown');
        } else {
            bottombar.current?.classList.add('hidden');
        }
    }, [props.isOpen]);

    const openCloseBarBehavior = () => {
        if (props.isOpen) {
            bottombar.current?.classList.remove('shown');
            bottombar.current?.classList.add('anim');
            bottombar.current?.classList.add('hidden');
        } else {
            bottombar.current?.classList.remove('hidden');
            bottombar.current?.classList.add('anim');
            bottombar.current?.classList.add('shown');
        }

        props.bottombarToggler();
    };

    const onAnimEnd = () => {
        if (bottombar.current?.classList.contains('anim')) {
            bottombar.current?.classList.remove('anim');
        }

        props.bottomTrigger!();
    };

    return (
        <div ref={bottombar} className="bottombar" onAnimationEnd={onAnimEnd}>
            <div className="bottombar__header">
                <div className="bottombar__header-title">
                    <Buttons name={props.icon} size="m" typical active={props.isOpen} onPress={openCloseBarBehavior} />
                    <div className="bottombar__label">{props.bottombarName}</div>
                </div>
                {props.isOpen && (
                    <div className="bottombar__header-close">
                        <Buttons name="Close" size="m" typical onPress={openCloseBarBehavior} />
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
