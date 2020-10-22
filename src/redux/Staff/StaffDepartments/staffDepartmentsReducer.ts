import { StaffDepartmentsState, StaffDepartmentsActions, GET_STAFF_DEPARTMENTS } from './staffDepartmentsTypes';

const initialState: StaffDepartmentsState = {
    departmentsTable: []
};

const StaffDepartments = (state = initialState, action: StaffDepartmentsActions): StaffDepartmentsState => {
    switch (action.type) {
        case GET_STAFF_DEPARTMENTS:
            return {
                ...state,
                departmentsTable: action.payload
            };
        default:
            return state;
    }
};

export default StaffDepartments;
