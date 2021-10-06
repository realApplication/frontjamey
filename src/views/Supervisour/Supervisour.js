import React, { useContext,useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import { Link } from "react-router-dom";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import { Redirect } from 'react-router-dom';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage";
import { When } from 'react-if';
import { LoginContext } from '../context';


import image from "../../assets/img/bggg.jpg";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {


  const loginContext = useContext(LoginContext);
  console.log('loginContext-------------->supervisour', loginContext);
  useEffect(() => {
    loginContext.setLoginbtn(false);
});
  const [userName, setUserName] = React.useState("");

  const [password, setPassword] = React.useState("");

  function handleChangeUserName(e) {
    // console.log('user name ', e.target.value);
    setUserName(e.target.value)
  }
  function handleChangePassword(e) {
    // console.log('password', e.target.value);
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // use login context to perform login operation
    loginContext.loginSupervisor(userName, password);

  }
  function logout(e) {
    e.preventDefault();
    // use login context to perform login operation
    loginContext.logoutSupervisor();

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
 <div className={classes.container} style={{paddingTop:"120px"}}>
        <div class="container" id="containerr">
          <div class="form-container sign-in-container">
            <form onSubmit={handleSubmit} action="#">
              <h1 style={{color:"black",fontSize:"40px"}}>Sign in Supervisour</h1>
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
                     {console.log(" loginContext.loggedInSuper//supervisor.js",  loginContext.loggedInSuper)}
                      {
                     
                        loginContext.loggedInSuper && 
                        <Redirect to="/super-page" />
                      }

                      {/* {loginContext.loggedInSuper &&
                        <Button onClick={logout} simple color="primary" size="lg" style={{ marginTop: "40px", marginLeft: "-130px" }} >
                          Logout supervisour
                        </Button>

                      } */}
                    </button> 
            </form>
          </div>
          <div class="overlay-container " >
            <div className="overlay">
              <div class="overlay-panel overlay-left  backgroungg">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button class="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right  backgroung" >
                <h1>Hello, Supervisour</h1>
                <p>Enter your personal details and start journey with us</p>
                {/* <button class="ghost" id="signUp">Sign Up</button> */}
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer whiteFont />
      </div>

      {/* <Header
        absolute
        color="transparent"
        brand="Jam3y Website"
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
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem xs={12} sm={12} md={4} style={{ marginTop: "80px" }}>
              <Card style={{ backgroundColor: "#FFE4C4" }} className={classes[cardAnimaton]}>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <div >
                      <h4 style={{ textAlign: "center", fontStyle: "bold", textShadow: "2px 3px 3px black" }}>Supervisour Login</h4>
                    </div>


                  </CardHeader>
                  <br />
                  <br />

                  <CardBody>

                    <CustomInput

                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}

                      inputProps={{
                        onChange: (e) => handleChangeUserName(e),
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}

                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (e) => handleChangePassword(e),
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}

                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>


                    <Button to={"/main"} type="submit" simple color="primary" style={{ marginTop: "-10px", marginLeft: "50px" }} size="lg">
                      <div id="buttons">

                        <div xs={12} sm={12} md={8} class="group">
                          <a style={{ marginRight: "0rem" }} class="blam">LogIn</a>
                        </div>

                      </div>
                    </Button>

                    <Link to={"/signup-page"} className={classes.link}>
                      <Button simple color="primary" size="lg" style={{ marginTop: "40px", marginLeft: "-230px" }} >

                      </Button>

                      {loginContext.loggedInSuper &&
                        <Button onClick={logout} simple color="primary" size="lg" style={{ marginTop: "40px", marginLeft: "-130px" }} >
                          Logout supervisour
                        </Button>

                      }

                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div> */}
    </>
  );
}
