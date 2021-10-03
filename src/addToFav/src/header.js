import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
export default function header() {
    
    return (
        <div>
      
             <Navbar>
         <Container>
           <Navbar.Brand>
             <Link to="/"></Link>
           </Navbar.Brand>
           <Nav className="me-auto">

             <Nav.Link href="#productPage">
               <Link to="/productPage"> View Books</Link>
             </Nav.Link>

             <br/>
             <Nav.Link href="#favPage">
               <Link to="/favPage">Go to Favorites
                </Link>
             </Nav.Link>
           </Nav>
           
         </Container>
       </Navbar>
        </div>
    )
}
