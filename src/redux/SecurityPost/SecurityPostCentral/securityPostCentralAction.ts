import { 
    SecurityPostCentralActions,
    SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR
} from './securityPostCentralType';

export const securityPostCentralToggleSidebar = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR
});

export const securityPostCentralToggleBottombar = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR
});
