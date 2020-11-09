import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { appWindowSize } from 'App/../redux/App/appActions';
import ProgressBar from '@atlaskit/progress-bar';
import Routes from '../Routes/Routes';
import { State } from '../redux/store';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    const { progressBarVisible } = useSelector(
        (state: State) => state.app,
        shallowEqual
    );
    const [localStorageCheck] = useState(
        JSON.parse(`${localStorage.getItem('user')}`)
    );
    const { theme } = useSelector((state: State) => state.app, shallowEqual);

    useEffect(() => {
        if (localStorageCheck) {
            console.log('Быстрый вход!');
        }
    }, [localStorageCheck]);

    useLayoutEffect(() => {
        function updateSize() {
            dispatch(
                appWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            );
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            {progressBarVisible && (
                <div className="progressbar">
                    <ProgressBar isIndeterminate />
                </div>
            )}

            <Routes />
        </div>
    );
};

export default App;
