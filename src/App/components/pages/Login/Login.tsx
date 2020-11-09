import React, { useRef, useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useTitle } from 'react-use';
import { useDispatch } from 'react-redux';
/* UI */
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Checkbox } from 'primereact/checkbox';
import { appHideProgressBar, appShowProgressBar } from 'redux/App/appActions';
import rightImage from 'App/../assets/images/group.png';
import { Logo } from 'App/../assets/images/logo';
import { Attention } from 'App/../assets/images/bx-attention';
import './Login.scss';
import config from 'App/../config/config.json';

const LoginInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [authorization, setAuthorization] = useState(false);
    const [isSaveUser, setIsSaveUser] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [progress, setProgress] = useState(false);
    // const [warning, setWarning] = useState('');
    const [error, setError] = useState('');
    const leftPart = useRef<HTMLDivElement>(null);
    const rightPart = useRef<HTMLDivElement>(null);
    const initialState = {
        login: '',
        password: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    useTitle(`IMS CARDDEX ${config.defaultTitle}`);

    const logining = () => {
        if (isValid) {
            setProgress(true);
            dispatch(appShowProgressBar());

            setTimeout(() => {
                if (
                    inputsState.login === 'admin' &&
                    inputsState.password === 'admin'
                ) {
                    if (isSaveUser) {
                        localStorage.setItem(
                            'user',
                            JSON.stringify({
                                login: inputsState.login,
                                password: inputsState.password
                            })
                        );
                    }

                    setAuthorization(true);
                    leftPart.current?.classList.add('animation');
                    rightPart.current?.classList.add('animation');
                } else {
                    setError('Не верный логин или пароль!');
                }

                setProgress(false);
                dispatch(appHideProgressBar());
            }, 2000);
        }
    };

    useEffect(() => {
        setError('');

        if (inputsState.login && inputsState.password) {
            const validationArr = Array.from(
                document.querySelectorAll('.custom-input__wrapper')
            ).map((e) => {
                return !e.classList.contains('custom-input__wrapper--invalid');
            });

            setIsValid(!validationArr.includes(false));
        }
    }, [inputsState.login, inputsState.password]);

    return (
        <div className="login">
            {/* Left side */}

            <div
                className="login__left login-left"
                ref={leftPart}
                onAnimationEnd={() => {
                    if (authorization) {
                        history.push('/security-post-central');
                    }
                }}>
                <div className="login-left__content">
                    <div className="login-left__title">
                        <div className="p--lg--bold">Вход в систему</div>
                    </div>

                    <form
                        className="login-left__form"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                logining();
                            }
                        }}>
                        <Inputs
                            name="login"
                            label="Имя пользователя"
                            icon
                            onInputChange={inputHandler}
                            type="text"
                            value={inputsState.login}
                            error={!!error}
                            validation="(?=.*[a-z]).{5,}" // [a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$
                            validationTitle="Логин пользователя должен быть не меньше 5 символов."
                            autoFocus
                        />

                        <Inputs
                            name="password"
                            label="Пароль пользователя"
                            icon
                            onInputChange={inputHandler}
                            type="password"
                            value={inputsState.password}
                            error={!!error}
                            // validation="(*).{0,}" // (?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}
                            // validationTitle="Пароль должен содержать не менее 6 символов, в том числе цифры, прописные и строчные буквы латинского алфавита. Пробелы являются недопустимым символом."
                        />

                        <div className="custom-checkbox">
                            <Checkbox
                                inputId="checkbox_save-user"
                                value="userSave"
                                onChange={() => setIsSaveUser(!isSaveUser)}
                                checked={isSaveUser}
                            />
                            <label
                                htmlFor="checkbox_save-user"
                                className="p--md--normal">
                                Автоматически входить на данном устройстве
                            </label>
                        </div>

                        <Buttons
                            name={!progress ? 'Enter' : 'Loader'}
                            label="Вход"
                            active
                            typical={isValid}
                            disable={!isValid}
                            onPress={(e) => {
                                logining();
                                e.preventDefault();
                            }}
                        />
                    </form>

                    <div className="login-left__message">
                        {/* <div className="login-left__message-warning">
                            <div className="p--md--normal">{warning}</div>
                        </div> */}
                        {error && (
                            <div className="login-left__message-error">
                                <Attention />
                                <div className="p--md--normal">{error}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right side */}

            <div className="login__right login-right" ref={rightPart}>
                <div className="login-right__content">
                    <div className="login-right__header">
                        <div className="login-right__logo">
                            <Logo />
                        </div>

                        <div className="login-right__title">
                            <div className="p--lg--normal">
                                ПАК «Производство»
                            </div>
                        </div>
                    </div>

                    <div className="login-right__body">
                        <img
                            className="login-right__image"
                            src={rightImage}
                            alt="Bilbords"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Login = memo(LoginInner);
