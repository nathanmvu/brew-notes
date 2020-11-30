import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(props) {
  let { loggedIn } = props;

  function logout(event) {
    event.preventDefault();
    axios.post('/api/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        loggedIn = false;
        window.location.reload()
      }
    }).catch(error => {
      console.log(error);
      console.log('Logout error')
    })
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <h1>
        <Link to = {'/home'} id='nameBadge' className="navbar-brand ml-5 text-light">
          BrewNotes☕
        </Link>
      </h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {loggedIn ? <>
            <li className="nav-item">
              <Link to = {'/guides'} className="nav-link">
                Guides
              </Link>
            </li>
            <li className="nav-item">
              <Link to = {'/notes'} className="nav-link">
                Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link to = {'/favorites'} className="nav-link" >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link to = {'/login'} className="nav-link" onClick={logout}>
                Sign Out
              </Link>
            </li>
          </> : <li className="nav-item">
              <Link to = {'/login'} className="nav-link">
                Log in
              </Link>
            </li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;