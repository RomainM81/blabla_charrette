import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import UserProfil from './components/UserProfil/UserProfil.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user-profil/:Id" />
        <UserProfil />
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
