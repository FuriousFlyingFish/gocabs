// src/components/Login.jsx

import React from 'react';
import '../index.css'; // Adjust the path if needed

const Login = () => {
  return (
    <div className="container">
      <div className="sign-in-box">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Login</button>
        </form>
        <div className="login-link">
          <p>New to Gocabs? <a href="/signin">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
