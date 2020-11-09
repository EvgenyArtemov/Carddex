export interface StaffEmployee {
    uuid: string;
    name: string;
    occupation: null;
}

export type StaffEmployees = Array<StaffEmployee>;

export interface StaffEmployeesState {
    employeesTable: StaffEmployees;
    sidebarOpened: boolean;
    toggleBar: boolean;
    quickFilter: boolean;
}

export const GET_STAFF_EMPLOYEES = 'GET_STAFF_EMPLOYEES';
export const STAFF_EMPLOYEES_TOGGLE_SIDEBAR = 'STAFF_EMPLOYEES_TOGGLE_SIDEBAR';
export const STAFF_EMPLOYEES_TOGGLE_BAR = 'STAFF_EMPLOYEES_TOGGLE_BAR';
export const STAFF_EMPLOYEES_QUICK_FILTER = 'STAFF_EMPLOYEES_QUICK_FILTER';

interface StaffEmployeesData {
    type: typeof GET_STAFF_EMPLOYEES;
    payload: StaffEmployees;
}

interface StaffEmployeesToggleSidebar {
    type: typeof STAFF_EMPLOYEES_TOGGLE_SIDEBAR;
}

interface StaffEmployeesToggleBar {
    type: typeof STAFF_EMPLOYEES_TOGGLE_BAR;
}

interface StaffEmployeesToggleQuickFilter {
    type: typeof STAFF_EMPLOYEES_QUICK_FILTER;
}

export type StaffEmployeesActions =
    | StaffEmployeesData
    | StaffEmployeesToggleSidebar
    | StaffEmployeesToggleBar
    | StaffEmployeesToggleQuickFilter;
