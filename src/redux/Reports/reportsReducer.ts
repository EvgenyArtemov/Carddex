import { combineReducers } from 'redux';
import ReportsDeviationsReducer from 'App/../redux/Reports/ReportsDeviations/reportsDeviationsReducer';
import ReportsEventsReducer from 'App/../redux/Reports/ReportsEvents/reportsEventsReducer';
import ReportsStatisticsReducer from 'App/../redux/Reports/ReportsStatistics/reportsStatisticsReducer';
import ReportsWorkingTimeReducer from 'App/../redux/Reports/ReportsWorkingTime/reportsWorkingTimeReducer';

const Reports = combineReducers({
    reportsDeviations: ReportsDeviationsReducer,
    reportsEvents: ReportsEventsReducer,
    reportsStatistics: ReportsStatisticsReducer,
    reportsWorking: ReportsWorkingTimeReducer,
});

export default Reports;