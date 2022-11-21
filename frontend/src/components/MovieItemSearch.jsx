//CADA ITEM DE FILME QUE APARECE NA SEARCH LIST
import axios from 'axios';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieItem(props) {

    const {movie} = props;

    return (

        <>
            <Col xs={12} className='movie-main' id={movie._id} key={movie._id}>
                <Row>

                {/* <div classname='movie-main' id={movie._id} key={movie._id}> */}
                        
                    <Col xs={2}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={10}>
                        <h2>{movie.original_title}</h2>
                        <span>{movie.release_date}</span>
                        <p>{movie.overview}</p>
                    </Col>               
                {/* </div> */}
                </Row>
            </Col>
        </>
    );

}