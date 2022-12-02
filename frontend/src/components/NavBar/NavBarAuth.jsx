import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { AppContext } from "./AppContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function NavBarAuth() {
  // const [user, setUser] = useState("User");
  const user = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button onClick={() => navigate("/home")}>Home</button>
              <button onClick={() => navigate("/list")}>List</button>
              {!user.isLogIn ? (
                <button onClick={() => user.login()}>LogIn</button>
              ) : (
                <button onClick={() => user.logout()}>LogOut</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
