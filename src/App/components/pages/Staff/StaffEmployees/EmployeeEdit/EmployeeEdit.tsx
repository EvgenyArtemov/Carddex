// @ts-nocheck
import React, { ChangeEvent, useState } from 'react';
import userImage from '../../../../../../assets/images/anonim.jpg';
import { Inputs } from '../../../../global/Inputs/Inputs';
import './EmployeeEdit.scss';

export const EmployeeEdit = () => {
    const initialState = {
        uuid: '',
        hired: '',
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        organization: '',
        department: '',
        position: '',
        fired: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const [editPhoto, setEditPhoto] = useState(false);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <section className="employee__edit__wrapper">
            <div className="row">
                <div className="edit__photo">
                    <div style={{ height: '150px', width: '110px' }}>
                        <img src={userImage} alt="user" height="150" width="110" />
                    </div>
                    <button className="edit__photo__button" onClick={() => setEditPhoto(!editPhoto)} type="button">
                        <svg viewBox="0 0 32 32" style={{ fill: 'rgb(29, 104, 217)' }}>
                            <path d="M30.8284 1.15901C30.0849 0.416853 29.0772 0 28.0264 0C26.9757 0 25.968 0.416853 25.2245 1.15901L5.60387 20.7861L11.2113 26.3948L30.8284 6.78193C31.1996 6.41379 31.4943 5.97583 31.6954 5.49329C31.8965 5.01076 32 4.4932 32 3.97047C32 3.44774 31.8965 2.93019 31.6954 2.44765C31.4943 1.96511 31.1996 1.52715 30.8284 1.15901ZM0 32L8.40935 29.1956L2.80194 23.5904L0 32Z" />
                        </svg>
                    </button>
                    <div className={`edit__photo__dialogue ${editPhoto ? 'open' : ''}`}>
                        <button type="button" className="p--sm--md">
                            Загрузить
                        </button>
                        <button type="button">Изменить</button>
                        <button type="button">Удалить</button>
                    </div>
                </div>

                <div className="edit__block">
                    <div className="row">
                        <Inputs
                            type="text"
                            name="uuid"
                            onInputChange={inputHandler}
                            value={inputsState.uuid}
                            label="Табельный №"
                        />
                        <Inputs
                            type="date"
                            name="hired"
                            onInputChange={inputHandler}
                            value={inputsState.hired}
                            label="Принят"
                            className="hired_label"
                        />
                    </div>

                    <div className="row">
                        <Inputs
                            type="text"
                            name="surname"
                            onInputChange={inputHandler}
                            value={inputsState.surname}
                            label="Фамилия"
                            className="surname__label"
                        />
                    </div>
                    <div className="row">
                        <Inputs
                            type="text"
                            name="name"
                            onInputChange={inputHandler}
                            value={inputsState.name}
                            label="Имя"
                            className="name__label"
                        />
                    </div>
                    <div className="row">
                        <Inputs
                            type="text"
                            name="patronymic"
                            onInputChange={inputHandler}
                            value={inputsState.patronymic}
                            label="Отчество"
                            className="patronymic__label"
                        />
                    </div>
                    <div className="row">
                        <Inputs
                            type="text"
                            name="phone"
                            onInputChange={inputHandler}
                            value={inputsState.phone}
                            label="Телефон"
                            className="phone__label"
                        />
                        <Inputs
                            type="text"
                            name="email"
                            onInputChange={inputHandler}
                            value={inputsState.email}
                            label="E-mail"
                            className="email__label"
                        />
                    </div>
                </div>
            </div>
            <div className="line" />
            <div className="row">
                <Inputs
                    type="text"
                    name="organization"
                    onInputChange={inputHandler}
                    value={inputsState.organization}
                    label="Организация"
                    className="organization__label"
                />
                <Inputs
                    type="text"
                    name="position"
                    onInputChange={inputHandler}
                    value={inputsState.position}
                    label="Должность"
                    className="position__label"
                />
            </div>
            <div className="row">
                <Inputs
                    type="text"
                    name="department"
                    onInputChange={inputHandler}
                    value={inputsState.department}
                    label="Подразделение"
                    className="department__label"
                />
                <Inputs
                    type="date"
                    name="fired"
                    onInputChange={inputHandler}
                    value={inputsState.fired}
                    label="Уволен"
                    className="fired__label"
                />
            </div>
        </section>
    );
};
