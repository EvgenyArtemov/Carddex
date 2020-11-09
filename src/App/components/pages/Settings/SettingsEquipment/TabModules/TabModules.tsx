import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import './TabModules.scss';

const TabModulesInner = () => {
    const [enterFormatList] = useState(['Формат 1', 'Формат 2', 'Формат 3']);
    const [exitFormatList] = useState(['Формат 1', 'Формат 2', 'Формат 3']);

    const initialState = {
        selectAsMainKey: '',
        deleteSelectedKey: '',
        significantPart: '',
        enterFormat: '',
        exitFormat: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="sidebar-tab sidebar-tab--setup-equip-modules">
            <div className="sidebar-tab__group">
                <div className="sidebar-tab__group-title p--md--bold">Мастер-ключи</div>
                <Inputs
                    name="selectAsMainKey"
                    label="Добавить как выбранный"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.selectAsMainKey}
                />
                <Inputs
                    name="deleteSelectedKey"
                    label="Удалить выбранный"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.deleteSelectedKey}
                />
                <div className="sidebar-tab__group-section">
                    <Inputs
                        name="significantPart"
                        label="Значимая часть"
                        onInputChange={inputHandler}
                        type="text"
                        value={inputsState.significantPart}
                    />
                    <Buttons name="Read" label="Считать" typical />
                    <Buttons name="Setup" label="Установить" typical />
                </div>
            </div>
            <div className="sidebar-tab__group">
                <div className="sidebar-tab__group-title p--md--bold">Wiegand</div>
                <Inputs
                    name="enterFormat"
                    label="Входной фоормат"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.enterFormat}
                    list={enterFormatList}
                />
                <Inputs
                    name="exitFormat"
                    label="Выходной формат"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.exitFormat}
                    list={exitFormatList}
                />
            </div>
        </div>
    );
};

export const TabModules = memo(TabModulesInner);
