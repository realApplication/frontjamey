import React, { useContext } from "react";
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
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { LoginContext } from '../context.js';
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import { Redirect } from 'react-router-dom';

import image from "../../assets/img/bg7.jpg";
//assets/img/bg7.jpg
const useStyles = makeStyles(styles);


export default function LoginPage(props) {

  const loginContext = useContext(LoginContext);
  // console.log('loginContext', loginContext);
  const [userName, setUserName] = React.useState("");;
  const [email, setEmail] = React.useState("");;
  const [password, setPassword] = React.useState("");


  function handleChangeUserName(e) {
    // this.setState({ [e.target.name]: e.target.value });
    // console.log('user name', e.target.value);
    setUserName(e.target.value)
  }
  function handleChangePassword(e) {
    // this.setState({ [e.target.name]: e.target.value });
    setPassword(e.target.value)
  }
  const handleChangeEmail = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    // use login context to perform login operation
    loginContext.login(userName, password);

  }
  const handleSubmitSignup = e => {
    e.preventDefault();
    // use login context to perform login operation
    loginContext.signup(email, userName, password);
    // console.log("this.state.email",this.state.email);

  }

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4} style={{ marginTop: "80px" }}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={handleSubmitSignup} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <div >
                      <h4 style={{ textAlign: "center", fontStyle: "bold", textShadow: "2px 3px 3px black" }} >Student SignUp </h4>
                    </div>

                  </CardHeader>


                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      required
                      formControlProps={{
                        fullWidth: true,

                      }}
                      inputProps={{
                        onChange: (e) => handleChangeUserName(e),
                        type: "text",

                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (e) => handleChangeEmail(e),
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
                  
                    <Button to={"/main"} type='submit' style={{marginTop:"-100px",marginLeft:"40px"}} simple color="primary" size="lg">
                      <div id="buttons">

                        <div xs={12} sm={12} md={8} >
                          <a style={{ marginRight: "0rem" }} class="blam"> SignUp</a>
                        </div>
                        {
                        loginContext.loggedIn && 
                        <Redirect to="/main" />
                      }
                      </div>
                    </Button>
                  
                    <Link to={"/login-page"} className={classes.link}>
                    <Button simple color="primary" size="lg" style={{marginTop:"20px" ,marginLeft :"-190px"}} >
                        Back to LogIn 
                      </Button>
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
