import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isPasswordValid = password.length && password.length < 6;

  function handleClick() {
    if (isPasswordValid) {
      // send a POST to /api/login with email & password as the body
      console.log('login', email, password);
      const user = {
        email: email,
        password: password
      }
      axios.post('/api/login', { user })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='container'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <h2 className='is-size-3 has-text-centered'>Log in</h2>
          <h4>Email address</h4>
          <div className='field'>
            <div className='control'>
              <input className="input" type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <h4>Password</h4>
          <div className='field'>
            <div className='control'>
              <input className={`input ${isPasswordValid ? 'text-danger' : ''}`} type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {isPasswordValid ? 
              <p>minimum 6 chars</p> 
              : null}
            </div>
          </div>
          <button className="button is-link logInButton" onClick={handleClick}>Log in</button>
          <br />
          <p>Or sign up <a href='/'>here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login;