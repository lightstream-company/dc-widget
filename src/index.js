import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import createConnection from 'tweetping-connect';
import './index.css';

const {load} = createConnection('f2e596ea');

load('wall/', (posts) => {
  console.log(posts);
});

const store = {};


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
