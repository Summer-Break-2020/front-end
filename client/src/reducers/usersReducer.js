// Import the destructured action command names to avoid typos
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions';

const initialState = {
  users: [],
  error: "",
  isFetching: false
};


export function usersReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  };
};