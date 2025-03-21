import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close navbar on menu click
  };

  return (
    <Navbar
      bg="light"
      sticky="top"
      expand="lg"
      expanded={expanded}
      className="shadow p-4"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          FoundationName
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-lg-3" onClick={handleNavClick}>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("about")}>About Us</Nav.Link>
            <Nav.Link onClick={() => navigate("services")}>Programs</Nav.Link>
            <Nav.Link onClick={() => navigate("contacts")}>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate("events")}>Events</Nav.Link>
          </Nav>
          <div className="btn-div">
            <Button className="donate-btn rounded-1 px-5 py-3 btn-lg">
              Donate
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
