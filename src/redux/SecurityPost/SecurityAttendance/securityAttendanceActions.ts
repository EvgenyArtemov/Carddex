import axios from 'axios';
import { Dispatch } from 'react';
import config from '../../../config/config.json';
import { 
    SecurityAttendanceActions,
    SecurityAttendances,
    SECURITY_ATTENDANCE_TOGGLE_SIDEBAR,
    GET_SECURITY_ATTENDANCE
} from './securityAttendanceTypes';

export const securityAttendanceToggleSidebar = (): SecurityAttendanceActions => ({
    type: SECURITY_ATTENDANCE_TOGGLE_SIDEBAR
});

export const getSecurityAttendance = (attendanceTable: SecurityAttendances): SecurityAttendanceActions => ({
    type: GET_SECURITY_ATTENDANCE,
    payload: attendanceTable
});

export const requestAttendance = () => (dispatch: Dispatch<SecurityAttendanceActions>) => {
    axios
        .get(`${config.apiUrl}attendance`)
        .then((response) => {
            dispatch(getSecurityAttendance(response.data.attendanceTable));
        })
        .catch((error) => {
            console.log(error);
        });
};
