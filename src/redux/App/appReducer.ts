import {
    AppState,
    AppActions,
    THEME,
    GET_SIDE_NAV_MENU,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR,
    APP_DETERM_WINDOW_SIZE
} from './appTypes';

const initialState: AppState = {
    sideNavMenu: [],
    theme: 'light',
    progressBarVisible: false,
    sidenavOpened: true,
    sidebarOpened: false,
    bottombarOpened: false,
    toggleBar: false,
    windowSize: {
        width: 0,
        height: 0
    }
};

const appReducer = (state = initialState, action: AppActions): AppState => {
    switch (action.type) {
        case GET_SIDE_NAV_MENU:
            return {
                ...state,
                sideNavMenu: action.payload
            };
        case THEME:
            return {
                ...state,
                theme: action.payload
            };
        case APP_HIDE_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: false
            };
        case APP_SHOW_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: true
            };
        case APP_TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavOpened: !state.sidenavOpened
            };
        case APP_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case APP_TOGGLE_BOTTOMBAR:
            return {
                ...state,
                bottombarOpened: !state.bottombarOpened
            };
        case APP_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case APP_DETERM_WINDOW_SIZE:
            return {
                ...state,
                windowSize: action.payload
            };
        default:
            return state;
    }
};

export default appReducer;
