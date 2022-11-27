import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import image from "../assets/DoctorsShield.png";
function Navigation() {
  return (
    <Navbar
      style={{ paddingRight: "20px", paddingLeft: "20px", fontSize: "20px" }}
      bg="light"
      expand="lg"
      sticky="top"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          {" "}
          <img style={{ width: "170px" }} src={image} alt="app-logo"></img>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/diseases">
            <Nav.Link>Conditions & Treatments</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
