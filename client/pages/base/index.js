import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as LoginAction from 'actionCreator/login';

import './style.styl';

@connect(
  state => state.common,
  dispatch => bindActionCreators(LoginAction, dispatch)
)
export default class Base extends Component {
  
  logout() {
    this.props.logout();
  }
  
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <h2>MENU</h2>
          <nav>
            <li><Link to='/top'>Top</Link></li>
            <li><Link to='/todo'>Todo</Link></li>
          </nav>
          <nav className="logout">
            <li onClick={() => this.logout()}>>> Logout</li>
          </nav>
        </div>
        
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}