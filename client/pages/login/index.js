import React, {Component} from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import * as LoginAction from 'actionCreator/login';
import { bindActionCreators } from 'redux';

@connect(
  state => state.login,
  dispatch => bindActionCreators(LoginAction, dispatch)
)
export default class Login extends Component {
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  onClick(e) {
    e.preventDefault();
    
    const username = this.refs.username;
    
    if (!username) return;
    
    this.props.login();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.info.loggedin) {
      this.context.router.push('/top');
    }
  }
  
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <input type="text" ref="username" />
        <button onClick={(e) => this.onClick(e)}>Login</button>
      </div>
    );
  }
}
