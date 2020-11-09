import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import './TabPassages.scss';

const TabPassagesInner = () => {
    const [enterState1List] = useState(['Неизвестно', 'Известно']);
    const [enterState2List] = useState(['Неизвестно', 'Известно']);

    const initialState = {
        mode: '',
        enterState1: '',
        enterState2: '',
        timeout: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="sidebar-tab sidebar-tab--setup-equip-passages">
            <div className="sidebar-tab__group">
                <Inputs
                    name="mode"
                    label="Режим"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.mode}
                />
                <Inputs
                    name="enterState1"
                    label="Состояние прохода 1"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.enterState1}
                    list={enterState1List}
                />
                <Inputs
                    name="enterState2"
                    label="Состояние прохода 2"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.enterState2}
                    list={enterState2List}
                />
                <Inputs
                    name="timeout"
                    label="Таймаут прохода * 100мс"
                    onInputChange={inputHandler}
                    type="number"
                    min={0}
                    max={1000}
                    value={inputsState.timeout}
                />
            </div>
        </div>
    );
};

export const TabPassages = memo(TabPassagesInner);
