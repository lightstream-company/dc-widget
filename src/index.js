import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import createConnection from 'tweetping-connect';
import getStreamId from './utils/getStreamId';

import reducers from './reducers';
import { wallLoaded, postReceived, windowResized } from './actions';

import './index.css';

const {load, connect} = createConnection(getStreamId());
const store = createStore(combineReducers(reducers));
//store.dispatch(wallLoaded(require('./data.json')));

load('wall/', {
  query: {
    size: 65
  }
}).then(posts => store.dispatch(wallLoaded(posts)));
store.dispatch(windowResized());

window.addEventListener('resize', () =>  {
  store.dispatch(windowResized());
});

connect('wall', post => store.dispatch(postReceived(post)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
