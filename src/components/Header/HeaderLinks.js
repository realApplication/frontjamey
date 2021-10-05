/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { When } from 'react-if';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import FontAwesomeIcon from 'react'
import GridItem from "../../components/Grid/GridItem";
import { LoginContext } from '../../views/context';
import './btn.css'


import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const loginContext = useContext(LoginContext);
  const classes = useStyles();
  return (
    <List className={classes.list} style={{ fontWeight: "bold" }} >
      <ListItem className={classes.listItem}  >
        <Link to="/main" className={classes.dropdownLink}>

          <i class="fa-solid fa-house"> Main</i>

        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/all-books" className={classes.dropdownLink}>
          All books
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <When condition={loginContext.loggedIn}>
          <Link to="/picked-book" className={classes.dropdownLink}>
            Picked Books
          </Link>
        </When>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/supervisour" className={classes.dropdownLink}>
          Supervisour  Signin
        </Link>
      </ListItem>

      <ListItem className={classes.listItem} style={{ marginTop: "-25px" }}>

        <GridItem md={12}>
          <When condition={!loginContext.loggedIn && loginContext.loginbtn}>
            <Link to={"/login-page"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group" style={{ marginTop: "35px" }}>
                  <button class="btn btn-danger btn-round">  <i className="fas fa-sign-in-alt"> Login </i></button>
                </div>

              </div>
            </Link>
          </When>
          <When condition={loginContext.loggedIn}>
            <Link to={"/main"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group" style={{ marginTop: "35px" }}>
                  <button onClick={loginContext.logout} class="btn btn-danger btn-round">  <i className="fas fa-sign-in-alt"> Logout </i></button>

                  {/* <button onClick={loginContext.logout} style={{ marginRight: "0rem" }} class="blam"> <i className="fas fa-sign-in-alt"> LogOut </i></button> */}
                </div>

              </div>
            </Link>
          </When>
        </GridItem>

      </ListItem>


    </List>
  );
}
