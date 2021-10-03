/*eslint-disable*/
import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import {When} from 'react-if';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import GridItem from "../../components/Grid/GridItem";
import { LoginContext } from '../../views/context';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";

import Button from "../../components/CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const loginContext = useContext(LoginContext);
  console.log('loginbtn-------------------------------<',loginContext);
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="All"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/main" className={classes.dropdownLink}>
              main
            </Link>,
             <Link to="/all-books" className={classes.dropdownLink}>
             All books
           </Link>,
              <Link to="/picked-book" className={classes.dropdownLink}>
              Picked Books
            </Link>,
            <Link to="/supervisour" className={classes.dropdownLink}>
            Supervisour  Signin
          </Link>,
          
        <Link to="/supervisour" className={classes.dropdownLink}>
        Posts
      </Link>,
          ]}
        />
      </ListItem>
    
      <ListItem className={classes.listItem} style={{marginTop:"-25px"}}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
         <GridItem md={12}>
          <When condition={!loginContext.loggedIn && loginContext.loginbtn}>
            <Link to={"/login-page"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group">
                  <button style={{ marginRight: "0rem" }} class="blam"> <i className="fas fa-sign-in-alt"> Login </i></button>
                </div>

              </div>
            </Link>
          </When>
          <When condition={loginContext.loggedIn}>
            <Link to={"/main"} className={classes.link}>
              <div id="buttons">

                <div xs={12} sm={12} md={8} class="group">
                  <button onClick={loginContext.logout} style={{ marginRight: "0rem" }} class="blam"> <i className="fas fa-sign-in-alt"> LogOut </i></button>
                </div>

              </div>
            </Link>
          </When>
        </GridItem>
        </Tooltip>
      </ListItem>
  
     
    </List>
  );
}
