import React, { useState, useEffect, useLayoutEffect, useRef, useMemo, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { usePrevious } from 'App/../hooks/usePrevious/usePrevious';
import { LetIn } from 'App/../assets/images/bx-chevron-left';
import { TabbarState } from './tabBarType';
import './TabBar.scss';

const TabBarInner = (props: TabbarState) => {
    const [tabPosition, setTabPosition] = useState(0);
    const prevTabPosition = usePrevious(tabPosition);
    const [marckerLeft, setMarckerLeft] = useState(0);
    const [marckerWidth, setMarckerWidth] = useState(0);
    const [isShownButtons, setIsShownButtons] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [difference, setDifference] = useState(0);
    const tabs = useRef<HTMLDivElement>(null);
    const tabsArr: HTMLButtonElement[] = useMemo(() => [], []);
    const tabTitle = useRef<HTMLDivElement>(null);
    const marcker = useRef<HTMLDivElement>(null);
    const rightButton = useRef<HTMLButtonElement>(null);
    const leftButton = useRef<HTMLButtonElement>(null);
    const buttonBias = useRef(100);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);

    const renderCounter = useRef(0);

    useEffect(() => {
        renderCounter.current += 1;

        if (tabPosition === 0 && renderCounter.current <= 1) {
            setMarckerLeft(tabsArr[tabPosition].offsetLeft);

            setMarckerWidth(tabsArr[tabPosition].offsetWidth);
        } else if (tabPosition > prevTabPosition!) {
            setMarckerWidth(
                prevTabPosition! === 0
                    ? tabsArr[tabPosition].offsetLeft + tabsArr[tabPosition].offsetWidth
                    : tabsArr[tabPosition].offsetLeft +
                          tabsArr[tabPosition].offsetWidth -
                          tabsArr[prevTabPosition!].offsetLeft
            );
        } else if (tabPosition < prevTabPosition!) {
            setMarckerLeft(tabsArr[tabPosition].offsetLeft);

            setMarckerWidth(
                tabsArr[prevTabPosition!].offsetLeft +
                    tabsArr[prevTabPosition!].offsetWidth -
                    tabsArr[tabPosition].offsetLeft
            );
        }
    }, [tabPosition, prevTabPosition, tabsArr]);

    const removeAnim = () => {
        marcker.current?.classList.remove('tabbar-bar__tabs-marcker--animation');
    };

    const tabClick = (id: number) => {
        if (tabPosition !== id) {
            setTabPosition(id);

            marcker.current?.classList.add('tabbar-bar__tabs-marcker--animation');

            document.querySelector(`.tabbar-bar__tabs-${id}`)?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
        }
    };

    const onAnimEnd = () => {
        if (tabPosition < prevTabPosition!) {
            setMarckerWidth(tabsArr[tabPosition!].offsetWidth);
        } else {
            setMarckerLeft(tabsArr[tabPosition].offsetLeft);

            setMarckerWidth(tabsArr[tabPosition].offsetWidth);
        }

        removeAnim();
        setScrollPosition(tabs.current!.scrollLeft);
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
        if (tabs.current?.offsetWidth! < tabs.current?.scrollWidth!) {
            setIsShownButtons(true);
        } else {
            setIsShownButtons(false);
        }

        setDifference(tabs.current!.scrollWidth - tabs.current!.clientWidth);

        setScrollPosition(tabs.current!.scrollLeft);
    }, [windowSize, props.trigger, isShownButtons, tabPosition]);

    return (
        <div className="tabbar">
            <div className="tabbar__bar tabbar-bar">
                {isShownButtons && (
                    <button
                        ref={leftButton}
                        type="button"
                        className={`tabbar-bar__lef-button ${scrollPosition <= 0 && 'tabbar-bar__lef-button--disable'}`}
                        onClick={leftButtonClick}>
                        <LetIn />
                    </button>
                )}

                <div ref={tabs} className="tabbar-bar__tabs" onWheel={onWheel}>
                    {React.Children.map(props.children, (elem) => {
                        return (
                            <button
                                key={elem.props.index}
                                ref={(e: HTMLButtonElement) => {
                                    tabsArr[elem.props.index] = e;
                                }}
                                className={`tabbar-bar__tabs-item tabbar-bar__tabs-${elem.props.index}`}
                                type="button"
                                onClick={() => tabClick(elem.props.index)}>
                                <div ref={tabTitle} className="p--md--normal">
                                    {elem.props.header}
                                </div>
                            </button>
                        );
                    })}

                    <div
                        ref={marcker}
                        style={{
                            left: `${marckerLeft}px`,
                            width: `${marckerWidth}px`
                        }}
                        className="tabbar-bar__tabs-marcker"
                        onAnimationEnd={onAnimEnd}
                    />
                </div>

                {isShownButtons! && (
                    <button
                        ref={rightButton}
                        type="button"
                        className={`tabbar-bar__right-button ${
                            scrollPosition === difference && 'tabbar-bar__right-button--disable'
                        }`}
                        onClick={rightButtonClick}>
                        <LetIn />
                    </button>
                )}
            </div>

            <div className="tabbar__content">
                {Array.isArray(props.children) ? props.children[tabPosition] : props.children}
            </div>
        </div>
    );
};

export const TabBar = memo(TabBarInner);
