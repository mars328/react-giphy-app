import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import searchReducer from './search';

export default combineReducers({router: routerReducer, search: searchReducer});