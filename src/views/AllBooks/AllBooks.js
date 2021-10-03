import React, { useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/CustomButtons/Button";

import { Card, Row, Col } from 'react-bootstrap'
import { LoginContext } from '../context';
import { When } from 'react-if';
import Favorite from "@material-ui/icons/Favorite";
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions'
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import './form.css'

import image from "../../assets/img/bg9.jpg";
const useStyles = makeStyles(styles);

function AllBooks(props) {

    const loginContext = useContext(LoginContext);

    useEffect(() => {
        props.getRemoteData();

    }, []);

    const classes = useStyles();
    const { ...rest } = props;
    return (
        <>
            <div className="bodyAboutus">
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

                </div>
                <div className={classes.container}>
                    <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "7rem", color: "black" }} >Courses</h1>
                    <Row xs={1} md={3} className="g-4"  >

                        {props.bookData[0] &&
                            props.bookData[0].map((book, idx) =>
                            (
                                <Col>
                                    <div class="card CardBook">
                                        <div class="additional" >
                                            <div class="user-card">
                                                <img src={book.image} />
                                                <svg width="110" height="110" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" class="center">

                                                    <desc id="desc">Cartoon of a Caucasian woman smiling, and wearing black glasses and a purple shirt with white collar drawn by Alvaro Montoro.</desc>
                                                </svg>
                                            </div>
                                            <div class="more-info">

                                                <div style={{ textAlign: "center", marginTop: "60px", marginLeft: "-60px" }}>
                                                    <When condition={loginContext.loggedIn}>
                                                        <Button color="warning" round>
                                                            <Favorite className={classes.icons} /> pick book
                                                        </Button>
                                                    </When>
                                                    <br />
                                                    <a href='/somefile.txt' download>
                                                        <Button color="danger" round>

                                                            Download
                                                        </Button>


                                                    </a>
                                                    <br />
                                                    <Button justIcon round color="danger">
                                                        <Favorite className={classes.icons} />
                                                    </Button>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ backgroundColor: "rgb(50, 46, 41)" }} class="general">

                                            <h4>{book.title}</h4>
                                            <p>{book.description}</p>
                                            <span class="more">{book.author}</span>

                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Footer whiteFont />
                </div >
            </div >

        </>

    );
}
const mapStateToProps = state => ({
    bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)