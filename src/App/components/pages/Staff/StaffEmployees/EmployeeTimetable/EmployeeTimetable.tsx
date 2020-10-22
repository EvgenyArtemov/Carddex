// @ts-nocheck
/* eslint-disable prefer-const */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import './EmployeeTimetable.scss';
import { PrevButton } from 'assets/images/prev__btn';
import { NextButton } from 'assets/images/next__btn';
import { StaffEmployee } from 'App/../redux/Staff/StaffEmployees/staffEmployeesTypes';
import { requestTimetable } from '../../../../../../redux/Staff/StaffEmployees/EmployeeTimetable/employeeTimetableActions';
import { State } from '../../../../../../redux/store';

interface EmployeeTimetableProps {
    selectedUser: StaffEmployee;
}

type direction = 'forward' | 'backward';

export const EmployeeTimetable: React.FC<EmployeeTimetableProps> = ({ selectedUser }) => {
    const dispatch = useDispatch();
    const memoDispatch = useCallback(dispatch, []);
    const timetable = useSelector((state: State) => state.staff.staffEmployeeTimetable?.timetable, shallowEqual);
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    const [requestedMonth, setRequestedMonth] = useState(currentMonth);
    const [requestedYear, setRequestedYear] = useState(currentYear);
    const period = useRef(false);
    const calendar = useRef(null);
    let firstDayOfWeek;
    let lastDayOfWeek;
    let prevMonthIsFull;
    let endDays;
    let begDays;
    let selectedDay = [];
    // let periodDays = [];
    let days;
    let start;
    let end;
    let click = 0;

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
    begDays = [1, 2, 3, 4, 5, 6];

    if (timetable) {
        // getting number of the requested month
        firstDayOfWeek = timetable?.timesperday[0].dayofweek;
        lastDayOfWeek = timetable?.timesperday[timetable?.timesperday.length - 1].dayofweek;
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

    const clearSelection = () => {
        calendar.current.querySelectorAll('.selected').forEach((el) => {
            el.classList.remove('selected');
        });
    };

    const periodOn = (ev: any) => {
        if (ev.key === 'Shift' && !period.current) {
            clearSelection();
            period.current = true;
        }
    };

    const periodOff = (ev: any) => {
        if (ev.key === 'Shift' && period.current) {
            period.current = false;
        }
    };

    const selectionHandler = (ev: any) => {
        const div = ev.target.closest('div');

        if (calendar.current) {
            days = [...calendar.current.childNodes];
        }

        // Select just one item
        if (!period.current) {
            // console.log('unwanted');
            const day = +div.dataset.cell;
            clearSelection();
            div.classList.add('selected');
            if (!selectedDay.includes(day)) {
                selectedDay.push(day);
            } else {
                selectedDay = [];
                div.classList.remove('selected');
            }
        } else {
            // Select multiple items with SHIFT
            if (click === 2) {
                click = 0;
            }
            if (click === 0) {
                start = days.indexOf(div);
                div.classList.add('selected');
                click = 1;
                return;
            }

            if (click === 1) {
                end = days.indexOf(div);
                click = 2;
                days.forEach((el, i) => {
                    if (start < end) {
                        if (i >= start && i <= end) {
                            el.classList.add('selected');
                        }
                    }
                    if (start > end) {
                        if (i <= start && i >= end) {
                            el.classList.add('selected');
                        }
                    }
                });
            }
        }
    };

    useEffect(() => {
        if (selectedUser) {
            memoDispatch(requestTimetable(selectedUser?.uuid, requestedMonth, requestedYear));
        }
    }, [memoDispatch, selectedUser, requestedMonth, requestedYear]);

    return (
        <section className="timetable__wrapper">
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
            <div className="statistics">
                <div className="column">
                    <div className="statistics__header stat__text">План</div>
                    <div className="statistics__header stat__text text--dark">Факт</div>
                </div>
                <div className="stat__spacer" />
                <div className="column">
                    <div className="statistics__days stat__text">Дней - 22</div>
                    <div className="statistics__days stat__text text--blue">Дней - 21</div>
                </div>
                <div className="column">
                    <div className="statistics__hours stat__text"> Часов - 176</div>
                    <div className="statistics__hours stat__text text--blue"> Часов - 168</div>
                </div>
            </div>
            <div
                className="timetable__calendar"
                tabIndex="0"
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
                        begDays.splice(0, 7 - lastDayOfWeek).map((el) => {
                            return (
                                <div className="day past" key={el}>
                                    <span className="day__number">{el}</span>
                                </div>
                            );
                        })}
                    {/* <div className="day" data-cell="1">
                        <span className="day__number">1</span>
                        <span className="day__hours">12:28</span>
                    </div>
                    <div className="day good" data-cell="2">
                        <span className="day__number">2</span>
                        <span className="day__hours">09:28</span>
                    </div>
                    <div className="day good" data-cell="3">
                        <span className="day__number">3</span>
                        <span className="day__hours">10:18</span>
                    </div>
                    <div className="day" data-cell="4">
                        <span className="day__number">4</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day correction" data-cell="5">
                        <span className="day__number">5</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="6">
                        <span className="day__number weekend">6</span>
                    </div>
                    <div className="day" data-cell="7">
                        <span className="day__number weekend">7</span>
                    </div>
                    <div className="day bad" data-cell="8">
                        <span className="day__number">8</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="9">
                        <span className="day__number">9</span>
                        <span className="day__hours">12:05</span>
                    </div>
                    <div className="day" data-cell="10">
                        <span className="day__number">10</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day good" data-cell="11">
                        <span className="day__number">11</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="12">
                        <span className="day__number">12</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="13">
                        <span className="day__number weekend">13</span>
                    </div>
                    <div className="day" data-cell="14">
                        <span className="day__number weekend">14</span>
                    </div>
                    <div className="day" data-cell="15">
                        <span className="day__number">15</span>
                    </div>
                    <div className="day bad correction" data-cell="16">
                        <span className="day__number">16</span>
                        <span className="day__hours">12:00</span>
                        <span className="deviation" />
                    </div>
                    <div className="day bad" data-cell="17">
                        <span className="day__number">17</span>
                        <span className="day__hours">12:00</span>
                        <span className="deviation" />
                    </div>
                    <div className="day bad" data-cell="18">
                        <span className="day__number">18</span>
                        <span className="day__hours">12:00</span>
                        <span className="deviation" />
                    </div>
                    <div className="day" data-cell="19">
                        <span className="day__number">19</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="20">
                        <span className="day__number weekend">20</span>
                    </div>
                    <div className="day" data-cell="21">
                        <span className="day__number weekend">21</span>
                    </div>
                    <div className="day" data-cell="22">
                        <span className="day__number">22</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="23">
                        <span className="day__number">23</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="24">
                        <span className="day__number">24</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="25">
                        <span className="day__number">25</span>
                        <span className="day__hours">12:00</span>
                    </div>
                    <div className="day" data-cell="26">
                        <span className="day__number current">22</span>
                    </div>
                    <div className="day " data-cell="27">
                        <span className="day__number weekend">27</span>
                    </div>
                    <div className="day" data-cell="28">
                        <span className="day__number weekend">28</span>
                    </div>
                    <div className="day" data-cell="29">
                        <span className="day__number">29</span>
                    </div>
                    <div className="day" data-cell="30">
                        <span className="day__number">30</span>
                    </div>
                    <div className="day past" data-cell="1">
                        <span className="day__number">1</span>
                    </div>
                    <div className="day past" data-cell="2">
                        <span className="day__number">2</span>
                    </div>
                    <div className="day past" data-cell="3">
                        <span className="day__number">3</span>
                    </div>
                    <div className="day past" data-cell="4">
                        <span className="day__number weekend">4</span>
                    </div>
                    <div className="day past" data-cell="5">
                        <span className="day__number weekend">5</span>
                    </div> */}
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
        </section>
    );
};
