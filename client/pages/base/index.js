import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.styl';

export default class Base extends Component {
  
  render() {
    return (
      <div id="page">
        <div  className="sidebar">
          <h2>MENU</h2>
          <nav>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/top'>Top</Link></li>
          </nav>
        </div>
        
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}