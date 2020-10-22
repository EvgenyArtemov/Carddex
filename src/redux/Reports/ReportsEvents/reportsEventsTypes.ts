export type ReportsEvents = Array<EventInfo>;

export interface EventInfo {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface ReportsEventsState {
    events: ReportsEvents;
}

export const GET_REPORTS_EVENTS = 'GET_REPORTS_EVENTS';

interface ReportsEventsData {
    type: typeof GET_REPORTS_EVENTS;
    payload: ReportsEvents;
}

export type ReportsEventsActions = ReportsEventsData;
