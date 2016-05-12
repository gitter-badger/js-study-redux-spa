import React, {Component} from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

@connect(state => {
  return {
    location: state.router.location
  }
})
export default class Login extends Component {
  
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Link to='top'>Top</Link>
      </div>
    );
  }
}
