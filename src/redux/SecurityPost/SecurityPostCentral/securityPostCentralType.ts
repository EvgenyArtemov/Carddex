export interface SecurityPostCentralState {
    sidebarOpened: boolean;
    bottombarOpened: boolean;
}

export const SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR = 'SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR';
export const SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR = 'SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR';

interface SecurityPostCentralToggleSidebar {
    type: typeof SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR;
}

interface SecurityPostCentralToggleBottombar {
    type: typeof SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR;
}

export type SecurityPostCentralActions = SecurityPostCentralToggleSidebar | SecurityPostCentralToggleBottombar;
