import { Dispatch } from 'react';
import {
    AppActions,
    SideNavMenu,
    WindowSizeObj,
    GET_SIDE_NAV_MENU,
    THEME,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR,
    APP_DETERM_WINDOW_SIZE
} from './appTypes';
import menuData from './sideNavMenu.json';
// import universityData from './menuUniversity.json';

export const getSideNavMenu = (sideNavMenu: SideNavMenu): AppActions => ({
    type: GET_SIDE_NAV_MENU,
    payload: sideNavMenu
});

export const requestSideNavMenu = () => (dispatch: Dispatch<AppActions>) => {
    const menu = JSON.parse(JSON.stringify(menuData));

    dispatch(getSideNavMenu(menu));
};

export const appTheme = (payload: string): AppActions => ({
    type: THEME,
    payload
});

export const appShowProgressBar = (): AppActions => ({
    type: APP_SHOW_PROGRESS_BAR
});

export const appHideProgressBar = (): AppActions => ({
    type: APP_HIDE_PROGRESS_BAR
});

export const appToggleSidenav = (): AppActions => ({
    type: APP_TOGGLE_SIDENAV
});

export const appToggleSidebar = (): AppActions => ({
    type: APP_TOGGLE_SIDEBAR
});

export const appToggleBottombar = (): AppActions => ({
    type: APP_TOGGLE_BOTTOMBAR
});

export const appToggleBar = (): AppActions => ({
    type: APP_TOGGLE_BAR
});

export const appWindowSize = (payload: WindowSizeObj): AppActions => ({
    type: APP_DETERM_WINDOW_SIZE,
    payload
});
