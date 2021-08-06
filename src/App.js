import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import React from 'react';


import Home from './components/Home/Home.jsx';
import TravelCard from './components/TravelCard/TravelCard';
import Navbar from './components/Navbar/Navbar';
import UserProfil from './components/UserProfil/UserProfil.jsx';

import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/travel">
            <TravelCard />
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
