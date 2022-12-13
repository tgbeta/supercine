import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <>
       <Container fluid className="popular-upcoming">
            <Row className="justify-content-between">             
                {                     
                        movies.map(movie => <Col xs={6} md={3} xl={1} className="col-pointer" onClick={(event) => handleMovieOnClick(event, movie)}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="img-fluid"/>
                            <p>{movie.original_title}</p>
                            </Col>   )
                    }   
            </Row>
       </Container>
        </>
    );
}