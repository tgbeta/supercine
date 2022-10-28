import "./App.css";
import SearchMovie from "./components/SearchMovie.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [movieSearch, setMovieSearch] = useState([]);

  return (
    <div className="App">
      <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
    </div>
  );
}

export default App;
