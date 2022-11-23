import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieUpcoming() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/movies/upcoming`).then((res) => {
            console.log("movies upcoming",res.data);
            setMovies(res.data.results.slice(9));
        });
    },[])

    return (
        <>
          <Container fluid className="popular-upcoming">
            <Row className="justify-content-between">      
            {                   
                    movies.map(movie => <Col xs={1}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="" />
                        <p>{movie.original_title}</p>
                        </Col> )
                } 
            </Row>
        </Container>
        </>
    );
}