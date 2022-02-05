import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ favourites }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="Nav-background"
      variant="light"
      style={{ width: "100%" }}
    >
      <Container className="text-center">
        <Navbar.Brand>
          <Link to="/" type="submit" className="Nav-links">
            Punk-API
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="border-0">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/" type="submit" className="Nav-links">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/favourites"
                type="submit"
                className="Nav-links Nav-Favourite"
              >
                Favourites<span>{favourites.length}</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
