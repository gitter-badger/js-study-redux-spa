import { combineReducers } from 'redux';

import { ACTION_LOGGED_IN_SUCCESS } from 'actionCreator/login';

function loggedin(state = false, action) {
  switch (action.type) {
    case ACTION_LOGGED_IN_SUCCESS:
      return true;
  }
  
  return state;
}

export default combineReducers({ loggedin });
