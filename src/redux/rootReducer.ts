import { combineReducers } from 'redux';
import AppReducer from 'redux/App/appReducer';
import SideNavReducer from 'redux/SideNav/sideNavReducer';
import SecurityPost from 'redux/SecurityPost/securityPostReducer';
import Reports from 'redux/Reports/reportsReducer';
import Staff from 'redux/Staff/staffReducer';
import Settings from 'redux/Settings/SettingsReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    sideNav: SideNavReducer,
    securityPost: SecurityPost,
    reports: Reports,
    staff: Staff,
    settings: Settings
});

export default rootReducer;
