import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };

}
  render() {
    return (
      <>
        <Navbar
       
        >
          <Container>
         
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link to="/super">supervisor</Link>
              </Nav.Link>
              <br/>
              <Nav.Link href="#main-walls">
                <Link to="/main-walls">mainwalls</Link>
              </Nav.Link>
              <br/>
              <Nav.Link href="#main-walls2">
                <Link to="/main-walls2">mainwalls222</Link>
              </Nav.Link>
            </Nav>
            
          </Container>
        </Navbar>
      </>
    );
  }
}

export default (Header);