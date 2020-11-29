import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Notes from './pages/Notes/Notes';

function App() {
  return (
    <Router>
      <Navbar />
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
