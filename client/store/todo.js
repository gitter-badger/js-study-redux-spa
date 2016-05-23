import { combineReducers } from 'redux';

import { ACTION_ADD_TODO } from 'actionCreator/todo';

export function todos(state = [], action) {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return [...state, action.todo];
  }
  
  return state;
}

export default combineReducers({ todos });
