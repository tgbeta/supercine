//PAGINA COM OS RESULTADOS DE PESQUISA
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieItemSearch from "./MovieItemSearch.jsx";

export default function SearchList() {
  const location = useLocation();
  let movieName = location.state.movieName;
  const [movies, setMovies] = useState([]);
  const [movieSearchList, setMovieSearchList] = useState(movieName);
  const searchRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRef.current.value);
    setMovieSearchList(searchRef.current.value);
  };

  useEffect(() => {
    axios.get(`/movies/search?movie=${movieSearchList}`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, [movieSearchList]);

  return (
    <>
      <Container fluid className="header">
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Search Movie</h2>
              <div className="movie-container">
                <input
                  maxLength={140}
                  placeholder="What movie are you interested in?"
                  className="movie-input"
                  type="text"
                  name="description"
                  ref={searchRef}
                />
                <button className="search-btn">
                  <BiSearchAlt2 />
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={2} className="category-list">
            <h2>Category</h2>
          </Col>
          <Col xs={10}>
            {movies.length > 0 &&
              movies.map((movie) => <MovieItemSearch movie={movie} />)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
