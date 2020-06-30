// Axios
import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
// GET
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
// POST
export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";


export const getUsers = () => dispatch => {
  // Start the action
  dispatch({ type: FETCH_USERS_START });
  axios.get("https://reqres.in/api/users?page=2")
    .then(response => {
      // If successful, the data is loaded onto the users array in the state
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.data });
    })
    .catch(error => {
      console.log(error);
      // If failed, the error is loaded onto the error string in the state
      dispatch({ type: FETCH_USERS_FAILURE, payload: error });
    });
};

export const addUser = newUser => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios.post("https://reqres.in/api/users", newUser)
    .then(response => {
      console.log("POST REQUEST: ", response);
      dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ADD_USER_FAILURE, payload: error });
    });
};