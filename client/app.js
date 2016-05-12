import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';

import reducer from 'reducers';

const routes = (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
    <Route path="top" component={Top}/>
  </Route>
);

const store = reduxReactRouter({routes, createHistory})(createStore)(reducer);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('main'));
