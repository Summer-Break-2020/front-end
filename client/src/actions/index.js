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
// PUT
export const EDIT_USER = "EDIT_USER";
// DELETE
export const DELETE_USER = "DELETE_USER";


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

export const editUser = (id, editedUser) => dispatch => {
  console.log("EDITED USER OBJECT: ", editedUser);
  dispatch({ type: EDIT_USER, payload: {id, editedUser} });
  axios.put(`https://reqres.in/api/users/${id}`, editedUser)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER, payload: id });
  axios.delete(`https://reqres.in/api/users/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}