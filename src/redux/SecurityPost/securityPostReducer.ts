import { combineReducers } from 'redux';
import SecurityAttendanceReducer from 'App/../redux/SecurityPost/SecurityAttendance/securityAttendanceReducer';
import SecurityPostCentralReducer from 'App/../redux/SecurityPost/SecurityPostCentral/securityPostCentralReducer';
import SecurityPostMonitoringReducer from 'App/../redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringReducer';

const SecurityPost = combineReducers({
    postCentral: SecurityPostCentralReducer,
    postAttendance: SecurityAttendanceReducer,
    postMonitoring: SecurityPostMonitoringReducer
});

export default SecurityPost;
