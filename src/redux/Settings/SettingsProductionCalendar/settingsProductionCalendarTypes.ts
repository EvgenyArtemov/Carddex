export interface ProductionCalendarState {
    sidebarOpened: boolean;
}

export const PRODUCTION_CALENDAR_TOGGLE_SIDEBAR = 'PRODUCTION_CALENDAR_TOGGLE_SIDEBAR';

interface productionCalendarToggleSidebar {
    type: typeof PRODUCTION_CALENDAR_TOGGLE_SIDEBAR;
}

export type ProductionCalendarActions = productionCalendarToggleSidebar;
