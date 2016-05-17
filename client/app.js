import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, hashHistory, Redirect } from 'react-router';

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';
import Base from 'pages/base';

import store from 'store';

import './style.styl';

class Root extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Redirect path="/" to="/login" />
          <Route path="/" component={App}/>

          <Route path="login" component={Login}/>

          <Route component={Base}>
            <Route path="top" component={Top}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('main'));
