export interface AppState {
    theme: string;
    progressBarVisible: boolean;
    sidenavOpened: boolean;
    sidebarOpened: boolean;
    bottombarOpened: boolean;
    toggleBar: boolean;
}

export const THEME = 'THEME';
export const APP_SHOW_PROGRESS_BAR = 'APP_SHOW_PROGRESS_BAR';
export const APP_HIDE_PROGRESS_BAR = 'APP_HIDE_PROGRESS_BAR';

export const APP_TOGGLE_SIDENAV = 'APP_TOGGLE_SIDENAV';
export const APP_TOGGLE_SIDEBAR = 'APP_TOGGLE_SIDEBAR';
export const APP_TOGGLE_BOTTOMBAR = 'APP_TOGGLE_BOTTOMBAR';
export const APP_TOGGLE_BAR = 'APP_TOGGLE_BAR';

interface AppTheme {
    type: typeof THEME;
    payload: string;
}

interface AppShowProgressBar {
    type: typeof APP_SHOW_PROGRESS_BAR;
}

interface AppHideProgressBar {
    type: typeof APP_HIDE_PROGRESS_BAR;
}

interface AppToggleSidenav {
    type: typeof APP_TOGGLE_SIDENAV;
}

interface AppToggleSidebar {
    type: typeof APP_TOGGLE_SIDEBAR;
}

interface AppToggleBottombar {
    type: typeof APP_TOGGLE_BOTTOMBAR;
}

interface AppToggleBar {
    type: typeof APP_TOGGLE_BAR;
}

export type AppActions = 
    AppTheme | 
    AppShowProgressBar | 
    AppHideProgressBar | 
    AppToggleSidenav | 
    AppToggleSidebar | 
    AppToggleBottombar | 
    AppToggleBar;
