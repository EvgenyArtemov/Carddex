export interface StaffEmployee {
    uuid: string;
    name: string;
    occupation: null;
}

export type StaffEmployees = Array<StaffEmployee>;

export interface StaffEmployeesState {
    employeesTable: StaffEmployees;
    sidebarOpened: boolean;
}

export const GET_STAFF_EMPLOYEES = 'GET_STAFF_EMPLOYEES';
export const STAFF_EMPLOYEES_TOGGLE_SIDEBAR = 'STAFF_EMPLOYEES_TOGGLE_SIDEBAR';

interface StaffEmployeesData {
    type: typeof GET_STAFF_EMPLOYEES;
    payload: StaffEmployees;
}

interface StaffOrganizationsToggleSidebar {
    type: typeof STAFF_EMPLOYEES_TOGGLE_SIDEBAR;
}

export type StaffEmployeesActions = StaffEmployeesData | StaffOrganizationsToggleSidebar;
