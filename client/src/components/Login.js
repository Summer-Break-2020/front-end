// React
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password:'',
    // email:''
  })

  const {push} = useHistory();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('api/login')
    .then(res => {
      console.log(user)
      window.localStorage.setItem('token', res.data.token)
      // push('protected')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      This is the Login Page!

      <form onSubmit = {login}>
        {/* <label id = 'username'>Username</label>
        <input 
        type = 'text'
        name = 'username'
        label = 'username'
        value = {user.username}
        onChange = {handleChange} /> */}

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
        value = {user.password}
        onChange = {handleChange} />

        <button>Log in</button>

      </form>

      <Link to='/registration'>Not a registered user</Link>

    </div>
  );
};


export default Login;