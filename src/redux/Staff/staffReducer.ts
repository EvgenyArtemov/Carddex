import { combineReducers } from 'redux';
import StaffDepartments from 'App/../redux/Staff/StaffDepartments/staffDepartmentsReducer';
import StaffEmployees from 'App/../redux/Staff/StaffEmployees/staffEmployeesReducer';
import StaffOrganizations from 'App/../redux/Staff/StaffOrganizations/staffOrganizationsReducer';
import StaffEmployeeTimetableReducer from 'App/../redux/Staff/StaffEmployees/EmployeeTimetable/employeeTimetableReducer';

const StaffReducer = combineReducers({
    staffDepartments: StaffDepartments,
    staffEmployees: StaffEmployees,
    staffOrganizations: StaffOrganizations,
    staffEmployeeTimetable: StaffEmployeeTimetableReducer
});

export default StaffReducer;
