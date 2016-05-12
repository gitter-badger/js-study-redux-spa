import {createStore, combineReducers} from 'redux';
import { routerStateReducer } from 'redux-router';

import login from './login';

const reducer = combineReducers({login, router: routerStateReducer });

export default reducer;