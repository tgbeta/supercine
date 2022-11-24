//PAGINA DE DETALHES DO FILME
import axios from 'axios';
import React, { useState, useContext, useEffect} from 'react';
import { AppContext } from './NavBar/AppContext';
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Ratio from "react-bootstrap/Ratio";
import {
  BsHeart,
  BsTextareaT,
  BsBookmarks,
  BsChevronDoubleLeft,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Movie(props) {
  const location = useLocation();
  let movie = location.state.movieSearchDetails;

  const [movieDetails, setMovieDetails] = useState(movie);

  useEffect(() => {
    axios.post(`/movies/details`, { movieID: movie.id }).then((res) => {
      setMovieDetails(res.data.results);
    });
  }, []);

  const [favorite, setFavorite] = useState(false);
  const [watchList, setWatchList] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite); // usar true e false para validacao da lista

    if (favorite == true) {
      //passar o conteudo de movies para o banco
    }
    // dentro do controlle, fazer requisicao pra API, pra pegar as info do filme e depois saalvar no db
  };

  const handleWatchList = () => {
    setWatchList(!watchList);

    if (watchList == true) {
    }
    
    const login = useContext(AppContext);
    console.log("user",login.user)

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandle = () => {
        setComments((comments) => [...comments, comment])
    }
    const onChangeHandle = (e) => {
        setComment(e.target.value);
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
                    <a href="#write-review"><button><BsTextareaT /> Write Your Reviwe</button></a>
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
                    <h2 id="write-review">write your Reviews</h2>
                    <form>
                        <textarea value={comment} onChange={onChangeHandle} cols="30" rows="10"></textarea>
                        <input onClick={onClickHandle} type="submit" value="Send"></input>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className="all-reviwes">
                    <h2>Reviews</h2>
                        {comments.map((text) => (
                        <div>
                            <h3>{login.user}</h3>
                            <p>
                                {text}
                            </p>
                        </div>
                        ))}

                </Col>
            </Row>
        </Container>
    </>
  );
}}
