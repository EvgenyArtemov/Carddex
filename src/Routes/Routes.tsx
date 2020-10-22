import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Content from '../utils/Content/Content';
import { Login } from '../App/components/pages/Login/Login';
import SecurityPostCentral from '../App/components/pages/SecurityPost/SecurityPostCentral/SecurityPostCentral';
import SecurityAttendance from '../App/components/pages/SecurityPost/SecurityAttendance/SecurityAttendance';
import SecurityPostMonitoring from '../App/components/pages/SecurityPost/SecurityPostMonitoring/SecurityPostMonitoring';
import PupilsFaculties from '../App/components/pages/Pupils/PupilsFaculties/PupilsFaculties';
import PupilsGroups from '../App/components/pages/Pupils/PupilsGroups/PupilsGroups';
import PupilsStudents from '../App/components/pages/Pupils/PupilsStudents/PupilsStudents';
import PupilsSchedules from '../App/components/pages/Pupils/PupilsSchedules/PupilsSchedules';
import SchoolchildSchools from '../App/components/pages/Schoolchild/SchoolchildSchools/SchoolchildSchools';
import SchoolchildClass from '../App/components/pages/Schoolchild/SchoolchildClass/SchoolchildClass';
import SchoolchildStudents from '../App/components/pages/Schoolchild/SchoolchildStudents/SchoolchildStudents';
import SchoolchildSubjects from '../App/components/pages/Schoolchild/SchoolchildSubjects/SchoolchildSubjects';
import SchoolchildSchedules from '../App/components/pages/Schoolchild/SchoolchildSchedules/SchoolchildSchedules';
import StaffDepartments from '../App/components/pages/Staff/StaffDepartments/StaffDepartments';
import StaffEmployees from '../App/components/pages/Staff/StaffEmployees/StaffEmployees';
import StaffOrganizations from '../App/components/pages/Staff/StaffOrganizations/StaffOrganizations';
import StaffPositions from '../App/components/pages/Staff/StaffPositions/StaffPositions';
import StaffTimetable from '../App/components/pages/Staff/StaffTimetable/StaffTimetable';
import Visitors from '../App/components/pages/Visitors/Visitors';
import IdentifiersRfid from '../App/components/pages/Identifiers/IdentifiersRfid/IdentifiersRfid';
import IdentifiersBiometrics from '../App/components/pages/Identifiers/IdentifiersBiometrics/IdentifiersBiometrics';
import IdentifiersPhoto from '../App/components/pages/Identifiers/IdentifiersPhoto/IdentifiersPhoto';
import IdentifiersQr from '../App/components/pages/Identifiers/IdentifiersQr/IdentifiersQr';
import IdentifiersPinCode from '../App/components/pages/Identifiers/IdentifiersPinCode/IdentifiersPinCode';
import ReportsEvents from '../App/components/pages/Reports/ReportsEvents/ReportsEvents';
import ReportsWorkingTime from '../App/components/pages/Reports/ReportsWorkingTime/ReportsWorkingTime';
import ReportsDiscipline from '../App/components/pages/Reports/ReportsDiscipline/ReportsDiscipline';
import ReportsStatistics from '../App/components/pages/Reports/ReportsStatistics/ReportsStatistics';
import ReportsDeviations from '../App/components/pages/Reports/ReportsDeviations/ReportsDeviations';
import ReportsGuestVisits from '../App/components/pages/Reports/ReportsGuestVisits/ReportsGuestVisits';
import Integration1C from '../App/components/pages/Integration/Integration1C/Integration1C';
import IntegrationEnt from '../App/components/pages/Integration/IntegrationEnt/IntegrationEnt';
import IntegrationOrionPro from '../App/components/pages/Integration/IntegrationOrionPro/IntegrationOrionPro';
import IntegrationPerco from '../App/components/pages/Integration/IntegrationPerco/IntegrationPerco';
import SettingsProfile from '../App/components/pages/Settings/SettingsProfile/SettingsProfile';
import SettingsUsersAndRoles from '../App/components/pages/Settings/SettingsUsersAndRoles/SettingsUsersAndRoles';
import SettingParameters from '../App/components/pages/Settings/SettingParameters/SettingParameters';
import SettingsTerritoryZoning from '../App/components/pages/Settings/SettingsTerritoryZoning/SettingsTerritoryZoning';
import SettingsEquipment from '../App/components/pages/Settings/SettingsEquipment/SettingsEquipment';
import SettingsProductionCalendar from '../App/components/pages/Settings/SettingsProductionCalendar/SettingsProductionCalendar';
import ImportExport from '../App/components/pages/Settings/ImportExport/ImportExport';
import SettingsDatabase from '../App/components/pages/Settings/SettingsDatabase/SettingsDatabase';
import SettingsAboutProgram from '../App/components/pages/Settings/SettingsAboutProgram/SettingsAboutProgram';

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* Login */}
                <Route exact path="/login">
                    <Login />
                </Route>

                <Content>
                    {/* Security post */}
                    <Route path="/security-post-central">
                        <SecurityPostCentral />
                    </Route>
                    <Route path="/security-attendance">
                        <SecurityAttendance />
                    </Route>
                    <Route path="/security-post-monitoring">
                        <SecurityPostMonitoring />
                    </Route>

                    {/* Pupils */}
                    <Route path="/pupils-faculties">
                        <PupilsFaculties />
                    </Route>
                    <Route path="/pupils-groups">
                        <PupilsGroups />
                    </Route>
                    <Route path="/pupils-schedules">
                        <PupilsStudents />
                    </Route>
                    <Route path="/pupils-students">
                        <PupilsSchedules />
                    </Route>

                    {/* Schoolchild */}
                    <Route path="/schoolchild-school">
                        <SchoolchildSchools />
                    </Route>
                    <Route path="/schoolchild-class">
                        <SchoolchildClass />
                    </Route>
                    <Route path="/schoolchild-students">
                        <SchoolchildStudents />
                    </Route>
                    <Route path="/schoolchild-subjects">
                        <SchoolchildSubjects />
                    </Route>
                    <Route path="/schoolchild-schedults">
                        <SchoolchildSchedules />
                    </Route>

                    {/* Staff */}
                    <Route path="/staff-organizations">
                        <StaffOrganizations />
                    </Route>
                    <Route path="/staff-departments">
                        <StaffDepartments />
                    </Route>
                    <Route path="/staff-employees">
                        <StaffEmployees />
                    </Route>
                    <Route path="/staff-positions">
                        <StaffPositions />
                    </Route>
                    <Route path="/staff-timetable">
                        <StaffTimetable />
                    </Route>

                    {/* Visitors */}
                    <Route path="/visitors">
                        <Visitors />
                    </Route>

                    {/* Identifiers */}
                    <Route path="/identifiers-rfid">
                        <IdentifiersRfid />
                    </Route>
                    <Route path="/identifiers-biometrics">
                        <IdentifiersBiometrics />
                    </Route>
                    <Route path="/identifiers-photo">
                        <IdentifiersPhoto />
                    </Route>
                    <Route path="/identifiers-qr">
                        <IdentifiersQr />
                    </Route>
                    <Route path="/identifiers-pin">
                        <IdentifiersPinCode />
                    </Route>

                    {/* Zones */}
                    <Route path="/reports-events">
                        <ReportsEvents />
                    </Route>
                    <Route path="/reports-working-time">
                        <ReportsWorkingTime />
                    </Route>
                    <Route path="/reports-discipline">
                        <ReportsDiscipline />
                    </Route>
                    <Route path="/reports-statistics">
                        <ReportsStatistics />
                    </Route>
                    <Route path="/reports-deviations">
                        <ReportsDeviations />
                    </Route>
                    <Route path="/reports-guest-visits">
                        <ReportsGuestVisits />
                    </Route>

                    {/* Integration */}
                    <Route path="/integration-1c">
                        <Integration1C />
                    </Route>
                    <Route path="/integration-ent">
                        <IntegrationEnt />
                    </Route>
                    <Route path="/integration-orionPro">
                        <IntegrationOrionPro />
                    </Route>
                    <Route path="/integration-perco">
                        <IntegrationPerco />
                    </Route>

                    {/* Settings */}
                    <Route path="/settings-profile">
                        <SettingsProfile />
                    </Route>
                    <Route path="/settings-users-and-roles">
                        <SettingsUsersAndRoles />
                    </Route>
                    <Route path="/settings-parameters">
                        <SettingParameters />
                    </Route>
                    <Route path="/settings-territory-zoning">
                        <SettingsTerritoryZoning />
                    </Route>
                    <Route path="/settings-equipment">
                        <SettingsEquipment />
                    </Route>
                    <Route path="/import-export">
                        <ImportExport />
                    </Route>
                    <Route path="/settings-production-calendar">
                        <SettingsProductionCalendar />
                    </Route>
                    <Route path="/settings-database">
                        <SettingsDatabase />
                    </Route>
                    <Route path="/settings-about-program">
                        <SettingsAboutProgram />
                    </Route>

                    {/* Production */}
                    <Route path="/tasks-and-orders">{/* <TasksAndOrders /> */}</Route>
                    <Route path="/partners">{/* <Partners /> */}</Route>
                    <Route path="/news">{/* <News /> */}</Route>
                    <Route path="/personal-suggestions">{/* <PersonalSuggestions /> */}</Route>
                    <Route path="/product-catalog">{/* <ProductCatalog /> */}</Route>
                    <Route path="/nomenclature">{/* <Nomenclature /> */}</Route>
                    <Route path="/web-applications">{/* <WebApplications /> */}</Route>
                    <Route path="/product-card">{/* <ProductCard /> */}</Route>
                    <Route path="/service">{/* <Service /> */}</Route>
                    <Route path="/reports">{/* <Reports /> */}</Route>

                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                </Content>
            </Switch>
        </Router>
    );
};

export default Routes;
