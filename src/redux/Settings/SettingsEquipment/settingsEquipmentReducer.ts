import {
    SettingsEquipmentState,
    SettingsEquipmentActions,
    SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR,
    SETTINGS_EQUIPMENT_TOGGLE_BAR
} from './settingsEquipmentTypes';

const initialState: SettingsEquipmentState = {
    sidebarOpened: false,
    toggleBar: false
};

const SettingsEquipment = (state = initialState, action: SettingsEquipmentActions): SettingsEquipmentState => {
    switch (action.type) {
        case SETTINGS_EQUIPMENT_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SETTINGS_EQUIPMENT_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default SettingsEquipment;
