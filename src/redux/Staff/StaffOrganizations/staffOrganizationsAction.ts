import axios from 'axios';
import { Dispatch } from 'react';
import config from '../../../config/config.json';
import {
    StaffOrganizationsActions,
    StaffOrganizations,
    GET_STAFF_ORGANIZATIONS,
    STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR
} from './staffOrganizationsTypes';

export const getStaffOrganizations = (list: StaffOrganizations): StaffOrganizationsActions => ({
    type: GET_STAFF_ORGANIZATIONS,
    payload: list
});

export const staffOrganizationsToggleSidebar = (): StaffOrganizationsActions => ({
    type: STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR
});

export const requestOrganizations = () => async (dispatch: Dispatch<StaffOrganizationsActions>) => {
    try {
        const response = await axios.get(`${config.testApi}/core/db/organizations`);
        dispatch(getStaffOrganizations(response.data.payload.records));
    } catch (error) {
        console.log(error.message);
    }
};
