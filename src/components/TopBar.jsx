// src/components/Navigation.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./topBar.module.css";
import Logo from "../images/PGFLOGO.png";

function TopBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar bg="gray" expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className="py-0" as={Link} to="/">
          <img width={50} height={50} src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("aboutPage")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("footer")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
