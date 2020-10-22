import React, { useState, useEffect, useLayoutEffect, useRef, memo } from 'react';
import { LetIn } from 'App/../assets/images/bx-chevron-left';
import { TabbarState } from './tabBarType';
import './TabBar.scss';

const TabBarInner = (props: TabbarState) => {
    const [isShownButtons, setIsShownButtons] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sizeWindow, setSizeWindow] = useState(0);
    const [difference, setDifference] = useState(0);
    const tabs = useRef<HTMLDivElement>(null);
    const tab = useRef<HTMLButtonElement>(null);
    const marcker = useRef<HTMLDivElement>(null);
    const rightButton = useRef<HTMLButtonElement>(null);
    const leftButton = useRef<HTMLButtonElement>(null);
    const buttonBias = useRef(200);

    useEffect(() => {
        marcker.current!.setAttribute(
            'style',
            `left:${
                props.tabPosition === 1
                    ? props.tabPosition * 0 + 14
                    : (props.tabPosition - 1) * 150 + 14 * props.tabPosition
            }px;`
        );
    }, [props.tabPosition]);

    const removeAnim = () => {
        marcker.current?.classList.remove('tabbar__tabs-marcker--animation');
    };

    const tabClick = (id: number) => {
        if (props.tabPosition !== id) {
            props.setTab(id);
            marcker.current?.classList.add('tabbar__tabs-marcker--animation');
            document.querySelector(`.tabbar__tabs-${id}`)?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
        }
    };

    const leftButtonClick = () => {
        if (scrollPosition - buttonBias.current > 0) {
            const bias = scrollPosition - buttonBias.current;

            setScrollPosition(bias);

            tabs.current?.scrollTo({
                left: tabs.current!.scrollLeft - bias,
                behavior: 'smooth'
            });
        } else {
            const bias = 0;

            setScrollPosition(bias);

            tabs.current?.scrollTo({
                left: bias,
                behavior: 'smooth'
            });
        }
    };

    const rightButtonClick = () => {
        if (scrollPosition + buttonBias.current < difference) {
            const bias = scrollPosition + buttonBias.current;

            setScrollPosition(bias);

            tabs.current?.scrollTo({
                left: tabs.current!.scrollLeft + bias,
                behavior: 'smooth'
            });
        } else {
            const bias = scrollPosition + (difference - scrollPosition);

            setScrollPosition(bias);

            tabs.current?.scrollTo({
                left: tabs.current!.scrollLeft + bias,
                behavior: 'smooth'
            });
        }
    };

    const onWheel = (e: React.WheelEvent) => {
        // e.preventDefault();

        if (scrollPosition + e.deltaY < difference) {
            if (scrollPosition + e.deltaY <= 0) {
                setScrollPosition(0);
            } else {
                setScrollPosition(scrollPosition + e.deltaY);
            }
        } else {
            setScrollPosition(scrollPosition + (difference - scrollPosition));
        }

        tabs.current?.scrollTo({
            left: tabs.current?.scrollLeft + e.deltaY
        });
    };

    useLayoutEffect(() => {
        function updateSize() {
            setSizeWindow(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useLayoutEffect(() => {
        if (tabs.current?.offsetWidth! < tabs.current?.scrollWidth!) {
            setIsShownButtons(true);
        } else {
            setIsShownButtons(false);
        }

        setDifference(tabs.current!.scrollWidth - tabs.current!.clientWidth);
        setScrollPosition(tabs.current!.scrollLeft);
    }, [sizeWindow, props.trigger]);

    return (
        <div className="tabbar">
            {isShownButtons && (
                <button
                    ref={leftButton}
                    type="button"
                    className={`tabbar__lef-button ${scrollPosition <= 0 && 'tabbar__lef-button--disable'}`}
                    onClick={leftButtonClick}
                >
                    <LetIn />
                </button>
            )}
            <div ref={tabs} className="tabbar__tabs" onWheel={onWheel}>
                {props.tabs.map((elem) => {
                    return (
                        <button
                            key={elem.index}
                            ref={tab}
                            className={`tabbar__tabs-item tabbar__tabs-${elem.index}`}
                            type="button"
                            onClick={() => tabClick(elem.index)}
                        >
                            <div className="p--md--normal">{elem.name}</div>
                        </button>
                    );
                })}
                <div
                    ref={marcker}
                    className="tabbar__tabs-marcker"
                    onAnimationEnd={() => {
                        removeAnim();
                        setScrollPosition(tabs.current!.scrollLeft);
                    }}
                />
            </div>

            {isShownButtons! && (
                <button
                    ref={rightButton}
                    type="button"
                    className={`tabbar__right-button ${
                        scrollPosition === difference && 'tabbar__right-button--disable'
                    }`}
                    onClick={rightButtonClick}
                >
                    <LetIn />
                </button>
            )}
        </div>
    );
};

export const TabBar = memo(TabBarInner);
