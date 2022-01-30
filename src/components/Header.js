import { render } from "@testing-library/react";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brainy Shadow</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="projects">About Me</Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">DDB V8</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/seb997a">Github</Nav.Link>
              <Nav.Link href="#deets">LinkedIn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
