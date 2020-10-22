import axios from 'axios';
import { Dispatch } from 'react';
import {
    ReportsStatisticsActions,
    ReportsStatisticsEvents,
    GET_REPORTS_STATISTICS_EVENTS
} from './reportsStatisticsTypes';
import config from '../../../config/config.json';

export const getReportsStatistics = (eventsList: ReportsStatisticsEvents): ReportsStatisticsActions => {
    return {
        type: GET_REPORTS_STATISTICS_EVENTS,
        payload: eventsList
    };
};

export const requestReportsStatistics = () => async (dispatch: Dispatch<ReportsStatisticsActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}monitoring/base/online?count=100`);
        dispatch(getReportsStatistics(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
