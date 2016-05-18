import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as LoginAction from 'actionCreator/login';
import { bindActionCreators } from 'redux';

import './style.styl';

@connect(
  state => state.common,
  dispatch => bindActionCreators(LoginAction, dispatch)
)
export default class App extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  componentDidMount() {
    this.authorizeUser(this.props.user);
  }

  authorizeUser(user, currentRoute, nextRoute) {
    if (!user) {
      this.context.router.push('/login');
    }
  }
  
  render() {
    return (
      <div id="page">
        { this.props.children }
      </div>
    );
  }
}
