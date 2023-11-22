import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (username === 'demo' && password === 'password') {
      const userData = {
        username: 'demo',
      };
      handleLogin(userData);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form"
        onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
