import { 
    AppState,
    AppActions,
    THEME,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR
} from './appTypes';

const initialState: AppState = {
    theme: 'light',
    progressBarVisible: false,
    sidenavOpened: true,
    sidebarOpened: false,
    bottombarOpened: false,
    toggleBar: false
};

const appReducer = (state = initialState, action: AppActions): AppState => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export default appReducer;
