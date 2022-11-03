import "./App.css";
import React from "react";
import AppMovie from "./components/AppMovie.jsx";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/searchList">Search List</Link>
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/searchList" element={<h1>Search List</h1>} />
        <Route path="/list" element={<h1>List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
