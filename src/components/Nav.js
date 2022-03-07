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
          <Navbar.Brand href="home">Brainy Shadow</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="spaced-link" href="about">
                About Me
              </Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://github.com/BrainyShadow/DDB">
                  DDB V8
                </NavDropdown.Item>
                <NavDropdown.Item href="project2">
                  LED Controller
                </NavDropdown.Item>
                <NavDropdown.Item href="project3">
                  Fooseball Scoreboard
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  Infinity Table
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  Resume Generator
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  Textify Extension
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  Personal Website
                </NavDropdown.Item>
                <NavDropdown.Item href="project4">
                  4-Bit Computer
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="spaced-link" href="/resume">
                Résumé
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/brainyshadow">
                <GoMarkGithub className="nav-logo" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/seb-a-67735621b">
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
