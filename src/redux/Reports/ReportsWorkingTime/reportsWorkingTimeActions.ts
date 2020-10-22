import axios from 'axios';
import { Dispatch } from 'react';
import {
    ReportsWorkingTimeEvents,
    ReportsWorkingTimeActions,
    GET_REPORTS_WORKING_TIME_EVENTS
} from './reportsWorkingTimeTypes';
import config from '../../../config/config.json';

const getReportsWorkingTimeEvents = (eventsList: ReportsWorkingTimeEvents): ReportsWorkingTimeActions => {
    return {
        type: GET_REPORTS_WORKING_TIME_EVENTS,
        payload: eventsList
    };
};

export const requestReportsWorkingTimeEvents = () => async (dispatch: Dispatch<ReportsWorkingTimeActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}reports/workingtime/blabla?item=1234`);
        dispatch(getReportsWorkingTimeEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
