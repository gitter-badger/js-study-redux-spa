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
  
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(this.props.user, this.props.route.path, nextProps.user, nextProps.route.path);
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
    console.log(this.props.user, this.props.route.path, nextProps.user, nextProps.route.path);
    console.log(nextState);
    console.log("==================");
  }
  
  componentDidUpdate(prevProps, prevState) {
    const loggedOut = !this.props.user && prevProps.user;
    
    if (loggedOut) {
      this.context.router.push('/login');
    }
    
    console.log("componentDidUpdate");
    console.log(this.props.user, this.props.route.path, prevProps.user, prevProps.route.path);
    console.log("==================");
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
