import React, { useState } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { popupContentProps } from './popupTypes';
import { HeaderProfile } from './PopupElements/HeaderProfile/HeaderProfile';
import Fade from './Fade/Fade';

import './Popup.scss';

export const Popup: React.FC<popupContentProps> = ({ html, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const popupClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="popup__container">
            {html === 'HeaderProfile' ? <HeaderProfile click={popupClickHandler} isOpened={isOpen} /> : null}

            <Fade show={isOpen}>
                <div className="popup__content">
                    <div className="popup__buttons">
                        {content.map((el) => {
                            return (
                                <Buttons
                                    name={el.iconName}
                                    label={el.text}
                                    typical
                                    onPress={el.callback}
                                    key={el.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </Fade>

            {isOpen && <div className="closePopup" onClick={closePopup} />}
        </div>
    );
};
