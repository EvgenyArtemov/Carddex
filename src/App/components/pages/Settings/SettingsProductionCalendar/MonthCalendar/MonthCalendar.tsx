import React, { useRef } from 'react';
import './MonthCalendar.scss';

export const MonthCalendar = () => {
    const calendar = useRef(null);
    return (
        <div className="month__calendar__wrapper">
            <div className="statistics">
                <div className="column">
                    <div className="statistics__header stat__text">Календарные</div>
                    <div className="statistics__header stat__text">Выходные</div>
                    <div className="statistics__header stat__text">Праздничные</div>
                    <div className="statistics__header stat__text">Рабочие</div>
                </div>
                <div className="stat__spacer" />
                <div className="column">
                    <div className="statistics__days stat__text">30 дн.</div>
                    <div className="statistics__days stat__text text--blue text--end">8 дн.</div>
                    <div className="statistics__days stat__text text--blue text--end">1 дн.</div>
                    <div className="statistics__days stat__text text--blue text--end">29 дн.</div>
                </div>
            </div>
            <div className="statistics">
                <div className="column">
                    <div className="statistics__header stat__text">40 ч/неделя</div>
                    <div className="statistics__header stat__text">36 ч/неделя</div>
                    <div className="statistics__header stat__text">32 ч/неделя</div>
                </div>
                <div className="stat__spacer" />
                <div className="column">
                    <div className="statistics__days stat__text text--end">168 час.</div>
                    <div className="statistics__days stat__text text--blue text--end">150 час.</div>
                    <div className="statistics__days stat__text text--blue text--end">120 час.</div>
                </div>
            </div>
            <div className="month__calendar__body" tabIndex={0}>
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
                    <div className="day" data-cell="1">
                        <span className="day__number">1</span>
                    </div>
                    <div className="day" data-cell="2">
                        <span className="day__number">2</span>
                    </div>
                    <div className="day" data-cell="3">
                        <span className="day__number">3</span>
                    </div>
                    <div className="day" data-cell="4">
                        <span className="day__number">4</span>
                    </div>
                    <div className="day" data-cell="5">
                        <span className="day__number">5</span>
                    </div>
                    <div className="day" data-cell="6">
                        <span className="day__number weekend">6</span>
                    </div>
                    <div className="day" data-cell="7">
                        <span className="day__number weekend">7</span>
                    </div>
                    <div className="day" data-cell="8">
                        <span className="day__number">8</span>
                    </div>
                    <div className="day" data-cell="9">
                        <span className="day__number">9</span>
                    </div>
                    <div className="day" data-cell="10">
                        <span className="day__number">10</span>
                    </div>
                    <div className="day" data-cell="11">
                        <span className="day__number">11</span>
                    </div>
                    <div className="day" data-cell="12">
                        <span className="day__number">12</span>
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
                    <div className="day" data-cell="16">
                        <span className="day__number">16</span>
                    </div>
                    <div className="day" data-cell="17">
                        <span className="day__number">17</span>
                    </div>
                    <div className="day" data-cell="18">
                        <span className="day__number">18</span>
                    </div>
                    <div className="day" data-cell="19">
                        <span className="day__number">19</span>
                    </div>
                    <div className="day" data-cell="20">
                        <span className="day__number weekend">20</span>
                    </div>
                    <div className="day" data-cell="21">
                        <span className="day__number weekend">21</span>
                    </div>
                    <div className="day" data-cell="22">
                        <span className="day__number">22</span>
                    </div>
                    <div className="day" data-cell="23">
                        <span className="day__number">23</span>
                    </div>
                    <div className="day" data-cell="24">
                        <span className="day__number">24</span>
                    </div>
                    <div className="day" data-cell="25">
                        <span className="day__number">25</span>
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
                    </div>
                </div>
            </div>
            <div className="date__descriptions p--md--bold">
                В этот день: <br /> <br />4 ноября - День Народного Единства
            </div>
        </div>
    );
};
