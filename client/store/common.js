import { combineReducers } from 'redux';

import { ACTION_LOGGED_IN_SUCCESS, ACTION_LOGOUT_SUCCESS } from 'actionCreator/login';

export function user(state = '', action) {
  switch (action.type) {
    case ACTION_LOGGED_IN_SUCCESS:
      return action.username;
    
    case ACTION_LOGOUT_SUCCESS:
      return '';
  }

  return state;
}

export default combineReducers({ user });
