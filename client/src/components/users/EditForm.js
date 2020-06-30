// React
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// Axios
import axios from 'axios';
// Actions
import { getUsers, editUser } from '../../actions';


const EditForm = props => {
  let { id } = useParams();

  const [newUser, setNewUser] = useState({
    first_name: '',
    id: Date.now()
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addUser(newUser);
    setNewUser({ first_name: '' });
  };

  const handleChanges = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='first_name'
        placeholder='Name'
        onChange={handleChanges}
        value={newUser.first_name}
      />
      <button type='submit'>Submit changes</button>
    </form>
  );
};


export default EditForm;