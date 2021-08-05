import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home.jsx';

import './App.css';
import TravelCard from './components/TravelCard';

function App() {
  return (
    <Router>
      <div>
      <TravelCard />
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route>
          </Route>
          <Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
