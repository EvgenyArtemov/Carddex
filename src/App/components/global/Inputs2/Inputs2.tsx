import React, { useState, useRef, useEffect, memo } from 'react';
import { Show } from 'App/../assets/images/bx-show';
import { Hide } from 'App/../assets/images/bx-hide';
import { User } from 'App/../assets/images/bx-user';
import { Key } from 'App/../assets/images/bx-key';
import { InputsType } from './inputsType2';
import './Inputs2.scss';

const InputsInner = (props: InputsType) => {
    const [inputType, setInputType] = useState(props.type);
    const inputWrapper = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e);
    };

    const changeType = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else if (inputType === 'text') {
            setInputType('password');
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
            className={`custom-input${props.className ? ` ${props.className}` : ''}${
                props.error ? ' custom-input--error' : ''
            }`}
        >
            <div className="custom-input__label">
                <label className="custom-input__label-title">
                    <div className="p--sm--bold">{props.label}</div>
                </label>

                <div className="custom-input__label-required">
                    {props.required && <div className="p--sm--normal">*</div>}
                </div>
            </div>

            <div ref={inputWrapper} className="custom-input__wrapper" tabIndex={-1}>
                {props.icon && (
                    <div className="custom-input__icon">
                        {props.name === 'login' && <User />}
                        {props.name === 'password' && <Key />}
                    </div>
                )}
                <div className="custom-input__input-wrapper">
                    <input
                        ref={input}
                        type={inputType}
                        value={props.value}
                        name={props.name}
                        required={props.required}
                        onChange={handleChange}
                        className="custom-input__input p--md--normal"
                        pattern={props.validation}
                        title={props.validationTitle}
                        autoFocus={props.autoFocus}
                        autoComplete="none"
                    />
                </div>

                {props.name === 'password' ? (
                    <div className="custom-input__show-hide" onClick={changeType}>
                        {inputType === 'password' ? <Show /> : <Hide />}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export const Inputs2 = memo(InputsInner);
