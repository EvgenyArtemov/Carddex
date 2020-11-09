import React, { memo } from 'react';

const WorkSchedulesInner = () => {
    return (
        <svg viewBox="0 0 18 20">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 6.5C18 2.2 16.7 1.6 13.4 1.5V0.8C13.4 0.4 13.1 0 12.6 0C12.2 0 11.8 0.3 11.8 0.8V1.5H6V0.8C6 0.3 5.7 0 5.3 0C4.8 0 4.5 0.3 4.5 0.8V1.5C0.7 1.6 0 3 0 6.6V14.9C0 18 1.3 20 5.2 20H12.9C16.9 20 18 18.1 18 14.9V6.5ZM16.5 6.8H1.6V6.5C1.3 3.3 2.5 3.1 4.6 3V3.8C4.6 4.2 4.9 4.6 5.4 4.6C5.7 4.6 6 4.3 6 3.8V3H11.9V3.8C11.9 4.2 12.2 4.6 12.7 4.6C13.1 4.6 13.5 4.3 13.5 3.8V3C16.4 3 16.6 3.7 16.6 6.4V6.8H16.5ZM13.9292 10.4594C14.1829 10.1319 14.1232 9.66084 13.7957 9.40714C13.4683 9.15344 12.9972 9.21321 12.7435 9.54064L10.2769 12.7241L7.45643 10.5086C7.29898 10.3849 7.09862 10.3293 6.89995 10.3542C6.70128 10.3791 6.52081 10.4824 6.39872 10.641L3.40558 14.5312C3.153 14.8595 3.21436 15.3304 3.54265 15.583C3.87094 15.8356 4.34183 15.7742 4.59442 15.4459L7.12558 12.1562L9.94403 14.3701C10.1011 14.4935 10.301 14.5492 10.4992 14.5247C10.6975 14.5002 10.8778 14.3976 11.0002 14.2397L13.9292 10.4594Z"
            />
        </svg>
    );
};

export const WorkSchedules = memo(WorkSchedulesInner);