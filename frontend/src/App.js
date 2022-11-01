import "./App.css";
import SearchMovie from "./components/SearchMovie.jsx";
import React, { useState, useEffect } from "react";
import {io} from "socket.io-client"


function App() {
  const [movieSearch, setMovieSearch] = useState([]);

     // Web sockets test
   const socket=io("http://localhost:8005",{ transports : ['websocket'] })



  return (
    <div className="App">
      <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
    </div>
  );
}

export default App;
