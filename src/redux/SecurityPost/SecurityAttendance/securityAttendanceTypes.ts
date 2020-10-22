export interface SecurityAttendanceElement {
    uuid: string;
    name: string;
    occupation: null;
}

export type SecurityAttendances = Array<SecurityAttendanceElement>;

export interface SecurityAttendanceState {
    sidebarOpened: boolean;
    attendanceTable: SecurityAttendances;
}

export const SECURITY_ATTENDANCE_TOGGLE_SIDEBAR = 'SECURITY_ATTENDANCE_TOGGLE_SIDEBAR';

interface SecurityAttendanceToggleSidebar {
    type: typeof SECURITY_ATTENDANCE_TOGGLE_SIDEBAR;
}

export const GET_SECURITY_ATTENDANCE = 'GET_SECURITY_ATTENDANCE';

interface SecurityAttendanceData {
    type: typeof GET_SECURITY_ATTENDANCE;
    payload: SecurityAttendances;
}


export type SecurityAttendanceActions = SecurityAttendanceToggleSidebar | SecurityAttendanceData;
