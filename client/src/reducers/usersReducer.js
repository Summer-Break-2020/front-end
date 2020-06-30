// Import the destructured action command names to avoid typos
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  EDIT_USER,
  DELETE_USER
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
    case ADD_USER_START:
      return {
        ...state,
        isFetching: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        isFetching: false
      }
    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case EDIT_USER:
      const uneditedUsers = state.users.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        users: [...uneditedUsers, action.payload.editedUser]
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(item => item.id !== action.payload),
        error: "",
        isFetching: false
      }
    default:
      return state;
  };
};