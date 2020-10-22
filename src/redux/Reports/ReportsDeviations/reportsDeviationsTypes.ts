interface EventInfo {
    earlyLeave: true;
    earlyLeaveTime: number;
    lateEntry: boolean;
    lateEntryTime: number;
}

export type DeviationsEvents = Array<EventInfo>;

export interface ReportsDeviationsState {
    events: DeviationsEvents;
}

export const GET_REPORTS_DEVIATIONS_EVENTS = 'GET_REPORTS_DEVIATIONS_EVENTS';

interface ReportsDeviationsData {
    type: typeof GET_REPORTS_DEVIATIONS_EVENTS;
    payload: DeviationsEvents;
}

export type ReportsDeviationsActions = ReportsDeviationsData;
