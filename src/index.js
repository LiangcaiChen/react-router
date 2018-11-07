import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers/Reducers';
import Promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

const Store = () => {
    return (
        <Provider store={createStoreWithMiddleware(Reducers)}>
            <AppRouter />
        </Provider>
    );
};

ReactDOM.render(<Store />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
