import {
    StaffEmployeesState,
    StaffEmployeesActions,
    GET_STAFF_EMPLOYEES,
    STAFF_EMPLOYEES_TOGGLE_SIDEBAR
} from './staffEmployeesTypes';

const initialState: StaffEmployeesState = {
    employeesTable: [],
    sidebarOpened: false
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
        default:
            return state;
    }
};

export default StaffEmployees;
