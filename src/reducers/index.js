import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todo from './todo';

export default combineReducers({
  todo,
  routing: routerReducer,
});
