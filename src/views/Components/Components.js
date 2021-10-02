import React ,{ useContext } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Parallax from "../../components/Parallax/Parallax";
import {When} from 'react-if';

// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import './login.css'
import styles from "../../assets/jss/material-kit-react/views/components";

import { LoginContext } from '../context';
const useStyles = makeStyles(styles);

export default function Components(props) {
  const loginContext =useContext(LoginContext) ;
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Jam3ey website"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",

        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/bg4.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Jam3ey</h1>
                <h3 className={classes.subtitle}>
                  "IF YOU CAN BELIEVE IT , YOUR MIND CAN ACHIEVE IT ."
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>

        <GridItem md={12}>
          <When condition={!loginContext.loggedIn}>
            <Link to={"/login-page"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group">
                  <button style={{ marginRight: "0rem" }} class="blam"> <i className="fas fa-sign-in-alt"> Login </i></button>
                </div>

              </div>
            </Link>
          </When>
          <When condition={loginContext.loggedIn}>
            <Link to={"/main"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group">
                  <button onClick={loginContext.logout} style={{ marginRight: "0rem" }} class="blam"> <i className="fas fa-sign-in-alt"> LogOut </i></button>
                </div>

              </div>
            </Link>
          </When>
          <SectionCarousel />
          <div style={{textAlign:"center"}}>
          <p >Discription </p>
          <a  href='book.pdf' attributes-list download>Click to download</a>
          </div>
          
        </GridItem>
        <SectionBasics />

      </div>
      <Footer />
    </div>
  );
}
