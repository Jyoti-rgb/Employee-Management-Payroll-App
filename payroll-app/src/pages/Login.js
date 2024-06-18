// src/pages/Login.js

import React from 'react';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Implement login logic here
    onLogin(); // Call onLogin function passed as prop
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
