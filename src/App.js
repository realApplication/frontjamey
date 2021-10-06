import React ,{useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import io from 'socket.io-client'
// import "./assets/scss/"
// import "assets/scss/material-kit-react.scss?v=1.10.0";
import "./assets/scss/material-kit-react.scss"
// pages for this product
import Components from "./views/Components/Components";
import LoginPage from "./views/LoginPage/LoginPage.js";
import AboutUs from "./views/AboutUs/AboutUs"
// import SignupPage from "./views/SignupPage/SignupPage"
import LoginProvider from './views/context';
import Supervisour from './views/Supervisour/Supervisour'
import AllBooks from './views/AllBooks/AllBooks'
import PickedBook from './views/PickedBook/BickedBook'
import Super from './views/supervisourpage/superpage'
let hist = createBrowserHistory();

function App() {
  // const socketRef = useRef();
  // const PORT = 7893
  // const SERVERPORT = 7896

  // socketRef.current = io.connect(`http://localhost:${PORT}`)
  

  return (
    <>
      <Router history={hist}>
        <Switch>
        {/* <Route path="/" exact component={Components} />  */}
      
        <LoginProvider>
        <Route exact path="/"  component={Components} />
          <Route exact path="/login-page"  component={LoginPage} />
          <Route exact path="/supervisour"component={Supervisour} />    
          <Route exact path="/picked-book"  component={PickedBook} />  
          <Route  exact path="/all-books" component={AllBooks} />  
          <Route exact path="/super-page" component={Super} /> 
          <Route  exact path="/about-us"  component={AboutUs} /> 
          
        
          </LoginProvider>
    
        </Switch>
      </Router>
    </>
  );
}

export default App;
