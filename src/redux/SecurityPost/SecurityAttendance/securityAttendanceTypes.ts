export interface SecurityAttendanceElement {
    uuid: string;
    name: string;
    occupation: null;
}

export type SecurityAttendances = Array<SecurityAttendanceElement>;

export interface SecurityAttendanceState {
    sidebarOpened: boolean;
    attendanceTable: SecurityAttendances;
    quickFilter: boolean;
}

export const SECURITY_ATTENDANCE_TOGGLE_SIDEBAR = 'SECURITY_ATTENDANCE_TOGGLE_SIDEBAR';
export const GET_SECURITY_ATTENDANCE = 'GET_SECURITY_ATTENDANCE';
export const SECURITY_ATTENDANCE_QUICK_FILTER = 'SECURITY_ATTENDANCE_QUICK_FILTER';

interface SecurityAttendanceToggleSidebar {
    type: typeof SECURITY_ATTENDANCE_TOGGLE_SIDEBAR;
}

interface SecurityAttendanceData {
    type: typeof GET_SECURITY_ATTENDANCE;
    payload: SecurityAttendances;
}

interface SecurityAttendanceToggleQuickFilter {
    type: typeof SECURITY_ATTENDANCE_QUICK_FILTER;
}

export type SecurityAttendanceActions =
    | SecurityAttendanceToggleSidebar
    | SecurityAttendanceData
    | SecurityAttendanceToggleQuickFilter;
