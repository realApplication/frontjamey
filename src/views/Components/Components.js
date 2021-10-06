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
// import Pdf from '../../assets/pdf/book.pdf'
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import './login.css'
import styles from "../../assets/jss/material-kit-react/views/components";

import { LoginContext } from '../context';
const useStyles = makeStyles(styles);

export default function Components(props) {
  function onResumeClick(){
    window.open('../../assets/pdf/book.pdf');
  }
  const loginContext =useContext(LoginContext) ;
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        // brand="Jam3ey website"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",

        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/bg34.jpg").default}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem>
              <div style={{textAlign:"center"}} className={classes.brand}>
                <h1 className={classes.title}>Jam3ey</h1>
                <h3 style={{textAlign:"center"}} >
                  "IF YOU CAN BELIEVE IT , YOUR MIND CAN ACHIEVE IT ."
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>

        <GridItem md={12} >

          
          <div style={{textAlign:"center"}}>
          <h3 style={{paddingTop:"100px"}}>Description  </h3>
           <h4 style={{width:"700px" , color :"black",fontFamily:"monospace",paddingTop:"50px",marginLeft:"250px"}}>
           An application aims university students and help them in their reviews of courses by get all students needs help in specific subject  and find a volunteer how can explain the subject to them, besides pick a classroom to set in it , in a real efficient and time saving way.
           </h4>
          <SectionCarousel />

         
          </div>
          
        </GridItem>
        <SectionBasics />

      </div>
      <Footer />
    </div>
  );
}
