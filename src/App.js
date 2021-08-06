import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from 'react';

import Home from './components/Home/Home';
import TravelCard from './components/TravelCard/TravelCard';
//import Trajet from './components/Trajet/Trajet';
import Navbar from './components/Navbar/Navbar';
import UserProfil from './components/UserProfil/UserProfil';
import Faq from './components/Faq/Faq';

import './App.css';
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/travel">
            <TravelCard />
          </Route>
          {/* <Route path="/post-trajet" component={Trajet} /> */}
          <Route path="/user-profil/:Id" >
            <UserProfil />
          </Route>
          <Route path="/search-result" component={SearchResult} />
          <Route path="/faq">
            <Faq />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
