import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="top" component={Top}/>
    </Route>,
  document.getElementById('main')
);
