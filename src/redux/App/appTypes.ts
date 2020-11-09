export interface AppState {
    sideNavMenu: SideNavMenu;
    theme: string;
    progressBarVisible: boolean;
    sidenavOpened: boolean;
    sidebarOpened: boolean;
    bottombarOpened: boolean;
    toggleBar: boolean;
    windowSize: WindowSizeObj;
}

export type SideNavMenu = Array<NavLink>;

export interface NavLink {
    linkName: string;
    linkUrl?: string;
    linkSubLink?: SubLinkArr;
}

export type SubLinkArr = Array<SubLinkObj>;

export interface SubLinkObj {
    sublinkName: string;
    sublinkUrl?: string;
    linkSubLink?: SubLinkArr;
}

export interface WindowSizeObj {
    width: number;
    height: number;
}

export const GET_SIDE_NAV_MENU = 'GET_SIDE_NAV_MENU';
export const THEME = 'THEME';
export const APP_SHOW_PROGRESS_BAR = 'APP_SHOW_PROGRESS_BAR';
export const APP_HIDE_PROGRESS_BAR = 'APP_HIDE_PROGRESS_BAR';

export const APP_TOGGLE_SIDENAV = 'APP_TOGGLE_SIDENAV';
export const APP_TOGGLE_SIDEBAR = 'APP_TOGGLE_SIDEBAR';
export const APP_TOGGLE_BOTTOMBAR = 'APP_TOGGLE_BOTTOMBAR';
export const APP_TOGGLE_BAR = 'APP_TOGGLE_BAR';
export const APP_DETERM_WINDOW_SIZE = 'APP_DETERM_WINDOW_SIZE';

interface StaffEmployeesData {
    type: typeof GET_SIDE_NAV_MENU;
    payload: SideNavMenu;
}

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

interface AppWindowSize {
    type: typeof APP_DETERM_WINDOW_SIZE;
    payload: WindowSizeObj;
}

export type AppActions =
    | StaffEmployeesData
    | AppTheme
    | AppShowProgressBar
    | AppHideProgressBar
    | AppToggleSidenav
    | AppToggleSidebar
    | AppToggleBottombar
    | AppToggleBar
    | AppWindowSize;
