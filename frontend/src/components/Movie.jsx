//PAGINA DE DETALHES DO FILME
import axios from 'axios';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Ratio from 'react-bootstrap/Ratio';
import { BsHeart, BsTextareaT, BsBookmarks } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Movie(props) {

    const [favorite, setFavorite] = useState(false);
    const [watchList, setWatchList] = useState(false);

    const {movie} = props;

    const handleFavorite = () => {
        setFavorite(!favorite); // usar true e false para validacao da lista

        if ( favorite == true) {

            //passar o conteudo de movies para o banco
        } 
        // dentro do controlle, fazer requisicao pra API, pra pegar as info do filme e depois saalvar no db
    }

    const handleWatchList = () => {
        setWatchList(!watchList);

        if ( watchList == true) {

        } 
    }

    return (
        <>
        <Container fluid className="header-movie-details">
        </Container>

        <Container className="movie-details">
            <Row>
                <Col xs={3}>
                    <img src="https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg" className="img-fluid" alt="" />
                </Col>
                <Col xs={9}>
                    <h2>Movie Name</h2>
                    <span>2022-03-01</span>
                    <span className="gender">Adventure, Comedy, Horror, Family</span>
                    <h3>Sinopse</h3>
                    <p>In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</p>
                    <button onClick={handleFavorite}><BsBookmarks /> Add To Watch List</button>
                    <button onClick={handleWatchList}><BsHeart /> Add To Favorites</button>
                    <button onClick={handleWatchList}><BsTextareaT /> Write Your Reviwe</button>
                </Col>
            </Row>
        </Container>

        <Container fluid className="trailer">
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <h2>trailer</h2>
                    <Ratio aspectRatio={1 / 2}>
                        <div>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mqqft2x_Aa4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                     </Ratio>                  
                </Col>
            </Row>
        </Container>

        <Container className="reviews">
            <Row>
                <Col>
                    <h2>write your Reviews</h2>
                    <form>
                        <input type="text"></input><br></br>
                        <input type="submit" value="Send"></input>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className="all-reviwes">
                    <h2>Reviews</h2>
                    <div>
                        <h3>Fulano de tal</h3>
                        <p>
                        Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including The Riddler, The Joker, Catwoman, and The Penguin.
                        </p>
                    </div>

                </Col>
            </Row>
        </Container>

        {/* <section>
            <div className='movie-main' id={movie._id} key={movie._id}>
                <img style={} src={} alt="" />
                <p>Data do filme</p>
                <p>Genero</p>
                <p>Texto filme</p>
                <button className='search-btn' onClick={handleFavorite}>Favorite</button>
                <button className='search-btn' onClick={handleWatchList}>Watch List</button>
                <button className='search-btn' onClick={handleWatchList}>Write Review</button>
            </div>
        </section> */}
        </>   

    );
}