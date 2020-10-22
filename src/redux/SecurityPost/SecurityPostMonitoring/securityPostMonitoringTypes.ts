export type SecurityPostMonitoringEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface SecurityPostMonitoringState {
    events: SecurityPostMonitoringEvents;
    tableRow: TableItem | null;
    quickFilter: boolean;
    sideFilter: boolean;
}

export const GET_SECURITY_POST_MONITORING_EVENTS = 'GET_SECURITY_POST_MONITORING_EVENTS';
export const SECURITY_POST_MONITORING_TABLE_ROW = 'SECURITY_POST_MONITORING_TABLE_ROW';
export const SECURITY_POST_MONITORING_QUICK_FILTER = 'SECURITY_POST_MONITORING_QUICK_FILTER';
export const SECURITY_POST_MONITORING_SIDE_FILTER = 'SECURITY_POST_MONITORING_SIDE_FILTER';

interface SecurityPostMonitoringData {
    type: typeof GET_SECURITY_POST_MONITORING_EVENTS;
    payload: SecurityPostMonitoringEvents;
}

interface SecurityPostMonitoringSelectTableRow {
    type: typeof SECURITY_POST_MONITORING_TABLE_ROW;
    payload: TableItem;
}

interface SecurityPostMonitoringToggleQuickFilter {
    type: typeof SECURITY_POST_MONITORING_QUICK_FILTER;
}

interface SecurityPostMonitoringToggleSideFilter {
    type: typeof SECURITY_POST_MONITORING_SIDE_FILTER;
}

export type SecurityPostMonitoringActions =
    | SecurityPostMonitoringData
    | SecurityPostMonitoringSelectTableRow
    | SecurityPostMonitoringToggleQuickFilter
    | SecurityPostMonitoringToggleSideFilter;
