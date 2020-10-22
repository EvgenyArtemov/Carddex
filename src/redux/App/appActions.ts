import { 
    AppActions,
    THEME,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR
} from './appTypes';

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
