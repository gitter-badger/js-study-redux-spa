import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import login from 'store/login';
import todo from 'store/todo';
import common from 'store/common';

const reducer = combineReducers({
  login,
  common,
  todo
});

export default createStore(reducer, {}, applyMiddleware(thunkMiddleware, createLogger()));
