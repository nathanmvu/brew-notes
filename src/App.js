import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';
import Home from './pages/Home/Home';
import Guides from './pages/Guides';
import Notes from './pages/Notes/Notes';

function App() {
  const [userID, setUserID] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function getUser() {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setUserID(response.data.user._id);
        console.log('user ID', response.data.user._id);
        setLoggedIn(true);
      } else {
        console.log('Get user: no user');
        setUserID(null);
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
        <Route exact path='/notes' component={Notes} userID={userID} />
        <Route exact path='/favorites' render={() => (
          <Notes favoritesPage={true} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
