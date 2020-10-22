import {
    ReportsStatisticsActions,
    GET_REPORTS_STATISTICS_EVENTS,
    ReportsStatisticsState
} from './reportsStatisticsTypes';

const initialState: ReportsStatisticsState = {
    events: []
};

const ReportsStatisticsReducer = (state = initialState, action: ReportsStatisticsActions): ReportsStatisticsState => {
    switch (action.type) {
        case GET_REPORTS_STATISTICS_EVENTS: {
            return {
                ...state,
                events: action.payload
            };
        }
        default:
            return state;
    }
};

export default ReportsStatisticsReducer;
