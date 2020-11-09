import { combineReducers } from 'redux';
import SettingsProductionCalendarReducer from 'App/../redux/Settings/SettingsProductionCalendar/settingsProductionCalendarReducer';
import SettingsEquipmentReducer from 'App/../redux/Settings/SettingsEquipment/settingsEquipmentReducer';

const SettingsReducer = combineReducers({
    productionCalendar: SettingsProductionCalendarReducer,
    settingsEquipment: SettingsEquipmentReducer
});

export default SettingsReducer;
