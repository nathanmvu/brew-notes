import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/'} component={Home} />
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/notes'} component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;
