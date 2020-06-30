// React
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Registration = () => {

  const [user, setUser] = useState({
    username: '',
    password:'',
    // email:''
  })

  const { push } = useHistory();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('api/register')
    .then(res => {
      push('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      This is the Registration Page!

      <form onSubmit = { register }>
        {/* <label id = 'username'>Username</label>
        <input 
        type = 'text'
        name = 'username'
        label = 'username'
        value = { user.username }
        onChange = { handleChange } /> */}

        <label id = 'email'>Email</label>
        <input 
        type = 'text'
        name = 'email'
        label = 'email'
        value = { user.email }
        onChange = { handleChange } />

        <label id = 'password'>Password</label>
        <input 
        type = 'password'
        name = 'password'
        label = 'password'
        value = { user.password }
        onChange = { handleChange } />

        <button>Register</button>
        
      </form>

      <Link to='/login'>Already a registered user</Link>

    </div>
  );
};


export default Registration;