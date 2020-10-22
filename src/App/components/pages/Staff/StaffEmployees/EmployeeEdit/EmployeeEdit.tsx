import React from 'react';
import userImage from '../../../../../../assets/images/anonim.jpg';
import './EmployeeEdit.scss';

export const EmployeeEdit = () => {
    return (
        <section className="employee__edit__wrapper">
            <div className="row">
                <div className="edit__photo">
                    <div style={{ height: '160px', width: '120px', backgroundColor: '#F1F1F1' }}>
                        <img src={userImage} alt="user" style={{ height: '160px', width: '120px' }} />
                    </div>
                    <button className="edit__photo__button">
                        <svg viewBox="0 0 32 32" style={{ fill: 'rgb(29, 104, 217)' }}>
                            <path d="M30.8284 1.15901C30.0849 0.416853 29.0772 0 28.0264 0C26.9757 0 25.968 0.416853 25.2245 1.15901L5.60387 20.7861L11.2113 26.3948L30.8284 6.78193C31.1996 6.41379 31.4943 5.97583 31.6954 5.49329C31.8965 5.01076 32 4.4932 32 3.97047C32 3.44774 31.8965 2.93019 31.6954 2.44765C31.4943 1.96511 31.1996 1.52715 30.8284 1.15901ZM0 32L8.40935 29.1956L2.80194 23.5904L0 32Z" />
                        </svg>
                    </button>
                </div>
                <div className="edit__block">
                    <div className="row">
                        <div className="edit__input mt0">
                            <form action="">
                                <label htmlFor="uid">Табельный номер</label>
                                <br />
                                <input
                                    type="text"
                                    id="uid"
                                    placeholder="Табельный номер"
                                    value="44d2051c-9e0f-44e2-a117-a4"
                                />
                            </form>
                        </div>
                        <div className="edit__input mt0">
                            <form action="">
                                <label htmlFor="surname">Фамилия</label>
                                <br />
                                <input type="text" id="surname" placeholder="Фамилия" value="Иванов" />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="edit__input">
                            <form action="">
                                <label htmlFor="name">Имя</label>
                                <br />
                                <input type="text" id="name" placeholder="Имя" value="Петр" />
                            </form>
                        </div>
                        <div className="edit__input">
                            <form action="">
                                <label htmlFor="patronymic">Отчество</label>
                                <br />
                                <input type="text" id="patronymic" placeholder="Отчество" value="Иванович" />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="edit__input">
                            <form action="">
                                <label htmlFor="phone">Телефон</label>
                                <br />
                                <input type="text" id="phone" placeholder="Телефон" value="+7-900-565-44-33" />
                            </form>
                        </div>
                        <div className="edit__input">
                            <form action="">
                                <label htmlFor="email">Электронная почта</label>
                                <br />
                                <input type="text" id="email" placeholder="Отчество" value="ivanov@vseivanu.tut" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="edit__block">
                    <div className="edit__input">
                        <form action="">
                            <label htmlFor="organization">Организация</label>
                            <br />
                            <input type="text" id="organization" placeholder="Организация" value="ООО Пятерочка" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="edit__dates">
                    <div className="edit__input">
                        <form action="">
                            <label htmlFor="hired">Дата приема</label>
                            <br />
                            <input type="text" id="hired" placeholder="Дата приема" value="31.02.1965" />
                        </form>
                    </div>
                </div>
                <div className="edit__block">
                    <div className="edit__input">
                        <form action="">
                            <label htmlFor="chief">Руководитель</label>
                            <br />
                            <input type="text" id="chief" placeholder="Руководитель" value="Чернов Семен Петрович" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="edit__dates">
                    <div className="edit__input">
                        <form action="">
                            <label htmlFor="fired">Дата увольнения</label>
                            <br />
                            <input type="text" id="fired" placeholder="Дата увольнения" value="--.--.----" />
                        </form>
                    </div>
                </div>
                <div className="edit__block">
                    <div className="row">
                        <div className="edit__input">
                            <form action="" id="department">
                                <label htmlFor="department">Подразделение</label>
                                <br />
                                <div className="withselect">
                                    <select name="cars" id="department" form="department">
                                        <option value="volvo">Отдел снабжения</option>
                                        <option value="saab">Отдел закупок</option>
                                        <option value="opel">Отдел поставок</option>
                                        <option value="audi">Отдел изъятия</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="edit__input">
                            <form action="">
                                <label htmlFor="position">Должность</label>
                                <br />
                                <input type="text" id="position" placeholder="Должность" value="Менеджер" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
