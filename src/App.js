import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home.jsx';
import TravelCard from './components/TravelCard/TravelCard';
//import Trajet from './components/Trajet/Trajet';
import Navbar from './components/Navbar/Navbar';
import UserProfil from './components/UserProfil/UserProfil.jsx';

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/travel">
            <TravelCard />
          </Route>
          {/* <Route path="/post-trajet" component={Trajet} /> */}
          <Route path="/user-profil/:Id" >
            <UserProfil />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
