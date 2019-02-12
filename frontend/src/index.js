import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/index'


const store = createStore(allReducers, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,
    document.getElementById('root'));


serviceWorker.unregister();