import "./App.css";
import React from "react";
import AppMovie from "./components/AppMovie.jsx";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
