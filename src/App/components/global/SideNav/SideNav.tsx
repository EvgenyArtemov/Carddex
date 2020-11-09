import React, { useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { appToggleBar } from 'redux/App/appActions';
import { SideNavLink } from './SideNavLink/SideNavLink';
import { Copyright } from './Copyright/Copyright';
import './SideNav.scss';

const SideNavInner = () => {
    const dispatch = useDispatch();
    const { sidenavOpened } = useSelector((state: State) => state.app, shallowEqual);
    const side = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sidenavOpened) {
            side.current?.classList.add('shown');
        } else {
            side.current?.classList.add('hidden');
        }
    }, [sidenavOpened]);

    const onAnimEnd = () => {
        if (side.current?.classList.contains('anim')) {
            side.current?.classList.remove('anim');
        }

        dispatch(appToggleBar());
    };

    return (
        <nav ref={side} className="side" onAnimationEnd={onAnimEnd}>
            <SideNavLink />
            <Copyright />
        </nav>
    );
};

export const SideNav = memo(SideNavInner);
