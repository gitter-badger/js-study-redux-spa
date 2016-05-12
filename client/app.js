import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, hashHistory } from 'react-router';

import App from 'pages/app';
import Top from 'pages/top';
import Login from 'pages/login';

import store from 'store';

class Root extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/top" component={Top}/>
        </Router>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('main'));
