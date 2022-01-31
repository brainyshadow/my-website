import { render } from "@testing-library/react";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {GoMarkGithub} from "react-icons/go";
import {AiFillLinkedin} from "react-icons/ai";
import "../App.css";


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Brainy Shadow</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="about">About Me</Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="project1">DDB V8</NavDropdown.Item>
                <NavDropdown.Item href="project2">
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item href="project3">
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/seb997a"><GoMarkGithub className="nav-logo" /></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/seb-a-67735621b"><AiFillLinkedin className="nav-logo"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
