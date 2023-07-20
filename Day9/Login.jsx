import React, { useState } from 'react';
import '../assets/Css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login validation
    if (email === 'example@example.com' && password === 'password') {
      setError('');
      console.log('Login successful');
     } //else {
    //   setError('Invalid email or password');
    // }
  };

  return (
    <div className='gg'>
    <div className="login-container21">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label>Email:</label>
          <input
          className='email'
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group2">
          <label>Password:</label>
          <input
            className='password'
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
