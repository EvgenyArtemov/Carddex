import {
    ReportsDeviationsState,
    ReportsDeviationsActions,
    GET_REPORTS_DEVIATIONS_EVENTS
} from './reportsDeviationsTypes';

const initialState: ReportsDeviationsState = {
    events: []
};

const ReportsDeviationsReducer = (state = initialState, action: ReportsDeviationsActions): ReportsDeviationsState => {
    switch (action.type) {
        case GET_REPORTS_DEVIATIONS_EVENTS: {
            return {
                ...state,
                events: action.payload
            };
        }
        default:
            return state;
    }
};

export default ReportsDeviationsReducer;
