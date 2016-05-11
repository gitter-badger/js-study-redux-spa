import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';

import store from 'stores';

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="top" component={Top}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
