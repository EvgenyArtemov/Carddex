export interface TimetableDay {
    day: string;
    times: string;
    dayofweek: number;
    corrected: number;
    deviation: string;
}

export interface EmployeeTimetable {
    result: number;
    uuid: string;
    plannedtime: string;
    registeredtime: string;
    timesperday: TimetableDay[] | null;
}

export interface EmployeeTimetableState {
    timetable: EmployeeTimetable | null;
}

export const GET_EMPLOYEE_TIMETABLE = 'GET_EMPLOYEE_TIMETABLE';

interface EmployeeTimetableData {
    type: typeof GET_EMPLOYEE_TIMETABLE;
    payload: EmployeeTimetable;
}

export type EmployeeTimetableActions = EmployeeTimetableData;
