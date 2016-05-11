import React, {Component} from 'react';

import { connect } from 'react-redux';

@connect(
  state => state
)
export default class Top extends Component {
  
  render() {
    return <div>Top</div>;
  }
}

