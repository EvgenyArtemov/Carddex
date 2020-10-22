import {
    ReportsWorkingTimeActions,
    ReportsWorkingTimeState,
    GET_REPORTS_WORKING_TIME_EVENTS
} from './reportsWorkingTimeTypes';

const initialState: ReportsWorkingTimeState = {
    events: []
};

const ReportsWorkingTimeReducer = (
    state = initialState,
    action: ReportsWorkingTimeActions
): ReportsWorkingTimeState => {
    switch (action.type) {
        case GET_REPORTS_WORKING_TIME_EVENTS: {
            return {
                ...state,
                events: action.payload
            };
        }
        default:
            return state;
    }
};

export default ReportsWorkingTimeReducer;
