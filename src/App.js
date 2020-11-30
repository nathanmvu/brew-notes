import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Notes from './pages/Notes/Notes';

function App() {
  const [username, setUsername] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function getUser() {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setUsername(response.data.user.username);
        setLoggedIn(true);
      } else {
        console.log('Get user: no user');
        setUsername(null);
        setLoggedIn(false);
        if (!window.location.href.includes('login')) {
          window.location.href = '/login';
        }
      }
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/guides' component={Guides} />
        <Route exact path='/notes' component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;
