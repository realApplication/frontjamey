import './App.css';
import Supervisor from './fav/Supervisor';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainWalls from './fav/MainWalls';
import Main2 from './fav/main22.js';

import Header from './fav/header';
function App() {
  return (
    <>

      <Router>
    <Header/>
        <Switch>

          <Route path="/super" >
          <Supervisor/>
        </Route>
          <Route path="/main-walls">
              <MainWalls/>
            </Route>
            <Route path="/main-walls2">
              <Main2/>
            </Route>
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
