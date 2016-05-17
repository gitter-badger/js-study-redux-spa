import { combineReducers } from 'redux';

import { ACTION_LOGGED_IN } from 'actionCreator/login';

function info(state = {}, action) {
  switch (action.type) {
    case ACTION_LOGGED_IN:
      return Object.assign({}, state, {
        usename: action.username,
        loggedin: true
      });
  }
  
  return state;
}

export default combineReducers({ info });
