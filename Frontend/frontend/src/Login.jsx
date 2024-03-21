import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    if (email === 'admin@gmail.com' && password === 'adminonly123') {
      navigate('/dashboard');
    } 
    else if (email === 'user@gmail.com' && password === 'useronly123') {
      navigate('/userdashboard');
    }
    else {
      alert('Incorrect Password!');
    }
  };

  return (
    <div className='body'>
      <div className='main-container'>
        <h1 className='main-text'>WELCOME TO THE LIBRARY!</h1>
        <div className='inputs'>
          <label htmlFor="email" className="label">Email</label>
          <input
            placeholder='Email'
            type="text"
            name="email"
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="label">Password</label>
          <input
            placeholder='Password'
            type="password"
            name="password"
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='buttons'>
            <button
              className='border border-gray-300 bg-white px-10 py-3 rounded-md w-6/12 hover'
              onClick={handleLogin}
            >
              Log In
            </button>
            <button className='text-white'>Forgot Password?</button>
          </div>
        </div>
      </div>
      <div className='right'>
      h1
      </div>
    </div>
  );
};

export default Login;