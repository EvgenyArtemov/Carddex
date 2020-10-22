import {
    SecurityPostCentralState,
    SecurityPostCentralActions,
    SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR
} from './securityPostCentralType';

const initialState: SecurityPostCentralState = {
    sidebarOpened: false,
    bottombarOpened: false
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
        default:
            return state;
    }
};

export default securityPostCentralReducer;
