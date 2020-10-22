import { EmployeeTimetableState, GET_EMPLOYEE_TIMETABLE, EmployeeTimetableActions } from './employeeTimetableTypes';

const initialState = {
    timetable: null
};

const StaffEmployeeTimetableReducer = (
    state = initialState,
    action: EmployeeTimetableActions
): EmployeeTimetableState => {
    switch (action.type) {
        case GET_EMPLOYEE_TIMETABLE:
            return {
                ...state,
                timetable: action.payload
            };
        default:
            return state;
    }
};

export default StaffEmployeeTimetableReducer;
