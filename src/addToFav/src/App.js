import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import FavPage from './FavPage';
import Header from './header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [fav, setFav] = useState([]);

  return (
    <>
<Router>
    <Header/>
        <Switch>

          <Route path="/productPage" >
        <Products fav={fav} setFav={setFav} />
             </Route>

          <Route path="/favPage">
        <FavPage fav={fav} setFav={setFav} />
                 </Route>
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
