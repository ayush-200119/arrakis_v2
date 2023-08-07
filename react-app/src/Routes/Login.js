

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'D:/arrakis_v2/react-app/src/styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'yourUsername' && password === 'yourPassword') {
      // Successful login logic
      setError('');
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
   
    <div className="login">
      
      <h2 color='black'>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <Link to="D:/arrakis_v2/react-app/src/Routes/User/UserLanding.js">
            <button>Login</button>
       </Link>
      {error && <p className="error">{error}</p>}
      </div>
      
  );
};

export default Login;
