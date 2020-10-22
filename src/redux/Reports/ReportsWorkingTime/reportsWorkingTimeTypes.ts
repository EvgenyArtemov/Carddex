export type ReportsWorkingTimeEvents = Array<EventInfo>;

export interface EventInfo {
    physpersonName: string;
    physpersonIsDeleted: boolean;
    employeeIsDeleted: boolean;
    employeeIsFired: boolean;
    totalHours: number;
    totalDays: number;
    date?: number;
}

export interface ReportsWorkingTimeState {
    events: ReportsWorkingTimeEvents;
}

export const GET_REPORTS_WORKING_TIME_EVENTS = 'GET_REPORTS_WORKING_TIME_EVENTS';

interface ReportsWorkingTimeData {
    type: typeof GET_REPORTS_WORKING_TIME_EVENTS;
    payload: ReportsWorkingTimeEvents;
}

export type ReportsWorkingTimeActions = ReportsWorkingTimeData;
