import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, hashHistory } from 'react-router';

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';
import Menu from 'components/menu';

import store from 'store';

import './style.styl';

class Root extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}/>

          <Route path="/login" component={Login}/>

          <Route path="*" component={Menu}>
            <Route path="/top" component={Top}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('main'));
