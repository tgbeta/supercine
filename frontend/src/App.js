import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import List from "./components/List";
import SearchList from "./components/SearchList";
import Movie from "./components/Movie";
import AboutUs from "./components/AboutUs.jsx";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/main.css";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";
import NavBarAuth from "./components/NavBar/NavBarAuth.jsx";
import { useEffect, useState } from "react";
import { AppContext } from "./components/NavBar/AppContext.jsx";
import ProtectedRoute from "./components/NavBar/ProtectedRoute.jsx";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase-config.js";
import axios from "axios";
import Wrapper from "./components/Home/Wrapper.jsx";

const provider = new GoogleAuthProvider();

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  console.log(isLogIn);

  const [user, setUser] = useState(null);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setIsLogIn(true);
      setUser(result.user.displayName);
    });
  };

  const logoutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        alert("Log out");
        setUser(null);
        setIsLogIn(false);
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        //Add new user to Database;
        axios
          .post(`/users`, { userEmail: user.email, userName: user.displayName })
          .then((res) => {
            setUser(res.data);
            console.log("logado", res.data);
            setIsLogIn(true);
          })
          .catch((erro) => console.log(erro));
      } else {
        setIsLogIn(false);
        console.log("deslogado", user);
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogIn,
        setIsLogIn,
        user,
        setUser,
        login: loginWithGoogle,
        logout: logoutWithGoogle,
      }}
    >
      <BrowserRouter>
        <Wrapper>
          <NavBarAuth />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SearchList" element={<SearchList />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route
              path="/list"
              element={
                <ProtectedRoute>
                  <List />
                </ProtectedRoute>
              }
            />

            <Route path="/Movie" element={<Movie />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
