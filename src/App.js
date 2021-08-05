import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home.jsx';

import './App.css';

import UserProfil from './components/UserProfil/UserProfil.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/user-profil/:Id" >
            <UserProfil />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
