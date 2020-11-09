import axios from 'axios';
import { Dispatch } from 'react';
import config from '../../../config/config.json';
import { StaffDepartmentsActions, StaffDepartments, GET_STAFF_DEPARTMENTS } from './staffDepartmentsTypes';

export const getStaffDepartments = (list: StaffDepartments): StaffDepartmentsActions => ({
    type: GET_STAFF_DEPARTMENTS,
    payload: list
});

export const requestDepartments = () => (dispatch: Dispatch<StaffDepartmentsActions>) => {
    axios
        .get(`${config.apiUrl}departments`)
        .then((response) => {
            dispatch(getStaffDepartments(response.data.list));
        })
        .catch((error) => {
            console.log(error);
        });
};
