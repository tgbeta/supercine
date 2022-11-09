import "./App.css";
import React from "react";
import AppMovie from "./components/AppMovie.jsx";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import SearchList from "./components/SearchList";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/SearchList" element={<SearchList />} />
        <Route path="/list" element={<List />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
