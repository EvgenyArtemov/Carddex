import React, { useState } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import './TurnstileSettings.scss';

export const TurnstileSettings = () => {
    const [isLetInOneOn, setIsLetInOneOn] = useState(false);
    const [isLetInManyOn, setIsLetInManyOn] = useState(false);
    const [isLetInLock, setIsLetInLock] = useState(false);
    const [isLetOutOneOn, setIsLetOutOneOn] = useState(false);
    const [isLetOutManyOn, setIsLetOutManyOn] = useState(false);
    const [isLetOutLock, setIsLetOutLock] = useState(false);
    const [firstSliderState, setFirstSliderState] = useState(true);
    const [secondSliderState, setSecondSliderState] = useState(false);
    const [thirdSliderState, setThirdSliderState] = useState(false);

    const activeFirstSlider = () => {
        setFirstSliderState(true);
        setSecondSliderState(false);
        setThirdSliderState(false);
        console.log('Click FIRST');
    };

    const activeSecondSlider = () => {
        setFirstSliderState(false);
        setSecondSliderState(true);
        setThirdSliderState(false);
        console.log('Click SECOND');
    };

    const activeThirdSlider = () => {
        setFirstSliderState(false);
        setSecondSliderState(false);
        setThirdSliderState(true);
        console.log('Click THIRD');
    };

    return (
        <div className="turnstile">
            <div className="turnstile__modes">
                <div className="turnstile__modes-title">
                    <div className="p--md--normal">Режим</div>
                </div>

                <div className="turnstile__modes-slider turnstile-slider">
                    <div
                        className={`
                            turnstile-slider__child
                            ${
                                firstSliderState &&
                                'turnstile-slider__child--active-first'
                            }
                        `}>
                        <button
                            type="button"
                            className="turnstile-slider__child-buttons"
                            onClick={activeFirstSlider}>
                            <div className="turnstile-slider__child-ring" />
                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Свободный</div>
                        </div>
                    </div>

                    <div
                        className={`
                            turnstile-slider__spliter
                            ${
                                firstSliderState &&
                                'turnstile-slider__spliter--active-first'
                            }
                            ${
                                secondSliderState &&
                                'turnstile-slider__spliter--active-second'
                            }
                            first-spliter
                        `}>
                        <div className="turnstile-slider__spliter-element" />
                    </div>

                    <div
                        className={`turnstile-slider__child ${
                            secondSliderState
                                ? 'turnstile-slider__child--active-second'
                                : ''
                        }`}>
                        <button
                            type="button"
                            className="turnstile-slider__child-buttons"
                            onClick={activeSecondSlider}>
                            <div className="turnstile-slider__child-ring" />

                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Контроль</div>
                        </div>
                    </div>

                    <div
                        className={`
                            turnstile-slider__spliter
                            ${
                                secondSliderState &&
                                'turnstile-slider__spliter--active-second'
                            }
                            ${
                                thirdSliderState &&
                                'turnstile-slider__spliter--active-third'
                            }
                            second-spliter
                        `}>
                        <div className="turnstile-slider__spliter-element" />
                    </div>

                    <div
                        className={`turnstile-slider__child ${
                            thirdSliderState
                                ? 'turnstile-slider__child--active-third'
                                : ''
                        }`}>
                        <button
                            type="button"
                            className="turnstile-slider__child-buttons"
                            onClick={activeThirdSlider}>
                            <div className="turnstile-slider__child-ring" />

                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Блокировка</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="turnstile__control">
                <div className="turnstile__control-title">
                    <div className="p--md--normal">Контроль</div>
                </div>

                <div className="turnstile__control-buttons turnstile-control__buttons">
                    <div className="turnstile-control__buttons-grups">
                        <Buttons
                            name="LetInOne"
                            size="m"
                            typical={!isLetInLock}
                            active={isLetInOneOn}
                            disable={isLetInLock}
                            onPress={() => setIsLetInOneOn(!isLetInOneOn)}
                            prompt="Разовый вход"
                        />

                        <Buttons
                            name="LetInMany"
                            size="m"
                            typical={!isLetInLock}
                            active={isLetInManyOn}
                            disable={isLetInLock}
                            onPress={() => setIsLetInManyOn(!isLetInManyOn)}
                            prompt="Многократный вход"
                        />

                        <Buttons
                            name={isLetInLock ? 'BlockLock' : 'BlockUnLock'}
                            size="m"
                            typical
                            active={isLetInLock}
                            danger
                            onPress={() => {
                                setIsLetInOneOn(false);
                                setIsLetInManyOn(false);
                                setIsLetInLock(!isLetInLock);
                            }}
                            prompt="Блокировка входа"
                        />
                    </div>

                    <div className="turnstile-control__buttons-grups">
                        <Buttons
                            name="LetOutOne"
                            size="m"
                            typical={!isLetOutLock}
                            active={isLetOutOneOn}
                            disable={isLetOutLock}
                            onPress={() => setIsLetOutOneOn(!isLetOutOneOn)}
                            prompt="Разовый выход"
                        />

                        <Buttons
                            name="LetOutMany"
                            size="m"
                            typical={!isLetOutLock}
                            active={isLetOutManyOn}
                            disable={isLetOutLock}
                            onPress={() => setIsLetOutManyOn(!isLetOutManyOn)}
                            prompt="Многократный выход"
                        />

                        <Buttons
                            name={isLetOutLock ? 'BlockLock' : 'BlockUnLock'}
                            size="m"
                            typical
                            active={isLetOutLock}
                            danger
                            onPress={() => {
                                setIsLetOutOneOn(false);
                                setIsLetOutManyOn(false);
                                setIsLetOutLock(!isLetOutLock);
                            }}
                            prompt="Блокировка выход"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
