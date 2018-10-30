import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {createLogger} from 'redux-logger';
import {searchSuccess} from './actions/search';

import App from './components/App';

const store = createStore(reducer, applyMiddleware(createLogger()));

const results = [
  {
    full: 'https://media1.giphy.com/media/g5KhmX06Q0XBu/200_s.gif',
    thumbnail: 'https://media1.giphy.com/media/g5KhmX06Q0XBu/100_s.gif'
  }, {
    full: 'https://media0.giphy.com/media/uw3fTCTNMbXAk/200_s.gif',
    thumbnail: 'https://media0.giphy.com/media/uw3fTCTNMbXAk/100_s.gif'
  }
];

window.setTimeout(() => {
  store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('App'));