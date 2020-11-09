import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import _ from 'lodash';
import { Tourniquet } from 'App/../assets/images/tourniquet';
import { Profile } from 'App/../assets/images/userIcon';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Pin } from 'App/../assets/images/pin';
import { TurnstileSettings } from './TurnstileSettings/TurnstileSettings';
import './Equipment.scss';

interface EquipmentState {
    equipmentName: string;
    userFio: string;
    timeData: string;
    userPosition: string;
    userId: string;
}

export const EquipmentInner = (props: EquipmentState) => {
    const [equipmentToFront, setEquipmentToFront] = useState(false);
    const [isOnTheWindow, setIsOnTheWindow] = useState(false);
    const [order, setOrder] = useState(-1);
    const equipment = useRef<HTMLDivElement>(null);
    const equipmentSettings = useRef<HTMLDivElement>(null);
    const pin = useRef<HTMLDivElement>(null);
    const equipmentType = 'turnstile';

    const shownHideAnim = () => {
        const targetElement = equipmentSettings.current?.classList!;

        if (
            !targetElement.contains('hidden') &&
            !targetElement.contains('shown')
        ) {
            targetElement.add('shown');
        } else if (targetElement.contains('hidden')) {
            targetElement.remove('hidden');
            targetElement.add('shown');
        } else {
            targetElement.remove('shown');
            targetElement.add('hidden');
        }
    };

    const triggerFilterDebounce = _.debounce(shownHideAnim, 250);

    const onAnimEnd = () => {
        if (equipmentSettings.current?.classList!.contains('hidden')) {
            setEquipmentToFront(!equipmentToFront);
        }
    };

    const closeHandler = useCallback(() => {
        if (!isOnTheWindow) {
            triggerFilterDebounce();
        }
    }, [isOnTheWindow, triggerFilterDebounce]);

    const changeOrder = () => {
        if (!pin.current?.classList!.contains('pin')) {
            pin.current?.classList.add('pin');
            equipment.current?.setAttribute('style', `order:${order};`);

            setOrder(order - 1);
        } else {
            pin.current?.classList.remove('pin');
            equipment.current?.removeAttribute('style');
        }
    };

    useEffect(() => {
        if (equipmentToFront) {
            document.addEventListener('click', closeHandler);

            return () => document.removeEventListener('click', closeHandler);
        }

        return undefined;
    }, [equipmentToFront, closeHandler]);

    return (
        <div
            ref={equipment}
            className={`equipment ${
                equipmentToFront ? 'equipment--front' : ''
            }`}
            onAnimationStart={() => setEquipmentToFront(true)}
            onAnimationEnd={onAnimEnd}>
            <div className="equipment__wrapper">
                <div className="equipment__header">
                    <div className="equipment__header-icon">
                        <Tourniquet />
                    </div>

                    <div className="equipment__header-description header-description">
                        <div className="header-description__name">
                            <p className="p--md--bold">{props.equipmentName}</p>
                        </div>

                        <div className="header-description__time">
                            <p className="p--sm--thin">{props.timeData}</p>
                        </div>
                    </div>

                    <div
                        ref={pin}
                        className="equipment__pin-to-order"
                        onClick={changeOrder}>
                        <Pin />
                    </div>
                </div>

                <div className="equipment__body">
                    <div className="equipment__body-photo">
                        <Profile />
                    </div>

                    <div className="equipment__body-description body-description">
                        <div className="body-description__employee-name">
                            <p className="p--md--bold">{props.userFio}</p>
                        </div>

                        <div className="body-description__employee-position">
                            <p className="p--md--normal">
                                {props.userPosition}
                            </p>
                        </div>

                        <div className="body-description__employee-id">
                            <p className="p--md--normal">{props.userId}</p>
                        </div>

                        <div className="body-description__drive-equipment">
                            <Buttons
                                name="Gear"
                                size="m"
                                typical
                                active={equipmentToFront}
                                onPress={triggerFilterDebounce}
                            />

                            <Buttons
                                name="Layers"
                                size="m"
                                typical
                                onPress={() => console.log('Click!')}
                            />

                            <Buttons
                                name="ScanFace"
                                size="m"
                                typical
                                onPress={() => console.log('Click!')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={equipmentSettings}
                className="equipment__settings"
                onMouseOver={() => setIsOnTheWindow(true)}
                onFocus={() => console.log('Focus')}
                onMouseLeave={() => setIsOnTheWindow(false)}>
                {equipmentType === 'turnstile' ? <TurnstileSettings /> : null}
            </div>
        </div>
    );
};

export const Equipment = memo(EquipmentInner);
