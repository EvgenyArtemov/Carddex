// @ts-nocheck
import React from 'react';
import { EmployeeTimetableBig } from './EmployeeTimetableBig/EmployeeTimetableBig';
import './TimetableParameters.scss';

export const TimetableParameters = ({ selectedUser }) => {
    return (
        <div className="timetable__parameters">
            <EmployeeTimetableBig selectedUser={selectedUser} />
        </div>
    );
};
