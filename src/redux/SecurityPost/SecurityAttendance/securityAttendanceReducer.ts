import {
    SecurityAttendanceState,
    SecurityAttendanceActions,
    SECURITY_ATTENDANCE_TOGGLE_SIDEBAR,
    GET_SECURITY_ATTENDANCE,
    SECURITY_ATTENDANCE_QUICK_FILTER
} from './securityAttendanceTypes';

const initialState: SecurityAttendanceState = {
    sidebarOpened: false,
    attendanceTable: [],
    quickFilter: false
};

const appReducer = (state = initialState, action: SecurityAttendanceActions): SecurityAttendanceState => {
    switch (action.type) {
        case SECURITY_ATTENDANCE_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case GET_SECURITY_ATTENDANCE:
            return {
                ...state,
                attendanceTable: action.payload
            };
        case SECURITY_ATTENDANCE_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        default:
            return state;
    }
};

export default appReducer;
