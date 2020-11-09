export interface SettingsEquipmentState {
    sidebarOpened: boolean;
    toggleBar: boolean;
}

export const SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR = 'SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR';
export const SETTINGS_EQUIPMENT_TOGGLE_BAR = 'SETTINGS_EQUIPMENT_TOGGLE_BAR';

interface SettingsEquipmentToggleSidebar {
    type: typeof SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR;
}

interface SettingsEquipmentToggleBar {
    type: typeof SETTINGS_EQUIPMENT_TOGGLE_BAR;
}

export type SettingsEquipmentActions = SettingsEquipmentToggleSidebar | SettingsEquipmentToggleBar;
