import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import login from './login';
import common from './common';

const reducer = combineReducers({
  login,
  common
});

export default createStore(reducer, {}, applyMiddleware(thunkMiddleware, createLogger()));
