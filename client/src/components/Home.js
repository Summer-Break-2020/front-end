// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getUsers } from '../actions';


const Home = props => {
  console.log("Props in Home.js", props);

  return (
    <div>
      This is the Home Page!<br />
      <button onClick={props.getUsers}>Fetch Users (GET)</button>
      {props.users && !props.isFetching && props.users.map(users => (
        <div key={users.id}>
          <p>{users.first_name}</p>
          <button>Edit (PUT)</button>
          <button>Delete (DELETE)</button>
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
  { getUsers }
)(Home);