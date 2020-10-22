import React from 'react';
// import { Dropdown } from 'primereact/dropdown';
import { StaffEmployee } from 'App/../redux/Staff/StaffEmployees/staffEmployeesTypes';
import { ReactComponent as UserIcon } from '../../../../../../assets/images/userIcon.svg';
import './EmployeeDetails.scss';

interface EditEmployee {
    selectedUser: StaffEmployee | null;
}

const EmployeeEdit = (props: EditEmployee) => {
    return (
        <div className="edit-employee">
            <div className="edit-employee__body">
                <div className="modal__employee-authenticated">
                    <div className="modal__employee-photo">
                        <UserIcon />
                    </div>

                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Фамилия</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[0]}</span>
                        </div>

                        <div className="info__item">
                            <h4 className="info__header">Имя</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[1]}</span>
                        </div>

                        <div className="info__item">
                            <h4 className="info__header">Отчество</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[2]}</span>
                        </div>
                    </div>
                </div>

                {/* {props.selectedUser?.uuid} */}

                <div className="modal__employee-data">
                    <div className="modal__employee-title">ООО Пятерочка</div>
                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Магазин на Кромском</h4>
                            <span className="info__text">Продавец-кассир</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Руководитель:</h4>
                            <span className="info__text">Кабаргин А.В.</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Дата приема:</h4>
                            <span className="info__text">21.02.2016</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Дата увольнения:</h4>
                            <span className="info__text">--.--.----</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Уволен ?</h4>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>

                <div className="modal__employee-contacts">
                    <div className="modal__employee-title">Контактные данные</div>
                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Номер телефона:</h4>
                            <span className="info__text">+7(900)4565533</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Электронная почта:</h4>
                            <span className="info__text">still_selling@yahoo.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeEdit;
