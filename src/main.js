import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
//import ImagesList from './components/ImagesList'
import Main from './components/Main';
import reducer from './reducers'

import {watchForLoadImages} from './sagas';

const store = createStore(
    reducer,
    applyMiddleware(createSagaMiddleware(watchForLoadImages))
);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
