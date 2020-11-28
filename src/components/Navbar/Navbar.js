import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <h1>
        <a id='nameBadge' class="navbar-brand ml-5" href={(process.env.PUBLIC_URL || '/') + '/'}>BrewNotes☕</a>
      </h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to = {(process.env.PUBLIC_URL || '/') + '/'}>
              <a class="nav-link" href='/'>Guides</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to = {(process.env.PUBLIC_URL || '/') + '/notes'}>
              <a class="nav-link" href='/'>Notes</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to = {(process.env.PUBLIC_URL || '/') + '/contact'}>
              <a class="nav-link" href='/'>Sign Out</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;