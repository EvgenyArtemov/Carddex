import {
    StaffOrganizationsState,
    StaffOrganizationsActions,
    GET_STAFF_ORGANIZATIONS,
    STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR
} from './staffOrganizationsTypes';

const initialState: StaffOrganizationsState = {
    organizationsTable: [],
    sidebarOpened: false
};

const StaffOrganizations = (state = initialState, action: StaffOrganizationsActions): StaffOrganizationsState => {
    switch (action.type) {
        case GET_STAFF_ORGANIZATIONS:
            return {
                ...state,
                organizationsTable: action.payload
            };
        case STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        default:
            return state;
    }
};

export default StaffOrganizations;
