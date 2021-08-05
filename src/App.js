import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Trajet from "./components/Trajet/Trajet";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/post_trajet" component={Trajet} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
