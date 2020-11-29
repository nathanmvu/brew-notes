import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
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
      axios.post('/api/signup', { user })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='container'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <h2 className='is-size-3 has-text-centered'>Sign up</h2>
          <h4>Email address</h4>
          <div className='field'>
            <div className='control'>
              <input className="input" type="email" placeholder="Enter email address" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <h4>Password</h4>
          <div className='field'>
            <div className='control'>
              <input className="input" type="password" placeholder="Enter password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <button className="button is-link signUpButton" onClick={handleClick}>Sign Up</button>
          <br />
          <p>Or log in <a href='/login'>here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;