import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as LoginAction from 'actionCreator/login';
import { bindActionCreators } from 'redux';

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
//    this.authorizeUser(nextProps.user, this.props.route.path, nextProps.route.path);
  }
  
  componentDidUpdate() {
    this.authorizeUser(this.props.user);
  }
    
  authorizeUser(user, currentRoute, nextRoute) {
    console.log(user);
    
    if (!user) {
      this.context.router.push('/login');
    }
    /*
    if (!user && currentRoute !== '/login' && nextRoute !== '/login') {
      this.context.router.push('/login');
    }
    */
  }
  
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

// * => Login
// login => /