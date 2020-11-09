import React from 'react';
import { Logo } from '../../../../../assets/images/logo';
import './SettingsAboutProgram.scss';

const SettingsAboutProgram = () => {
    return (
        <div className="settings__about__program">
            <div className="logo">
                <Logo />
            </div>
            <span className="p--lg--thin">Версия ПО: v.1.243b</span>
            <span className="p--lg--thin">Версия Backend: v.0.3b</span>
        </div>
    );
};

export default SettingsAboutProgram;
