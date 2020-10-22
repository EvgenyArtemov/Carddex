import { 
    SecurityAttendanceState,
    SecurityAttendanceActions,
    SECURITY_ATTENDANCE_TOGGLE_SIDEBAR,
    GET_SECURITY_ATTENDANCE
} from './securityAttendanceTypes';

const initialState: SecurityAttendanceState = {
    sidebarOpened: false,
    attendanceTable: []
};

const appReducer = (
    state = initialState,
    action: SecurityAttendanceActions
): SecurityAttendanceState => {
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
        default:
            return state;
    }
};

export default appReducer;
