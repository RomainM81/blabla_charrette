import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route>
          </Route>
          <Route>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
