import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {createLogger} from 'redux-logger';
import {searchSuccess} from './actions/search';
import {Router, Route} from 'react-router'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './components/App/App';
const history = createHistory();

const store = createStore(reducer, applyMiddleware(routerMiddleware(history), createLogger()));

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <App></App>
  </ConnectedRouter>
</Provider>, document.getElementById('App'));