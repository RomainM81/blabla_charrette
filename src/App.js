import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from 'react';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import SearchResult from "./components/SearchResult/SearchResult";
import Trajet from "./components/Trajet/Trajet";
import TravelCard from './components/TravelCard/TravelCard';
import UserProfil from './components/UserProfil/UserProfil';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/post_trajet" component={Trajet} />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/travel">
            <TravelCard />
          </Route>
          <Route path="/user-profil/:Id" >
            <UserProfil />
          </Route>
          <Route path="/search-result" component={SearchResult} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
