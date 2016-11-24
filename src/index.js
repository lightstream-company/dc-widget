import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createConnection from 'tweetping-connect';

import reducers from './reducers';
import { wallLoaded, postReceived } from './actions';

import './index.css';

const {load, connect} = createConnection('f2e596ea');
const store = createStore(reducers);

load('wall/', {
  query: {
    size: 10
  }
}).then(posts => store.dispatch(wallLoaded(posts)));

connect('wall', post => store.dispatch(postReceived(post)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
