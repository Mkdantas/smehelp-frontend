import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';

import './style.css';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')

  const handleSignin = async (e:any) =>{
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_API}/login`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       user,
       password
      })
    }).then((e:any) => console.log(e))

  }

  return <div id="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSignin}>
          <Input name="user" label="User" onChange={(e:any) => setUser(e.target.value)}/>
          <Input name="password" label="password" type="password" onChange={(e:any) => setPassword(e.target.value)}/>
          <button type="submit">Login</button>
      </form>
  </div>;
}

export default Login;
