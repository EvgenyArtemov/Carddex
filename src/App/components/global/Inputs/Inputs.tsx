import React, { useState, useRef, useEffect, memo } from 'react';
import { CalendarIcon } from 'App/../assets/images/calendar-icon';
import { Show } from 'App/../assets/images/bx-show';
import { Hide } from 'App/../assets/images/bx-hide';
import { User } from 'App/../assets/images/bx-user';
import { Key } from 'App/../assets/images/bx-key';
import { InputsType } from './inputsType';
import './Inputs.scss';

const InputsInner = (props: InputsType) => {
    const [inputType, setInputType] = useState(props.type);
    const [inputTypeDate, setInputTypeDate] = useState('text');
    const inputWrapper = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        props.onInputChange(e);
    };

    const changeTypePassword = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else if (inputType === 'text') {
            setInputType('password');
        }
    };

    const changeTypeDateOnEnter = () => {
        setInputTypeDate('date');
    };

    const changeTypeDateOnLeave = () => {
        setInputTypeDate('text');
    };

    const formattedDate = (inputFormat: string) => {
        function pad(s: any) {
            return s < 10 ? '0' + s : s;
        }
        const d = new Date(inputFormat);

        console.log(inputFormat.length < 1);

        if (inputFormat.length < 1) {
            return '';
        } else {
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
        }
    };

    const isReadOnly = () => {
        if (inputType === 'date') {
            if (inputTypeDate === 'text') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    useEffect(() => {
        if (props.validation && props.value) {
            if (input.current?.checkValidity()) {
                inputWrapper.current?.classList.remove('custom-input__wrapper--invalid');
                inputWrapper.current?.classList.add('custom-input__wrapper--valid');
                if (props.validationWarning) props.validationWarning!('');
            } else {
                inputWrapper.current?.classList.remove('custom-input__wrapper--valid');
                inputWrapper.current?.classList.add('custom-input__wrapper--invalid');
                if (props.validationWarning) props.validationWarning!(props.validationTitle!);
            }
        }
    }, [props.value, props.validation, props.validationWarning, props.validationTitle]);

    return (
        <div
            className={`
                custom-input 
                ${props.className ? `${props.className}` : ''} 
                ${props.error ? 'custom-input--error' : ''} 
                ${props.disabled ? 'custom-input--disabled' : ''}
                `}>
            <div className="custom-input__label">
                <label className="custom-input__label-title">
                    <div className="p--sm--bold">{props.label}</div>
                </label>

                <div className="custom-input__label-required">
                    {props.required && <div className="p--sm--normal">*</div>}
                </div>
            </div>

            <div
                ref={inputWrapper}
                className="custom-input__wrapper"
                tabIndex={-1}
                onMouseEnter={changeTypeDateOnEnter}
                onMouseLeave={changeTypeDateOnLeave}>
                {props.icon && (
                    <div className="custom-input__icon">
                        {props.name === 'login' && <User />}
                        {props.name === 'password' && <Key />}
                    </div>
                )}
                <div className="custom-input__input-wrapper">
                    {props.list ? (
                        <select
                            name={props.name}
                            value={props.value}
                            className="custom-input__select p--md--normal"
                            onChange={handleChange}
                            disabled={props.disabled}>
                            {props.list?.map((index) => {
                                return (
                                    <option value={`${index}`} key={index}>
                                        {index}
                                    </option>
                                );
                            })}
                        </select>
                    ) : (
                        <input
                            ref={input}
                            onChange={handleChange}
                            name={props.name}
                            className="custom-input__input p--md--normal"
                            type={inputType === 'date' ? inputTypeDate : inputType}
                            value={inputType === 'date' ? formattedDate(props.value) : props.value}
                            title={props.validationTitle}
                            required={props.required}
                            disabled={props.disabled}
                            min={props.min}
                            max={props.max}
                            pattern={props.validation}
                            autoFocus={props.autoFocus}
                            autoComplete="none"
                            readOnly={isReadOnly()}
                        />
                    )}
                </div>

                {props.name === 'password' ? (
                    <div
                        className="custom-input__specific-action custom-input__specific-action--show-hide"
                        onClick={changeTypePassword}>
                        {inputType === 'password' ? <Show /> : <Hide />}
                    </div>
                ) : null}

                {props.type === 'date' ? (
                    <div className="custom-input__specific-action custom-input__specific-action--date">
                        <CalendarIcon />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export const Inputs = memo(InputsInner);
