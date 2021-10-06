import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { Redirect } from 'react-router-dom';
// import './logincss'
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import { When } from 'react-if';
import { LoginContext } from '../context';
import './login.css'

import image from "../../assets/img/bggg.jpg";
const useStyles = makeStyles(styles);


export default function LoginPage(props) {
  const loginContext = useContext(LoginContext);
  console.log('loginContext', loginContext);
  useEffect(() => {
    loginContext.setLoginbtn(false);
}, []);

  const [userName, setUserName] = React.useState("");;
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");;
  function handleChangeUserName(e) {
    setUserName(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginContext.login(userName, password);
    setUserName('');
    setPassword('')

  }
  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleSubmitSignup = e => {
    e.preventDefault();
    loginContext.signup(email, userName, password);
    setUserName('');
    setPassword('');
    setEmail('')

  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
 
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
 <div className={classes.container} style={{paddingTop:"150px"}}>
        <div class="container" id="containerr">
          <div class="form-container sign-up-container" >
            <form onSubmit={handleSubmitSignup} action="#" >
              <h1 style={{color:"black",fontSize:"40px"}}>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input onChange={handleChangeUserName} type="text" placeholder="Name" />
              <input onChange={handleChangeEmail} type="email" placeholder="Email" />
              <input onChange={handleChangePassword} type="password" placeholder="Password" />
              <button to={"/"} type='submit'  simple size="lg">
                     SignUp
                        {
                        loginContext.loggedIn && 
                        <Redirect to="/" />
                      }
                   
                    </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form onSubmit={handleSubmit} action="#">
              <h1 style={{color:"black",fontSize:"40px"}}>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              <input onChange={handleChangeUserName} type="email" placeholder="Email" />
              <input onChange={handleChangePassword} type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button to={"/main"} type="submit" simple  size="lg">
                     LogIn
                      {
                        loginContext.loggedIn && 
                        <Redirect to="/main" />
                      }
                    </button>
            </form>
          </div>
          <div class="overlay-container " >
            <div className="overlay">
              <div class="overlay-panel overlay-left  backgroungg">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button class="ghost" id="signInn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right  backgroung" >
                <h1>Hello, Student!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUpp"> Sign Up </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer whiteFont />
      </div>


    </>

  );
}
