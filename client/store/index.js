import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import login from './login';

const reducer = combineReducers({
  login
});

export default createStore(reducer, {}, applyMiddleware(thunkMiddleware, createLogger()));
