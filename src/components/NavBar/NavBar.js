import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const logo = require("../logo.png");
  return (
    <Navbar expand="md">
      <Navbar.Brand href="/" style={{ paddingLeft: "30px" }}>
        <img src={logo} style={{ width: "40px", height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="mobile-toggle"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="/about"
            style={{ paddingRight: "30px", color: "black" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/datathon"
            style={{ paddingRight: "30px", color: "black" }}
          >
            Datathon
          </Nav.Link>
          <Nav.Link
            href="/events"
            style={{ paddingRight: "30px", color: "black" }}
          >
            Events
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={{ paddingRight: "30px", color: "black" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
