// React
import React, { useState } from 'react';


const PostForm = props => {
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
      <button type='submit'>Add a new user (POST)</button>
    </form>
  );
};


export default PostForm;