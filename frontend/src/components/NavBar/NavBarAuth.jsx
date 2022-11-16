import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; //aqui nao deveria ser postgres
import { AppContext } from "./AppContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import { auth } from '../../firebase-config.js'
import logo from "../../assets/logo.png";

const provider = new GoogleAuthProvider();

export default function NavBarAuth () {
    const [user, setUser] = useState('User');
    const login = useContext(AppContext);

    const loginWithGoogle = () => {
      signInWithPopup(auth, provider).then((result)=>{
        console.log(result);
        login.setIsLogIn(true);
        setUser(result.user.displayName);
      })
    }

    const logoutWithGoogle = () => {
      signOut(auth).then(()=> {
        alert("Log out");
        setUser('User');
        login.setIsLogIn(false);
      }).catch((error) => {
        console.log("An error happened.");
      });
    }

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
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/list">Lists</Nav.Link>
              {!login.isLogIn?<button onClick={()=>loginWithGoogle()}>LogIn</button>
                :<button onClick={()=>logoutWithGoogle()}>LogOut</button>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );

  
}