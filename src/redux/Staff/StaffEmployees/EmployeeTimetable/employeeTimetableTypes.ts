interface TimetableDay {
    day: string;
    times: string;
    dayofweek: number;
    corrected: number;
    deviation: string;
}

export type TimetableDays = Array<TimetableDay>;

interface EmployeeTimetable {
    result: number;
    uuid: string;
    plannedtime: string;
    registeredtime: string;
    timesperday: TimetableDays;
}

export type EmployeeTimetables = EmployeeTimetable;

export interface EmployeeTimetableState {
    timetable: EmployeeTimetables | null;
}

export const GET_EMPLOYEE_TIMETABLE = 'GET_EMPLOYEE_TIMETABLE';

interface EmployeeTimetableData {
    type: typeof GET_EMPLOYEE_TIMETABLE;
    payload: EmployeeTimetables;
}

export type EmployeeTimetableActions = EmployeeTimetableData;
