import {
    SettingsEquipmentActions,
    SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR,
    SETTINGS_EQUIPMENT_TOGGLE_BAR
} from './settingsEquipmentTypes';

export const settingsEquipmentToggleSidebar = (): SettingsEquipmentActions => ({
    type: SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR
});

export const settingsEquipmentToggleBar = (): SettingsEquipmentActions => ({
    type: SETTINGS_EQUIPMENT_TOGGLE_BAR
});
