import React, { useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import Button from "../../../components/CustomButtons/Button";
import { When } from 'react-if';
import { LoginContext } from '../../context';
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle";
import io from "socket.io-client"
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { connect } from 'react-redux';
import { getRemoteData } from '../../../store/actions'
import { Card, Row, Col } from 'react-bootstrap'
import './carousel.scss';
const useStyles = makeStyles(styles);

function SectionBasics(props) {
  const loginContext = useContext(LoginContext);
  console.log('main context ', loginContext);
  const socketRef = useRef()
  const classes = useStyles();
  const api =  process.env.LINK || 'http://localhost:7896';

  useEffect(() => {
    socketRef.current = io.connect(api)
        // socketRef.current = io.connect("https://jameeey.herokuapp.com")

    props.getRemoteData();
    loginContext.setLoginbtn(true);
  }, []);
  let bookdata = JSON.parse(localStorage.getItem('bookdata'));
  let random=JSON.parse(localStorage.getItem("random"));
  let bookName=JSON.parse(localStorage.getItem("bookname"))
  console.log('bookdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', bookdata);
  const handlePicked = (e, id) => {
    e.preventDefault();
    loginContext.postPickedCourses(id);

  }
  let status = JSON.parse(localStorage.getItem('status'));
  console.log('loginContext.status',loginContext.status);
  return (
    <div className={classes.sections}>
      {/* <div className={classes.container}>
        <div className={classes.title}> */}

      <Row xs={1} md={3} >
        {props.bookData[0] &&
          props.bookData[0].map((book, idx) => (

            <>
              <Col>

                <h4 style={{ textAlign: "center" }}>{book.title}</h4>
                <div class="box vintage">
                  <img src={book.image} alt="EMMYLOU" />

                  <p>{book.description}</p>
                </div>


              </Col>
            </>
          ))}
      </Row>
      
       {status &&
        <div style={{ color: "black" }} class="courses-container">
          <div class="course">
            <div class="course-preview">
              <h6 style={{ marginLeft: "10px" }}>Course</h6>
              <h3>{bookName}</h3>
              {/* <h2 style={{ paddingTop: "12px" }}>{bookname}</h2> */}
            </div>
            <div class="course-info">
              <h3>
                  will be class in {bookdata != null && random} The volunter will be  {bookdata != null && bookdata.name.student},
                                            Number of student , {bookdata != null && bookdata.studentsNum} ,  at {bookdata != null && bookdata.time}   Wellcome students .....'
                
      
              </h3>
            </div>
      
          </div>
      
        </div>}



    </div>
  );
}
const mapStateToProps = state => ({
  bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(SectionBasics)


