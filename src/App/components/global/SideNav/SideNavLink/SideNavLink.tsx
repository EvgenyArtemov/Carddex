import React, { useEffect, SyntheticEvent, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { State } from 'App/../redux/store';
import { ArrowDrop } from 'App/../assets/images/arrowDrop';
import { SideNavIcon } from '../SideNavIcon';
import SubLink from './SubLink/Sublink';

const SideNavLinkInner = () => {
    const history = useHistory();
    const currentRoute = history.location;
    const sideNavState = useSelector((state: State) => state.sideNav, shallowEqual);

    const addShadowToActiveSubMenu = () => {
        const activePage = document.querySelector('.active-page');
        if (activePage?.classList.contains('sub-link')) {
            activePage?.parentElement?.parentElement?.classList.add('nav--active');
        }
    };

    const removeShadowFromActiveSubMenu = () => {
        const activeNav = document.querySelector('.nav--active');
        if (activeNav) {
            activeNav?.classList.remove('nav--active');
        }
    };

    const spreadSubmenuOnOpenPage = () => {
        const activeNav = document.querySelector('.nav--active');
        if (activeNav) {
            if (document.querySelector('.submenu')) {
                activeNav?.classList.add('show');
                activeNav?.querySelector('.list-name__icon')?.classList.add('turn');
            }
        }
    };

    const spreadSubmenuOnActive = (e: SyntheticEvent) => {
        const clickedMenuLinck = e.currentTarget.parentElement;
        clickedMenuLinck?.classList.toggle('show');
        clickedMenuLinck?.querySelector('.list-name__icon')?.classList.toggle('turn');
    };

    useEffect(() => {
        addShadowToActiveSubMenu();
        spreadSubmenuOnOpenPage();
    }, [currentRoute]);

    useEffect(() => {
        return () => {
            removeShadowFromActiveSubMenu();
            addShadowToActiveSubMenu();
        };
    });

    return (
        <ul className="side__top">
            {sideNavState.map((elem, id) => {
                return (
                    <div key={elem.linkName} className="nav-wrapper">
                        {elem.linkSubLink ? (
                            <div className="nav-link">
                                <button type="button" className="font" onClick={spreadSubmenuOnActive}>
                                    <SideNavIcon linkName={elem.linkName} />
                                    <div className="list-name">
                                        <div className="list-name__title">
                                            <div className="p--md--normal">{elem.linkName}</div>
                                        </div>
                                        <div className="list-name__icon">
                                            <ArrowDrop />
                                        </div>
                                    </div>
                                </button>
                                <SubLink id={id} />
                            </div>
                        ) : (
                            <NavLink
                                activeClassName="active-page"
                                to={elem.linkUrl!}
                                className="nav-link"
                                tabIndex={-1}
                            >
                                <button type="button" className="font">
                                    <SideNavIcon linkName={elem.linkName} />
                                    <div className="list-name">
                                        <div className="list-name__title">
                                            <div className="p--md--normal">{elem.linkName}</div>
                                        </div>
                                    </div>
                                </button>
                            </NavLink>
                        )}
                    </div>
                );
            })}
        </ul>
    );
};

export const SideNavLink = memo(SideNavLinkInner);
