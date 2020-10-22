import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Tourniquet } from 'App/../assets/images/tourniquet';
import { Profile } from 'App/../assets/images/userIcon';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { TurnstileSettings } from './TurnstileSettings/TurnstileSettings';
import { Pin } from 'App/../assets/images/pin';
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
    const [order, setOrder] = useState(-1);
    const equipment = useRef<HTMLDivElement>(null);
    const equipmentSettings = useRef<HTMLDivElement>(null);
    const pin = useRef<HTMLDivElement>(null);
    const equipmentType = 'turnstile';

    const shownHideAnim = () => {
        const targetElement = equipmentSettings.current?.classList!;

        if (!targetElement.contains('hidden') && !targetElement.contains('shown')) {
            targetElement.add('shown');
        } else if (targetElement.contains('hidden')) {
            targetElement.remove('hidden');
            targetElement.add('shown');
        } else {
            targetElement.remove('shown');
            targetElement.add('hidden');
        }
    };

    const closeHandler = useCallback((e: MouseEvent) => {
        const checkingElement = Array.prototype.slice.call(equipment.current?.querySelectorAll('*'));

        if (!checkingElement.includes(e.target)) {
            shownHideAnim();
        }
    }, []);

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
    }, [equipmentToFront, closeHandler]);

    return (
        <div
            ref={equipment}
            className={`equipment ${equipmentToFront ? 'equipment--front' : ''}`}
            onAnimationStart={() => setEquipmentToFront(true)}
            onAnimationEnd={() => {
                equipmentSettings.current?.classList!.contains('hidden') && setEquipmentToFront(!equipmentToFront);
            }}
        >
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
                    <div ref={pin} className="equipment__pin-to-order" onClick={changeOrder}>
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
                            <p className="p--md--normal">{props.userPosition}</p>
                        </div>
                        <div className="body-description__employee-id">
                            <p className="p--md--normal">{props.userId}</p>
                        </div>
                        <div className="body-description__drive-equipment">
                            <Buttons name="Gear" size="m" active={equipmentToFront} onPress={shownHideAnim} />
                            <Buttons name="Layers" size="m" onPress={() => console.log('Click!')} />
                            <Buttons name="ScanFace" size="m" onPress={() => console.log('Click!')} />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={equipmentSettings} className="equipment__settings">
                {equipmentType === 'turnstile' ? <TurnstileSettings /> : null}
            </div>
        </div>
    );
};

export const Equipment = memo(EquipmentInner);
