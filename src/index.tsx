import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App/App';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'focus-visible/dist/focus-visible.js';
import './index.scss';

const root = document.getElementById('root');

const Index = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(Index, root);
