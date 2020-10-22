import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';
import { State } from 'App/../redux/store';
import { appToggleSidenav, appTheme } from 'redux/App/appActions';
import { Logo } from 'App/../assets/images/logo';
import { Popup } from '../Popup/Popup';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { sidenavOpened, theme } = useSelector((state: State) => state.app, shallowEqual);

    const shownHideAnim = () => {
        const targetElement = document.querySelector('.side')?.classList!;

        if (!targetElement.contains('hidden') && !targetElement.contains('shown')) {
            targetElement.add('hidden');
        } else if (targetElement.contains('hidden')) {
            targetElement.remove('hidden');
            targetElement.add('shown');
        } else {
            targetElement.remove('shown');
            targetElement.add('hidden');
        }
    };

    const unAuth = () => {
        history.push('/login');
    };

    const profile = () => {
        history.push('/settings-profile');
    };

    const parameters = () => {
        history.push('/settings-parameters');
    };

    const themeColor = () => {
        if (theme === 'dark') {
            dispatch(appTheme('light'));
        } else if (theme === 'light') {
            dispatch(appTheme('dark'));
        }
    };

    const menu = [
        { iconName: theme === 'dark' ? 'Moon' : theme === 'light' ? 'Sun' : '', text: 'Тема', callback: themeColor },
        { iconName: 'Profile', text: 'Профиль', callback: profile },
        { iconName: 'Parameters', text: 'Параметры', callback: parameters },
        { iconName: 'Exit', text: 'Выход', callback: unAuth }
    ];

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__content__hamburger">
                    <button
                        className={classNames('header__content__toggler', {
                            header__content__toggler__opened: sidenavOpened
                        })}
                        onClick={() => {
                            shownHideAnim();
                            dispatch(appToggleSidenav());
                        }}
                        role="navigation"
                    >
                        <span />
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                <div className="header__content__logo">
                    <Logo />
                </div>

                <div className="header__content__user">
                    <Popup someAdditionalLogic="someComponent" content={menu} html="HeaderProfile" />
                </div>
            </div>
        </header>
    );
};

export default Header;
