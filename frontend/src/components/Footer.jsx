import React, {useContext} from "react";
import { useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "./NavBar/AppContext";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const Footer = () => {
  const user = useContext(AppContext);
  const navigate = useNavigate();
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
              <li>
                {!user.isLogIn ? (
                  <Nav.Link onClick={() => user.login()}>LogIn</Nav.Link>
                ) : (
                  <Nav.Link onClick={() => user.logout()}>LogOut</Nav.Link>
                )}
              </li>
              <li>
                <Nav.Link onClick={() => navigate("/list")}>List</Nav.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
