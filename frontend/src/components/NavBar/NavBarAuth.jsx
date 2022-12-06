import axios from "axios";
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

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase-config.js";

const provider = new GoogleAuthProvider();


export default function NavBarAuth() {
  // const [user, setUser] = useState("User");
  const user = useContext(AppContext);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      login.setIsLogIn(true);
      login.setUser(result.user.displayName);
    });
  };

  const logoutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        alert("Log out");
        login.setUser("User");
        login.setIsLogIn(false);
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        login.setIsLogIn(true);

        //Add new user to Database;
        axios
        .post(`/users`, {userEmail: user.email, userName: user.displayName})
        .then((res) => {
          login.setUser(res.data);
          console.log("logado", res.data);
        })
        .catch((erro) => console.log(erro));

      } else {
        login.setIsLogIn(false);
        console.log("deslogado", user);
      }
    });
  }, []);

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
