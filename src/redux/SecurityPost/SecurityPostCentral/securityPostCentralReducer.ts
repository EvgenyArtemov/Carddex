import {
    SecurityPostCentralState,
    SecurityPostCentralActions,
    SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BAR
} from './securityPostCentralType';

const initialState: SecurityPostCentralState = {
    sidebarOpened: true,
    bottombarOpened: false,
    toggleBar: false
};

const securityPostCentralReducer = (
    state = initialState,
    action: SecurityPostCentralActions
): SecurityPostCentralState => {
    switch (action.type) {
        case SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR:
            return {
                ...state,
                bottombarOpened: !state.bottombarOpened
            };
        case SECURITY_POST_CENTRAL_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default securityPostCentralReducer;
