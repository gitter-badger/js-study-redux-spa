import { combineReducers } from 'redux';

import { ACTION_LOGGED_IN } from 'actionCreator/login';

function user(state = '', action) {
  switch (action.type) {
    case ACTION_LOGGED_IN:
      return action.username;
  }
  
  return state;
}

export default combineReducers({ user });
