import React, { useContext ,useEffect} from 'react';
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
import { Redirect } from 'react-router-dom';

import styles from "../../assets/jss/material-kit-react/views/landingPage";
import { When } from 'react-if';
import { LoginContext } from '../context';


import image from "../../assets/img/bg7.jpg";
const useStyles = makeStyles(styles);


export default function LoginPage(props) {


  const loginContext = useContext(LoginContext);
  console.log('loginContext', loginContext);
  useEffect(() => {
    loginContext.setLoginbtn(false);
}, []);

  const [userName, setUserName] = React.useState("");;
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
    loginContext.login(userName, password);

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
          <GridContainer justify="center" >
            <GridItem xs={12} sm={12} md={4} style={{ marginTop: "80px" }}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <div >
                      <h4 style={{ textAlign: "center", fontStyle: "bold", textShadow: "2px 3px 3px black" }}>Student Login</h4>
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


                    <Button to={"/main"} type="submit" simple color="primary" style={{ marginTop: "-100px", marginLeft: "50px" }} size="lg">
                      <div id="buttons">

                        <div xs={12} sm={12} md={8} class="group">
                          <a style={{ marginRight: "0rem" }} class="blam">LogIn</a>
                        </div>

                      </div>
                      {
                        loginContext.loggedIn && 
                        <Redirect to="/main" />
                      }
                    </Button>

                    <Link to={"/signup-page"} className={classes.link}>
                      <Button simple color="primary" size="lg" style={{ marginTop: "40px", marginLeft: "-230px" }} >
                        If You have not account
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
