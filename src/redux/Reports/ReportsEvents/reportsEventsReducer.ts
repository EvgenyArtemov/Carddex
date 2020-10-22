import {
    ReportsEventsState,
    ReportsEventsActions,
    GET_REPORTS_EVENTS
} from './reportsEventsTypes';

const initialState: ReportsEventsState = {
    events: []
};

const ReportsEventsReducer = (state = initialState, action: ReportsEventsActions): ReportsEventsState => {
    switch (action.type) {
        case GET_REPORTS_EVENTS: {
            return {
                ...state,
                events: action.payload
            };
        }
        default:
            return state;
    }
};

export default ReportsEventsReducer;
