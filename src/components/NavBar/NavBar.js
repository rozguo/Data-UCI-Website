import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">NavBar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/datathon">Datathon</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/join">Join</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;