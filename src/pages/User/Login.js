import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isPasswordInvalid = password.length && password.length < 6;

  function handleClick(event) {
    event.preventDefault();
    if (!isPasswordInvalid) {
      // send a POST to /api/login with email & password as the body
      console.log('login', email, password);
      const user = {
        email: email,
        password: password
      }
      axios.post('/api/user/login', user)
        .then(res => {
          console.log(res)
          if(res.data) {
            console.log('successful login');
            window.location.reload();
            window.location.href = '/home';
          }
        })
        .catch(err => {
          alert('Incorrent username or password.')
          console.log(err)
        });
    } else {
      console.log('Password is invalid');
    }
  };

  return (
    <div className='container d-flex justify-content-center'>
      <form>
        <h2>Log in</h2>
        <br></br>
        <div className='form-group'>
          <h4>Email</h4>
          <input className="input form-control" type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <h4>Password</h4>
          <input className={`input form-control ${isPasswordInvalid ? 'text-danger' : ''}`} type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isPasswordInvalid ? 
          <i className='text-danger'>minimum 6 chars</i> 
          : null}
        </div>
        <div className='d-flex justify-content-center'>
          <button type='button' className="btn btn-light signUpButton" onClick={handleClick}>Log in</button>
          <p className='ml-2'>or sign up <a href='/'>here</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login;