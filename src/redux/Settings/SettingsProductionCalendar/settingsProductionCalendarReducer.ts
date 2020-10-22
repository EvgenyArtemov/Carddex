import {
    ProductionCalendarState,
    PRODUCTION_CALENDAR_TOGGLE_SIDEBAR,
    ProductionCalendarActions
} from './settingsProductionCalendarTypes';

const initialState: ProductionCalendarState = {
    sidebarOpened: false
};

const SettingsProductionCalendarReducer = (
    state = initialState,
    action: ProductionCalendarActions
): ProductionCalendarState => {
    switch (action.type) {
        case PRODUCTION_CALENDAR_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        default:
            return state;
    }
};

export default SettingsProductionCalendarReducer;
