import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieUpcoming() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`/movies/upcoming`).then((res) => {
      console.log("movies upcoming", res.data);
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
