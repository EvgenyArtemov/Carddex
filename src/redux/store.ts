import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) return undefined;

        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);

        return undefined;
    }
};

const persistedState = loadFromLocalStorage();
const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(...middleware), composeEnhancers()));

store.subscribe(() => saveToLocalStorage(store.getState()));

export type State = ReturnType<typeof rootReducer>;

export default store;
