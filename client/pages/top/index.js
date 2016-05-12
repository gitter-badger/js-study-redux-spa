import React, {Component} from 'react';

import { connect } from 'react-redux';

@connect(state => {
  return {
    location: state.router.location
  }
})export default class Top extends Component {
  
  render() {
    return <div>Top</div>;
  }
}

