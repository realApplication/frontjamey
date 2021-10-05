import React, { useEffect,useRef, useContext } from "react";
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
const useStyles = makeStyles(styles);

function SectionBasics(props) {
  const loginContext = useContext(LoginContext);
  console.log('main context ', loginContext);
  const socketRef = useRef()
  const classes = useStyles();
  useEffect(() => {
    socketRef.current = io.connect("http://localhost:7896")
    props.getRemoteData();
    loginContext.setLoginbtn(true);
  }, []);

  const handlePicked =( e ,id)=> {
    console.log('------000000000-----',id);
    e.preventDefault();
    loginContext.postPickedCourses(id);
    // socketRef.current.on("res-client", ({ name, message,id }) => {
    //   // setChat([ ...chat, { name, message,id } ])
    //   socketRef.current.emit('get_all')
    //   // socketRef.current.emit('received-admin', id)
    // })
  }
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>

          <Row xs={1} md={2} className="g-4">
            {props.bookData[0] &&
              props.bookData[0].map((book, idx) => (
                <Col>
                  <Card>
                    <Card.Img style={{ height: "27rem" }} variant="top" src={book.image} />
                    <Card.Body >
                      <Card.Title>{book.title}</Card.Title>

                      <Card.Title>{book.author}</Card.Title>
                      <Card.Text>
                        {book.description}
                      </Card.Text>
                       {console.log('..................>>>',book.id)}
                      <div style={{ textAlign: "right" }}>
                        <When condition={loginContext.loggedIn}>
                          <Button onClick={(e)=>handlePicked(e,book.id)}  color="primary" round>
                            <Favorite className={classes.icons} /> Picked Book
                          </Button>
                        </When>

                        <a href='/somefile.txt' download>
                          <Button color="primary" round>

                            Download
                          </Button>


                        </a>

                        <Button justIcon round color="primary">
                          <Favorite className={classes.icons} />
                        </Button>

                      </div>

                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
        <div id="buttons">
          {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> pick book
              </Button>
              <Button justIcon round color="primary">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  bookData: state.bookData,

});

const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(SectionBasics)