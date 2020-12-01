import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isPasswordInvalid = password.length && password.length < 6;

  function handleClick() {
    if (!isPasswordInvalid) {
      // send a POST to /api/login with email & password as the body
      console.log('signup', email, password);
      const user = {
        email: email,
        password: password
      }
      axios.post('/api/user', user)
        .then(res => {
          console.log(res);
          if(!res.data.message && !res.data.error) {
            console.log('Successfully created!');
            window.location.href = '/login';
          } else {
            if(res.data.message) {
              alert(res.data.message);
            } else {
              alert(res.data.error);
            }
          } 
        })
        .catch(err => {
          console.log(err);
          console.log('Failed to create user');
        });
    } else {
      alert('Password is invalid');
    }
  };

  return (
    <div className='container d-flex justify-content-center'>
      <form>
        <h2>Sign up</h2>
        <br></br>
        <div className='form-group'>
          <h4>Email</h4>
          <input 
            className="input form-control" 
            type="email" 
            placeholder="Enter email address"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='form-group'>
          <h4>Password</h4>
          <input 
            className={`input form-control ${isPasswordInvalid ? 'text-danger' : ''}`} 
            type="password" placeholder="Enter password"
            autoComplete='off'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          {isPasswordInvalid ? 
          <i className='text-danger'>minimum 6 chars</i> 
          : null}
        </div>
        <div className='d-flex justify-content-between'>
          <button type='button' className="btn btn-primary signUpButton" onClick={handleClick}>Sign up</button>
          <p className='mt-2'>or log in <a href='/login'>here</a></p>
        </div>
      </form>
    </div>
  )
}

export default Signup;