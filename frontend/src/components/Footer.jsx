import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col>
            <ul>
              <li>
                <Nav.Link href="/home">Home</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/aboutus">About us</Nav.Link>
              </li>
              <li>Login</li>
              <li>
                <Nav.Link href="/list">My List</Nav.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
