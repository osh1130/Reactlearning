import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App9';
import {store} from './store';
import Router from './router/index.jsx';

ReactDOM.render(
    /*
    <Provider store={store}>
        <App />
    </Provider>
    */
    /*
    <App />
    */
    <Router/>,
    document.getElementById('root')
);