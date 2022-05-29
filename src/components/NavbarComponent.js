import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import logo from "../assets/logo.png";
import face from "../assets/face.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faFile, faQrcode } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="nav-logo">
            <img src={logo} alt="" srcset="" />
            <h5> Entropay</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Create" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <FontAwesomeIcon icon={faSquare} /> Payment Button
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <FontAwesomeIcon icon={faFile} /> Payment Pages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <FontAwesomeIcon icon={faQrcode} />
                QR Code
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#link">Analytics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <div className="nav-logo">
            <img src={face} alt="" srcset="" />
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
