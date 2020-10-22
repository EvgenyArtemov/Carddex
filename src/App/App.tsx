import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ProgressBar from '@atlaskit/progress-bar';
import Routes from '../Routes/Routes';
import { State } from '../redux/store';
import './App.scss';

const App = () => {
    const { progressBarVisible } = useSelector((state: State) => state.app, shallowEqual);
    const [localStorageCheck] = useState(JSON.parse(`${localStorage.getItem('user')}`));
    const { theme } = useSelector((state: State) => state.app, shallowEqual);

    useEffect(() => {
        if (localStorageCheck) {
            console.log('Быстрый вход!');
        }
    }, [localStorageCheck]);

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
