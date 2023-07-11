import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here with the username and password
    // For demonstration purposes, simply logging the values
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the input fields
    setUsername('');
    setPassword('');
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <div className='pp'>
    <div className="login-container">
      <div className="login-box">
          <h2> User Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          </form>
          {!showRegister && (
          <p className="register-prompt">
            Don't have an account?
            {' '}
            <br></br>
             <button onClick={handleRegisterClick}>Register</button> 
          </p>
         )}
          {showRegister && (
          <div className="register-area">
        </div>
        )}
        </div>
      </div>
      </div>
  );
};

export default LoginPage;