import {
    StaffEmployeesState,
    StaffEmployeesActions,
    GET_STAFF_EMPLOYEES,
    STAFF_EMPLOYEES_TOGGLE_SIDEBAR,
    STAFF_EMPLOYEES_TOGGLE_BAR,
    STAFF_EMPLOYEES_QUICK_FILTER
} from './staffEmployeesTypes';

const initialState: StaffEmployeesState = {
    employeesTable: [],
    sidebarOpened: false,
    toggleBar: false,
    quickFilter: false
};

const StaffEmployees = (state = initialState, action: StaffEmployeesActions): StaffEmployeesState => {
    switch (action.type) {
        case GET_STAFF_EMPLOYEES:
            return {
                ...state,
                employeesTable: action.payload
            };
        case STAFF_EMPLOYEES_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case STAFF_EMPLOYEES_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case STAFF_EMPLOYEES_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        default:
            return state;
    }
};

export default StaffEmployees;
