import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <h1>main</h1>
        <Link to='login'>Login</Link>
      </div>
    );
  }
}
