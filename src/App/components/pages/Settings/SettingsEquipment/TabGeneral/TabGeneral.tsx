import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Checkbox } from 'primereact/checkbox';
import './TabGeneral.scss';

const TabGeneralInner = () => {
    const [equipmentsList] = useState([
        'Контроллер 1',
        'Контроллер 2',
        'Контроллер 3'
    ]);
    const [modulsList] = useState(['Модуль 1', 'Модуль 2', 'Модуль 3']);
    const [controlModulesList] = useState(['Модуль 1', 'Модуль 2', 'Модуль 3']);
    const [deviceGroupList] = useState(['Группа 1', 'Группа 2', 'Группа 3']);

    const initialState = {
        equipmentsName: '',
        equipmentsPort: '',
        equipmentsPortType: '',
        equipmentsSpeed: '',
        controllerSelection: '',
        identificationModule: '',
        controlModules: '',
        deviceGroup: '',
        useForTimeTracker: false
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="sidebar-tab sidebar-tab--setup-equip-general">
            <div className="sidebar-tab__group">
                <Inputs
                    name="equipmentsName"
                    label="Имя устройства"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.equipmentsName}
                />
                <Inputs
                    name="equipmentsPort"
                    label="Порт"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.equipmentsPort}
                />
                <Inputs
                    name="equipmentsPortType"
                    label="Тип"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.equipmentsPortType}
                />
                <Inputs
                    name="equipmentsSpeed"
                    label="Скорость"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.equipmentsSpeed}
                />
                <Inputs
                    name="controllerSelection"
                    label="Выбор контроллера"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.controllerSelection}
                    list={equipmentsList}
                />
                <Inputs
                    name="identificationModule"
                    label="Выбор модуля идентификации"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.identificationModule}
                    list={modulsList}
                />
                <Inputs
                    name="controlModules"
                    label="Модули контроля"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.controlModules}
                    list={controlModulesList}
                />
                <Inputs
                    name="deviceGroup"
                    label="Группа устройств"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.deviceGroup}
                    list={deviceGroupList}
                />

                <div className="custom-checkbox">
                    <Checkbox
                        name="useForTimeTracker"
                        inputId="checkbox_save-user"
                        value={inputsState.useForTimeTracker}
                        onChange={() =>
                            setInputsState({
                                ...inputsState,
                                useForTimeTracker: !inputsState.useForTimeTracker
                            })
                        }
                        checked={inputsState.useForTimeTracker}
                    />
                    <label
                        htmlFor="checkbox_save-user"
                        className="p--md--normal">
                        Использовать устройство для учета рабочего времени
                    </label>
                </div>
            </div>
        </div>
    );
};

export const TabGeneral = memo(TabGeneralInner);
