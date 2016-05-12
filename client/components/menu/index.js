import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class Menu extends Component {
  
  render() {
    return (
      <div>
        <h2>menu</h2>
        <Link to='/login'>Login</Link>
        <Link to='/top'>top</Link>
      </div>
    );
  }
}
