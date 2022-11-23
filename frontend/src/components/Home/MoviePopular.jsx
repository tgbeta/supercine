import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MoviePopular() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/movies/popular`).then((res) => {
            console.log("movies Popular",res.data);
            setMovies(res.data.results.slice(9));
        });
    },[])

    return (
        <>
       <Container fluid className="popular-upcoming">
            <Row className="justify-content-between">             
                {                     
                        movies.map(movie => <Col xs={1}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="img-fluid"/>
                            <p>{movie.original_title}</p>
                            </Col>   )
                    }   
            </Row>
       </Container>
            {/* <div>
            </div> */}
        </>
    );
}