import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import List from "./components/List";
import SearchList from "./components/SearchList";
import Movie from "./components/Movie";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/main.css";
import logo from "./assets/logo.png";
import Footer from './components/Footer';
import NavBarAuth from "./components/NavBar/NavBarAuth.jsx";
import { useState } from "react";
import { AppContext } from "./components/NavBar/AppContext.jsx";
import ProtectedRoute from "./components/NavBar/ProtectedRoute.jsx";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  console.log(isLogIn);
  return (
    <AppContext.Provider value={{ isLogIn, setIsLogIn }}>
      <BrowserRouter>
        {/* <nav>
            <Link to="/home">Home</Link>
            <Link to="/list">List</Link>
          </nav> */}

 
        <NavBarAuth />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SearchList" element={<SearchList />} />

          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            }
          />

          <Route path="/movie" element={<Movie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>


  );
}

export default App;
