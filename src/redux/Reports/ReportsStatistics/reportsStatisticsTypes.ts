export type ReportsStatisticsEvents = Array<EventsInfo>;

export interface EventsInfo {
    field1: string;
    field2: string;
    field3: string;
    field4: number;
}

export interface ReportsStatisticsState {
    events: ReportsStatisticsEvents;
}

export const GET_REPORTS_STATISTICS_EVENTS = 'GET_REPORTS_STATISTICS_EVENTS';

interface ReportsStatisticsData {
    type: typeof GET_REPORTS_STATISTICS_EVENTS;
    payload: ReportsStatisticsEvents;
}

export type ReportsStatisticsActions = ReportsStatisticsData;
