import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';

import './style.css';

function Login() {
  return <div id="login-page">
      <h1>Login</h1>
      <form>
          <Input name="user" label="User" />
          <Input name="password" label="password" type="password" />
          <button type="submit">Login</button>
      </form>
  </div>;
}

export default Login;
