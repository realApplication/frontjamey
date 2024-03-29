import React, { useEffect, useRef, useContext } from "react";
import io from 'socket.io-client'
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
import { Link } from "react-router-dom";

import Favorite from "@material-ui/icons/Favorite";
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions'
import styles from "../../assets/jss/material-kit-react/views/landingPage";
import Swal from 'sweetalert2'
import './super.css'

import image from "../../assets/img/bg444.jpg";
const useStyles = makeStyles(styles);

function Super(props) {
    const socketRef = useRef();
    const PORT = process.env.LINK || "http://localhost:7896";
    // const PORT = "https://jameeey.herokuapp.com"
    let bookname;
    bookname = JSON.parse(localStorage.getItem('bookname'))
    const [status, setStatus] = React.useState(false);
    const [localdata, setLocaldata] = React.useState([]);
    const loginContext = useContext(LoginContext);
    // socketRef.current = io.connect(`http://localhost:${PORT}`)
    // socketRef.current = io.connect(`https://jameeey.herokuapp.com`)
    socketRef.current = io.connect(PORT)
    
    let alldata;

    useEffect(() => {

    
        socketRef.current.on("supervisor",async(data)=>{
            console.log('supervisor -------------->',data);
            loginContext.setApproval(data);
            localStorage.setItem('bookdata', JSON.stringify(data));
            setLocaldata(data);
        })
        socketRef.current.on("mainwall", async (data) => {
            console.log('suoervisor //data', data.className)
            localStorage.setItem("className" , JSON.stringify(data))
            // alldata = data;
            // console.log('0000000000000000000000000', data);
            // loginContext.setApproval(data);
            // localStorage.setItem('bookdata', JSON.stringify(data));
            // setLocaldata(data);
        })
    }, [])

    let bookdata = JSON.parse(localStorage.getItem('bookdata'));

    const handleAskHelp = async (e) => {
        e.preventDefault();
        let data = await loginContext.handleAskHelp();
        alert(data);
        console.log('data ------------>', data);
    }
    const volunteer = async (e) => {
        e.preventDefault();
        let data = await loginContext.volunteer();
        // alert(data);
        Swal.fire({
            title: data,
            // showClass: {
            //     popup: 'animate__animated animate__fadeInDown'
            // },
            // hideClass: {
            //     popup: 'animate__animated animate__fadeOutUp'
            // }
        })
        console.log('data volunteer-->', data);

    }
    const room = (e) => {
        e.preventDefault();
        localStorage.setItem('status', JSON.stringify(true));
        setStatus(true);
    }
    const random=()=>{
        const classes=['101H' , '102H' , '103T' , '104C' , '102B']
       let rand=Math.floor(Math.random()*5);
       localStorage.setItem("random" ,JSON.stringify(classes[rand]))
        return classes[rand];
    }
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <>

            {/* <Header
                absolute
                color="transparent"
                brand="Jam3y Website"
                rightLinks={<HeaderLinks />}
                {...rest}
            /> */}
            <When condition={loginContext.loggedInSuper}>
                <Link to={"/supervisour"} className={classes.link}>
                    <div id="buttons">

                        <div xs={12} sm={12} md={8} class="group" style={{ marginTop: "35px" }}>
                            <button onClick={loginContext.logoutSupervisor} class="btn btn-danger btn-round">  <i className="fas fa-sign-in-alt"> Logout </i></button>

                        </div>

                    </div>
                </Link>
            </When>
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

                        <div style={{ marginTop: "7rem" }}>
                            Supervisour page


                            <div style={{ color: "black" }} class="courses-container">
                                <div class="course">
                                    <div class="course-preview">
                                        <h6 style={{ marginLeft: "10px" }}>Course</h6>
                                        <h2 style={{ paddingTop: "12px" }}>{bookname}</h2>
                                    </div>
                                    <div class="course-info">
                                        <div class="progress-container">
                                            <div class="progress"></div>

                                        </div>
                                        <h4>STUDENT NUMBER : {bookdata != null && bookdata.studentsNum}</h4>
                                        <h3> volunteer Name :{bookdata != null &&  bookdata.name.student}</h3>
                                        <button onClick={(e) => room(e)} class="btnn" >Room reservation</button>
                                    </div>

                                </div>
                                {status &&
                                    <p>
                                        <h3>
                                            
                                            will be class in {bookdata != null && random()} The volunter will be  {bookdata != null && bookdata.name.student},
                                            Number of student , {bookdata != null && bookdata.studentsNum} ,  at {bookdata != null && bookdata.time}   Wellcome students .....'

                                        </h3>

                                    </p>}
                            </div>





                        </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(Super)


