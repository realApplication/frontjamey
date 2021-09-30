import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { connect } from 'react-redux';
import { getRemoteData } from '../../../store/actions'
import { Card , Row ,Col} from 'react-bootstrap'
const useStyles = makeStyles(styles);

function SectionBasics(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getRemoteData();

  }, []);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>add card here</h2>
          <Row xs={1} md={2} className="g-4">
            {props.bookData[0] &&
              props.bookData[0].map((book, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={book.image} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Title>{book.author}</Card.Title>
                    <Card.Text>
                      {book.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div id="buttons">
          <GridContainer justify="center">
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
          </GridContainer>
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