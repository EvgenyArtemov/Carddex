import React, { useRef, useState, useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { StaffEmployee } from 'App/../redux/Staff/StaffEmployees/staffEmployeesTypes';
import { State } from 'App/../redux/store';
import { PrevButton } from 'assets/images/prev__btn';
import { NextButton } from 'assets/images/next__btn';
import { requestTimetable } from 'App/../redux/Staff/StaffEmployees/EmployeeTimetable/employeeTimetableActions';
import { useSelection } from '../../../../../../../hooks/useSelection/useSelection';
import './EmployeeTimetableBig.scss';

interface EmployeeTimetableProps {
    selectedUser: StaffEmployee;
}

type direction = 'forward' | 'backward';

export const EmployeeTimetableBig: React.FC<EmployeeTimetableProps> = ({ selectedUser }) => {
    const dispatch = useDispatch();
    const memoDispatch = useCallback(dispatch, []);
    const calendar = useRef(null);
    const timetable = useSelector((state: State) => state.staff.staffEmployeeTimetable.timetable, shallowEqual);
    const [selectionHandler, periodOn, periodOff] = useSelection(calendar);
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const [requestedMonth, setRequestedMonth] = useState(currentMonth);
    const [requestedYear, setRequestedYear] = useState(currentYear);
    let firstDayOfWeek: number | undefined;
    let lastDayOfWeek: number | undefined;
    let prevMonthIsFull;
    let endDays;
    let begDays: number[];

    // It determines is prev month is full
    const monthIsFull = (date: number) => {
        // months that includes 31 days
        return [1, 3, 5, 7, 8, 10, 12].includes(date);
    };
    // Days to add to the end/beggining of the month
    endDays = prevMonthIsFull ? [26, 27, 28, 29, 30, 31] : [25, 26, 27, 28, 29, 30];
    // February has less days
    if (timetable && currentMonth === 3) {
        endDays = [23, 24, 25, 26, 27, 28];
    }
    // eslint-disable-next-line prefer-const
    begDays = [1, 2, 3, 4, 5, 6];

    if (timetable) {
        // getting number of the requested month
        firstDayOfWeek = timetable?.timesperday[0]?.dayofweek || 1;
        lastDayOfWeek = timetable?.timesperday[timetable?.timesperday.length - 1]?.dayofweek || 30;
        prevMonthIsFull = monthIsFull(currentMonth - 1);
    }

    const monthHandler = (direction: direction) => {
        if (direction === 'forward' && requestedMonth < currentMonth && requestedYear === currentYear) {
            setRequestedMonth((prev) => prev + 1);
        }
        if (direction === 'forward' && requestedYear < currentYear) {
            setRequestedMonth((prev) => prev + 1);
        }
        if (direction === 'backward') {
            setRequestedMonth((prev) => prev - 1);
        }
        if (direction === 'forward' && requestedMonth === 12) {
            setRequestedMonth(1);
        }
        if (direction === 'backward' && requestedMonth === 1) {
            setRequestedMonth(12);
        }
    };

    const yearHandler = (direction: direction) => {
        if (direction === 'forward' && requestedYear < currentYear) {
            setRequestedYear((prev) => prev + 1);
        }
        if (direction === 'backward') {
            setRequestedYear((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (selectedUser) {
            memoDispatch(requestTimetable(selectedUser?.uuid, requestedMonth, requestedYear));
        }
    }, [memoDispatch, selectedUser, requestedMonth, requestedYear]);
    return (
        <section className="timetable--big timetable__wrapper">
            <div>
                <div className="controls">
                    <div className="controls__buttons">
                        <button className="controls__button" type="button" onClick={() => monthHandler('backward')}>
                            <PrevButton />
                        </button>
                    </div>
                    <div className="controls__month">
                        <span>
                            {requestedMonth === 1
                                ? 'Январь'
                                : requestedMonth === 2
                                ? 'Февраль'
                                : requestedMonth === 3
                                ? 'Март'
                                : requestedMonth === 4
                                ? 'Апрель'
                                : requestedMonth === 5
                                ? 'Май'
                                : requestedMonth === 6
                                ? 'Июнь'
                                : requestedMonth === 7
                                ? 'Июль'
                                : requestedMonth === 8
                                ? 'Август'
                                : requestedMonth === 9
                                ? 'Сентябрь'
                                : requestedMonth === 10
                                ? 'Октябрь'
                                : requestedMonth === 11
                                ? 'Ноябрь'
                                : requestedMonth === 12
                                ? 'Декабрь'
                                : 'Месяц'}
                        </span>
                        <div className="controls__buttons">
                            <button className="controls__button" type="button" onClick={() => monthHandler('forward')}>
                                <NextButton />
                            </button>
                        </div>
                    </div>
                    <div className="controls__year">
                        <div className="controls__buttons">
                            <button className="controls__button" type="button" onClick={() => yearHandler('backward')}>
                                <PrevButton />
                            </button>
                        </div>
                        <span>{requestedYear}</span>
                        <div className="controls__buttons">
                            <button className="controls__button" type="button" onClick={() => yearHandler('forward')}>
                                <NextButton />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="timetable__calendar"
                    tabIndex={0}
                    onClick={selectionHandler}
                    onKeyDown={periodOn}
                    onKeyUp={periodOff}
                >
                    <div className="calendar__weekdays">
                        <div className="calendar__weekdays__day">ПН</div>
                        <div className="calendar__weekdays__day">ВТ</div>
                        <div className="calendar__weekdays__day">СР</div>
                        <div className="calendar__weekdays__day">ЧТ</div>
                        <div className="calendar__weekdays__day">ПТ</div>
                        <div className="calendar__weekdays__day weekend">СБ</div>
                        <div className="calendar__weekdays__day weekend">ВС</div>
                        <div className="weekdays__border" />
                    </div>
                    <div className="calendar__weeknumbers">
                        <div className="calendar__weeknumbers__number">33</div>
                        <div className="calendar__weeknumbers__number">34</div>
                        <div className="calendar__weeknumbers__number">35</div>
                        <div className="calendar__weeknumbers__number">36</div>
                        <div className="calendar__weeknumbers__number">37</div>
                    </div>
                    <div className="calendar__body" ref={calendar}>
                        {timetable &&
                            firstDayOfWeek &&
                            endDays.splice(endDays.length - (firstDayOfWeek - 1), firstDayOfWeek - 1).map((el) => {
                                return (
                                    <div className="day past" key={el}>
                                        <span className="day__number">{el}</span>
                                    </div>
                                );
                            })}
                        {timetable &&
                            timetable.timesperday.map((el: any, i: number) => {
                                return (
                                    <div
                                        className={`day ${el.corrected ? 'correction--holiday' : ''}`}
                                        data-cell={`${i + 1}`}
                                        key={el.day}
                                    >
                                        <span
                                            className={`day__number ${el.dayofweek === 6 ? 'weekend' : ''} ${
                                                el.dayofweek === 7 ? 'weekend' : ''
                                            }`}
                                        >
                                            {el.day.split('.')[0]}
                                        </span>
                                        <span className="day__hours">{el.times}</span>
                                    </div>
                                );
                            })}
                        {timetable &&
                            lastDayOfWeek &&
                            begDays.splice(0, 7 - lastDayOfWeek).map((el) => {
                                return (
                                    <div className="day past" key={el}>
                                        <span className="day__number">{el}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="descriptions">
                    <div className="descriptions__item">
                        <span className="correction__sign--manual" />
                        <span className="correction__meaning">Ручная корректировка</span>
                    </div>
                    <div className="descriptions__item">
                        <span className="correction__sign--holidays" />
                        <span className="correction__meaning">Отпуск/Больничный</span>
                    </div>
                </div>
            </div>
            <aside className="timetable__codes">
                <h2 className="timetable__codes__dates">28 Октября 2020</h2>
                <h2 className="timetable__codes__header p--lg--normal">{selectedUser.name}</h2>
            </aside>
        </section>
    );
};
