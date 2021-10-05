import React, { useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/CustomButtons/Button";
import GridContainer from "../../components/Grid/GridContainer";

import GridItem from "../../components/Grid/GridItem";
import { Row, Col } from 'react-bootstrap'
import { LoginContext } from '../context';
import { When } from 'react-if';
import Favorite from "@material-ui/icons/Favorite";
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions'
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import './aboutus.css'

import image from "../../assets/img/bg444.jpg";
const useStyles = makeStyles(styles);

function AllBooks(props) {

    const loginContext = useContext(LoginContext);

    useEffect(() => {
        props.getRemoteData();

    }, []);
    const addToFav = (e, book) => {
        e.preventDefault();
        loginContext.addToFavBook(book);
    };

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
                        {/* <GridItem xs={12} sm={12} md={4} > */}
                                       
                            <Row class="cards" style={{marginTop:'200px'}} >
                            <h4 class="card__description" style={{color:"white"}}>Despite the proliferation of electronic books and libraries, which enjoy some benefits, such as abundance, free and easy access, there are two areas in which they do not naturally excel, namely clarity and brevity, and fortunately there are still people who tend to help others.</h4>

                                <Col>
                                    <a href="" class="card">
                                        <img src="https://avatars.githubusercontent.com/u/64910804?v=4" class="card__image" alt="" />
                                        <div class="card__overlay">
                                            <div class="card__header">
                                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img class="card__thumb" src="https://avatars.githubusercontent.com/u/64910804?v=4" alt="" />
                                                <div class="card__header-text">
                                                    <h3 style={{width:"130px" ,marginLeft:"-20px"}} class="card__title">Samah AbuJwaied</h3>
                                                    <span class="card__status">Developer</span>
                                                </div>
                                            </div>
                                            <p class="card__description">Computer Scince</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="" class="card">
                                        <img src="https://i.ibb.co/M2yNjVG/mayada.jpg" class="card__image" alt="" />
                                        <div class="card__overlay">
                                            <div class="card__header">
                                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img class="card__thumb" src="https://i.ibb.co/M2yNjVG/mayada.jpg" alt="" />
                                                <div class="card__header-text">
                                                    <h3 style={{width:"130px" ,marginLeft:"-28px"}} class="card__title">Mayyadah Shehadeh</h3>
                                                    <span class="card__status">Developer</span>
                                                </div>
                                            </div>
                                            <p class="card__description">CIS</p>
                                        </div>
                                    </a>
                                </Col>
                           
                                <Col>
                                    <a href="" class="card">
                                        <img src="https://avatars.githubusercontent.com/u/75634309?v=4" class="card__image" alt="" />
                                        <div class="card__overlay">
                                            <div class="card__header">
                                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img class="card__thumb" src="https://avatars.githubusercontent.com/u/75634309?v=4" alt="" />
                                                <div class="card__header-text">
                                                    <h3 style={{width:"130px" ,marginLeft:"-28px"}} class="card__title">Qasem Mohammd </h3>
                                                    <span class="card__status">Developer</span>
                                                </div>
                                            </div>
                                            <p class="card__description">P&M</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="" class="card">
                                        <img src="https://avatars.githubusercontent.com/u/81148935?v=4" class="card__image" alt="" />
                                        <div class="card__overlay">
                                            <div class="card__header">
                                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img class="card__thumb" src="https://avatars.githubusercontent.com/u/81148935?v=4" alt="" />
                                                <div class="card__header-text">
                                                    <h3 style={{width:"130px" ,marginLeft:"-28px"}} class="card__title">Thaer braizat </h3>
                                                    <span class="card__status">Developer</span>
                                                </div>
                                            </div>
                                            <p class="card__description"></p>
                                        </div>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="" class="card">
                                        <img src="https://avatars.githubusercontent.com/u/54712715?v=4" class="card__image" alt="" />
                                        <div class="card__overlay">
                                            <div class="card__header">
                                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                                <img class="card__thumb" src="https://avatars.githubusercontent.com/u/54712715?v=4" alt="" />
                                                <div class="card__header-text">
                                                    <h3 style={{width:"130px" ,marginLeft:"-28px"}} class="card__title">Hasan Baydoun </h3>
                                                    <span class="card__status">Developer</span>
                                                </div>
                                            </div>
                                            <p class="card__description">CS</p>
                                        </div>
                                    </a>
                                </Col>
                            </Row>

                            
                        {/* </GridItem> */}
                    </GridContainer>
                </div>
                <Footer whiteFont   />
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)

