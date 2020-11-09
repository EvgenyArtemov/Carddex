import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { EmployeeTimetables, GET_EMPLOYEE_TIMETABLE, EmployeeTimetableActions } from './employeeTimetableTypes';

export const getEmployeeTimetable = (timetable: EmployeeTimetables): EmployeeTimetableActions => ({
    type: GET_EMPLOYEE_TIMETABLE,
    payload: timetable
});

export const requestTimetable = (uuid: string, month: number, year: number) => async (
    dispatch: Dispatch<EmployeeTimetableActions>
) => {
    try {
        const response: AxiosResponse<EmployeeTimetables> = await axios.get(
            `https://team.carddex.ru/api/rr/ppartable?uuid=${uuid}&date=08-${month.toString().padStart(2, '0')}-${year}`
        );
        dispatch(getEmployeeTimetable(response.data));
    } catch (error) {
        console.log(error.message);
    }
};
