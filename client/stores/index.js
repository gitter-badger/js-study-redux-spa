import {createStore, combineReducers} from 'redux';
import { routerStateReducer } from 'redux-router';

import login from './login';

const reducer = combineReducers({
  router: routerStateReducer,
  login
});

export default reducer;
