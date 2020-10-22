import React from 'react';
import { StaffEmployee } from 'App/../redux/Staff/StaffEmployees/staffEmployeesTypes';
import './EmployeeTimetableBig.scss';

interface EmployeeTimetableProps {
    selectedUser: StaffEmployee;
}

export const EmployeeTimetableBig: React.FC<EmployeeTimetableProps> = ({ selectedUser }) => {
    return (
        <section className="big__timetable__wrapper">
            {/* <div className="timetable__header">График работы 5/2</div> */}
            <div className="big__timetable__calendar">
                <div className="calendar__spacer" />
                <div className="calendar__weekdays">
                    <div className="calendar__weekdays__day">Пн</div>
                    <div className="calendar__weekdays__day">Вт</div>
                    <div className="calendar__weekdays__day">Ср</div>
                    <div className="calendar__weekdays__day">Чт</div>
                    <div className="calendar__weekdays__day">Пт</div>
                    <div className="calendar__weekdays__day">Сб</div>
                    <div className="calendar__weekdays__day">Вс</div>
                </div>
                <div className="calendar__weeknumbers">
                    <div className="calendar__weeknumbers__number">33</div>
                    <div className="calendar__weeknumbers__number">34</div>
                    <div className="calendar__weeknumbers__number">35</div>
                    <div className="calendar__weeknumbers__number">36</div>
                    <div className="calendar__weeknumbers__number">37</div>
                </div>
                <div className="calendar__body">
                    <div className="day mark--incorrect mark--holiday" data-cell="1">
                        <span className="day__number">1</span>
                        <span className="day__hours">12.28</span>
                    </div>
                    <div className="day" data-cell="2">
                        <span className="day__number">2</span>
                        <span className="day__hours bad">09.28</span>
                    </div>
                    <div className="day" data-cell="3">
                        <span className="day__number">3</span>
                        <span className="day__hours">10.18</span>
                    </div>
                    <div className="day" data-cell="4">
                        <span className="day__number">4</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="5">
                        <span className="day__number">5</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day weekend" data-cell="6">
                        6
                    </div>
                    <div className="day weekend" data-cell="7">
                        7
                    </div>
                    <div className="day" data-cell="8">
                        <span className="day__number">8</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="9">
                        <span className="day__number">9</span>
                        <span className="day__hours">12.05</span>
                    </div>
                    <div className="day" data-cell="10">
                        <span className="day__number">10</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="11">
                        <span className="day__number">11</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="12">
                        <span className="day__number">12</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day weekend" data-cell="13">
                        13
                    </div>
                    <div className="day weekend" data-cell="14">
                        14
                    </div>
                    <div className="day" data-cell="15">
                        <span className="day__number">15</span>
                    </div>
                    <div className="day" data-cell="16">
                        <span className="day__number">16</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="17">
                        <span className="day__number">17</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day weekend" data-cell="18">
                        <span className="day__number">18</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="19">
                        <span className="day__number">19</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day weekend" data-cell="20">
                        <span className="day__number">20</span>
                    </div>
                    <div className="day weekend" data-cell="21">
                        <span className="day__number">21</span>
                    </div>
                    <div className="day" data-cell="22">
                        <span className="day__number">22</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="23">
                        <span className="day__number">23</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="24">
                        <span className="day__number">24</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="25">
                        <span className="day__number">25</span>
                        <span className="day__hours">12.00</span>
                    </div>
                    <div className="day" data-cell="26">
                        <span className="day__number current">22</span>
                    </div>
                    <div className="day weekend" data-cell="27">
                        27
                    </div>
                    <div className="day weekend" data-cell="28">
                        28
                    </div>
                    <div className="day" data-cell="29">
                        29
                    </div>
                    <div className="day" data-cell="30">
                        30
                    </div>
                </div>
            </div>
            <div className="ruler ruler--one" />
            <div className="ruler ruler--two" />
            <div className="ruler ruler--three" />
            <div className="ruler ruler--four" />
        </section>
    );
};
