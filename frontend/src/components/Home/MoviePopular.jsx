import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MoviePopular() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/movies/popular`).then((res) => {
      console.log("movies Popular", res.data);
      setMovies(res.data.results.slice(9));
    });
  }, []);

  const handleMovieOnClick = (event, movie) => {
    navigate("/Movie", {
      state: {
        movieSearchDetails: movie,
      },
    });
  };

  return (
    <div>
      {movies.map((movie) => (
        <div onClick={(event) => handleMovieOnClick(event, movie)}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <p>{movie.original_title}</p>
        </div>
      ))}
    </div>
  );
}
