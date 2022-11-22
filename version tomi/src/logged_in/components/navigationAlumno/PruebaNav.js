import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => alert("soy matematica")}href="#action/3.1">Matematica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Biologia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Historia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Computacion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default CollapsibleExample;


