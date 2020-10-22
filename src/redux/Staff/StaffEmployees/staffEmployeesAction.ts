import axios from 'axios';
import { Dispatch } from 'react';
import config from '../../../config/config.json';
import {
    StaffEmployeesActions,
    StaffEmployees,
    GET_STAFF_EMPLOYEES,
    STAFF_EMPLOYEES_TOGGLE_SIDEBAR
} from './staffEmployeesTypes';

export const getStaffEmployees = (employees: StaffEmployees): StaffEmployeesActions => ({
    type: GET_STAFF_EMPLOYEES,
    payload: employees
});

export const staffEmployeesToggleSidebar = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_TOGGLE_SIDEBAR
});

export const requestEmployees = () => (dispatch: Dispatch<StaffEmployeesActions>) => {
    axios
        .get(`${config.apiUrl}employees`)
        .then((response) => {
            dispatch(getStaffEmployees(response.data.employees));
        })
        .catch((error) => {
            console.log(error);
        });
};
