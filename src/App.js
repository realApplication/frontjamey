import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import "./assets/scss/"
// import "assets/scss/material-kit-react.scss?v=1.10.0";
import "./assets/scss/material-kit-react.scss"
// pages for this product
import Components from "./views/Components/Components";
import LoginPage from "./views/LoginPage/LoginPage.js";
import AboutUs from "./views/AboutUs/AboutUs"
import SignupPage from "./views/SignupPage/SignupPage"
import LoginProvider from './views/context';
import Supervisour from './views/Supervisour/Supervisour'
var hist = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={hist}>
        <Switch>
        {/* <Route path="/" exact component={Components} />  */}
        <LoginProvider>
          <Route path="/login-page" component={LoginPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/supervisour" component={Supervisour} />    
          <Route path="/about-us" component={AboutUs} />     
          <Route path="/main" component={Components} />
        
          </LoginProvider>
    
        </Switch>
      </Router>
    </>
  );
}

export default App;
