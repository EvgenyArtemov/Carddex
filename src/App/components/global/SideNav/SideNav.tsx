import React from 'react';
import { useDispatch } from 'react-redux';
import { appToggleBar } from 'redux/App/appActions';
import { SideNavLink } from './SideNavLink/SideNavLink';
import { Copyright } from './Copyright/Copyright';
import './SideNav.scss';

const SideNav = () => {
    const dispatch = useDispatch();

    return (
        <nav className="side" onAnimationEnd={() => dispatch(appToggleBar())}>
            <SideNavLink />
            <Copyright />
        </nav>
    );
};

export default SideNav;
