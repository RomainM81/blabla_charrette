import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Trajet from "./components/Trajet/Trajet";
import Navbar from './components/Navbar';
import React from 'react';


import Home from './components/Home/Home.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/post_trajet" component={Trajet} />
          <Route>
          </Route>
          <Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
