// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getUsers, addUser, deleteUser } from '../actions';
// Component
import PostForm from './users/PostForm';


const Home = props => {
  console.log("Props in Home.js", props);

  const handleDelete = id => {
    props.deleteUser(id);
  }

  
  return (
    <div>
      This is the Home Page!<br /><br />
      <PostForm addUser={props.addUser} />
      <button onClick={props.getUsers}>Fetch Users (GET)</button>
      {props.users && !props.isFetching && props.users.map(users => (
        <div key={users.id}>
          <p>{users.first_name}</p>
          <button>Edit (PUT)</button>
          <button onClick={() => handleDelete(users.id)}>Delete (DELETE)</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  error: state.usersReducer.error,
  isFetching: state.usersReducer.isFetching
});


export default connect (
  mapStateToProps,
  { getUsers, addUser, deleteUser }
)(Home);