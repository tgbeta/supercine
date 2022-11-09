import React from "react";
import AppMovie from "./components/AppMovie.jsx";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css'
import logo from './assets/logo.png'


function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/home">Home</Link>
        <Link to="/list">List</Link>
      </nav> */}
 
      <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/home"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/list">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
