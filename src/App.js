import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={(process.env.PUBLIC_URL || '/') + '/'} component={About} />
      </Switch>
    </Router>
  );
}

export default App;
