import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <h1>main</h1>
        <Link to='/login'>Login</Link>
        <Link to='/top'>Login</Link>
      </div>
    );
  }
}
