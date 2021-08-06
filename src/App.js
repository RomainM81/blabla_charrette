import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';


import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import TravelCard from './components/TravelCard/TravelCard';
import Trajet from './components/Trajet/Trajet';
import Navbar from './components/Navbar/Navbar';
import SearchResult from "./components/SearchResult/SearchResult";
import Trajet from "./components/Trajet/Trajet";
import TravelCard from './components/TravelCard/TravelCard';
import UserProfil from './components/UserProfil/UserProfil';
import Faq from './components/Faq/Faq';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/post_trajet" component={Trajet} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/travel/:id/:date/:nombre/:iduser">
            <TravelCard />
          </Route>
          <Route path="/post-trajet" component={Trajet} />
          <Route path="/user-profil/:Id" >
            <UserProfil />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/search-result" component={SearchResult} />
          <Route path="/faq">
            <Faq />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
