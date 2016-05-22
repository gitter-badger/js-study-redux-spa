import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import * as TodoAction from 'actionCreator/todo';

@connect(
  state => state.todo,
  dispatch => bindActionCreators(TodoAction, dispatch)
)
export default class Todo extends Component {
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  onClick(e) {
    e.preventDefault();
    
    const text = this.refs.todo.value;
    
    if (!text) return;
    
    this.props.addTodo(text);
  }
  
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <label>New Todo</label>
        <input type="text" ref="todo" />
        <button onClick={(e) => this.onClick(e)}>Add</button>
        
        <h2>Todo</h2>
        <ul>
          { this.props.todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}
