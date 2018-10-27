import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Reducer from './reducers';

const defaultState = {
    data: []
};

const storeWM = applyMiddleware(promiseMiddleware())(createStore)(Reducer, defaultState);

render(
    <Provider store={storeWM}>
        <BrowserRouter>
            <Switch>
                <Route path="/Search/:date1/:date2" component={Main} />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
