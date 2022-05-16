import { render } from "@testing-library/react";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import "../App.css";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Seb Atkinson</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="spaced-link" href="about">
                About Me
              </Nav.Link>
              <NavDropdown
                className="spaced-link"
                title="Projects"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="https://github.com/BrainyShadow">
                  GitHub
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="spaced-link" href="/resume">
                Resume
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="https://github.com/brainyshadow"
                className="spaced-link"
              >
                <GoMarkGithub className="nav-logo" />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/seb-a-67735621b"
                className="spaced-link"
              >
                <AiFillLinkedin className="nav-logo" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
