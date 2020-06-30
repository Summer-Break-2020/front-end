import { combineReducers } from 'redux';
// Reducers
import { usersReducer } from './usersReducer';


export const rootReducer = combineReducers({
  usersReducer,
});