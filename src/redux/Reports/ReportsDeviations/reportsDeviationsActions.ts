import axios from 'axios';
import { Dispatch } from 'react';
import { ReportsDeviationsActions, DeviationsEvents, GET_REPORTS_DEVIATIONS_EVENTS } from './reportsDeviationsTypes';
import config from '../../../config/config.json';

const getReportsDeviations = (eventsList: DeviationsEvents): ReportsDeviationsActions => {
    return {
        type: GET_REPORTS_DEVIATIONS_EVENTS,
        payload: eventsList
    };
};

export const requestDeviationsEvents = () => async (dispatch: Dispatch<ReportsDeviationsActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}monitoring/base/online?count=100`);
        dispatch(getReportsDeviations(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
