import React, { useEffect } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../../components/Grid/GridContainer";

import GridItem from "../../../components/Grid/GridItem";

import Card from "../../../components/Card/Card";

import { connect } from 'react-redux';
import { getRemoteData } from '../../../store/actions'
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle";

const useStyles = makeStyles(styles);

function SectionCarousel(props) {
 //  console.log('props//SectionCarousel',props.bookData[0][0].title);
 
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem  xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card style={{backgroundColor:"black" ,width:"70rem" ,marginLeft:"-200px"}} carousel>
              <Carousel {...settings}>

                <div>
                  <img src={props.bookData[0] && props.bookData[0][0].image} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <h1 className="slick-icons" />
                      {props.bookData[0] && props.bookData[0][0].title}
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={props.bookData[0] && props.bookData[0][1].image}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <h1 className="slick-icons" />
                      {props.bookData[0] && props.bookData[0][1].title}
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={props.bookData[0] && props.bookData[0][3].image} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <h1 className="slick-icons" />
                      {props.bookData[0] && props.bookData[0][3].title}

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={props.bookData[0] && props.bookData[0][4].image} alt="Fourth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <h1 className="slick-icons" />
                      {props.bookData[0] && props.bookData[0][4].title}
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={props.bookData[0] && props.bookData[0][5].image} alt="Fifth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <h1 className="slick-icons" />
                      {props.bookData[0] && props.bookData[0][5].title}
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>

           
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(SectionCarousel)