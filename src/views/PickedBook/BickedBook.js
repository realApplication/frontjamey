import React, { useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/CustomButtons/Button";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { Card, Row, Col } from 'react-bootstrap'
import { LoginContext } from '../context';
import { When } from 'react-if';
import Favorite from "@material-ui/icons/Favorite";
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions'
import styles from "../../assets/jss/material-kit-react/views/landingPage";

import '../AllBooks/form.css'

import image from "../../assets/img/bg444.jpg";
const useStyles = makeStyles(styles);

function PickedBook(props) {

    const loginContext = useContext(LoginContext);
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        props.getRemoteData();
        loginContext.getPickedCourses();
        loginContext.setLoginbtn(true);
        setBooks(JSON.parse(localStorage.getItem('data')));

    }, []);

    const handleAskHelp= async(e)=>{
        e.preventDefault();
       let data =  await loginContext.handleAskHelp();
       alert(data);
       console.log('data ------------>',data);
    }
    const volunteer=async(e,book)=>{
        e.preventDefault();
        let data = await loginContext.volunteer(book.title);
        alert(data);

    }
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <>
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
                    backgroundColor: "#ca9651",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center" >
                        <h1  style={{ paddingTop: "140px", fontFamily: "monospace", marginBottom: '20px' }}>Picked Books</h1>
                        <Row xs={1} md={2} className="g-4"   >

                            {
                                books != null && books.map((book, idx) =>
                                (
                                    <Col>
                                        <h3 style={{ textAlign: "center", fontSize: "20px" }}> Course : {book.title}</h3>

                                        <div id="container">
                                            <div class="product-details">
                                                <h1>{book.title}</h1>
                                                <p class="information">"{book.description}</p>
                                            </div>

                                            <div class="product-image">
                                                <img src={book.image} alt="" />
                                                <div class="info">
                                                    <h2>  {book.title}</h2>
                                                    <ul>
                                                        <li>Author : {book.author}</li>
                                                        <div style={{ textAlign: "center", marginLeft: "-60px" }}>
                                                            <When condition={loginContext.loggedIn}>
                                                                <Button  onClick={handleAskHelp} color="warning" round>
                                                                    <Favorite className={classes.icons} /> Ask For Help
                                                                </Button>
                                                            </When>
                                                            <br />

                                                            <Button onClick={(e)=>volunteer(e,book)} color="danger" round>

                                                                Volunteer
                                                            </Button>



                                                            <br />


                                                        </div>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </Col>
                                ))
                            }
                        </Row>
                    </GridContainer>

                </div>
                <Footer whiteFont />
            </div>

        </>

    );
}
const mapStateToProps = state => ({
    bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(PickedBook)


