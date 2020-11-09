import axios from 'axios';
import { Dispatch } from 'react';
import {
    SecurityPostMonitoringEvents,
    SecurityPostMonitoringActions,
    TableItem,
    GET_SECURITY_POST_MONITORING_EVENTS,
    SECURITY_POST_MONITORING_TABLE_ROW,
    SECURITY_POST_MONITORING_QUICK_FILTER,
    SECURITY_POST_MONITORING_SIDE_FILTER
} from './securityPostMonitoringTypes';
import config from '../../../config/config.json';

export const getSecurityPostMonitoringEvents = (
    eventsList: SecurityPostMonitoringEvents
): SecurityPostMonitoringActions => {
    return {
        type: GET_SECURITY_POST_MONITORING_EVENTS,
        payload: eventsList
    };
};

export const selectSecurityPostMonitoringTableRow = (payload: TableItem): SecurityPostMonitoringActions => {
    return {
        type: SECURITY_POST_MONITORING_TABLE_ROW,
        payload
    };
};

export const toggleSecurityPostMonitoringQuickFilter = (): SecurityPostMonitoringActions => ({
    type: SECURITY_POST_MONITORING_QUICK_FILTER
});

export const toggleSecurityPostMonitoringSideFilter = (): SecurityPostMonitoringActions => ({
    type: SECURITY_POST_MONITORING_SIDE_FILTER
});

export const requestSecurityPostMonitoringEvents = () => async (dispatch: Dispatch<SecurityPostMonitoringActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}monitoring/base/online?count=100`);
        dispatch(getSecurityPostMonitoringEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
