import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import image from "../assets/app-logo.webp";
import image from "../assets/DoctorsShield.png";
function Navigation() {
  return (
    <Navbar
      style={{ paddingRight: "20px", paddingLeft: "20px", fontSize: "20px" }}
      bg="light"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img style={{ width: "170px" }} src={image} alt="app-logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/diseases">Conditions & Treatments</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
