import { combineReducers } from 'redux';
import SettingsProductionCalendarReducer from 'App/../redux/Settings/SettingsProductionCalendar/settingsProductionCalendarReducer';

const SettingsReducer = combineReducers({
    productionCalendar: SettingsProductionCalendarReducer
});

export default SettingsReducer;
