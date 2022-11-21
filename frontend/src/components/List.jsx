//PAGINA DE FAVORITOS E PEDENTES DE ASSISTIR
import axios from 'axios';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsHeart, BsTrash } from "react-icons/bs";

export default function FavoriteList(props) {
    

    return (

        <>
            <Container fluid className="header-movie-details">
            </Container>

            <Container fluid className="profile-list">
                <h2>My Watch List</h2>
                <Row className="justify-content-start">
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name Teste</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                      <button className="btn-remove"><BsTrash /> Remove</button>
                      <button className="btn-favorites"><BsHeart /> Add To Favorites</button>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="profile-list">
                <h2>MY Favorites Movies</h2>
                <Row className="justify-content-start">
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                            <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                           <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                            <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                            <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                            <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                           <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                              <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                           <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                           <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                    <Col xs={2}>
                      <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                      <span>Movie Name</span>
                            <button className="btn-remove"><BsTrash /> Remove</button>
                    </Col>
                </Row>
            </Container>
        
        </>
    );
}