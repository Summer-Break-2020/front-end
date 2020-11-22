// React
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Registration = () => {

  const [user, setUser] = useState({
    password:'',
    email:'',
    f_name:'',
    l_name:'',
    location:''
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

        <label id = 'email'>Email</label>
        <input 
        type = 'text'
        name = 'email'
        label = 'email'
        value = { user.email }
        onChange = { handleChange } />

        <label id = 'f_name'>First Name</label>
        <input 
        type = 'text'
        name = 'f_name'
        label = 'f_name'
        value = { user.f_name }
        onChange = { handleChange } />

        <label id = 'l_name'>Last Name</label>
        <input 
        type = 'text'
        name = 'l_name'
        label = 'l_name'
        value = { user.l_name }
        onChange = { handleChange } />

        <label id = 'location'>Location</label>
        <input 
        type = 'text'
        name = 'location'
        label = 'location'
        value = { user.location }
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