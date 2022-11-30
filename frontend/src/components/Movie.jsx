//PAGINA DE DETALHES DO FILME
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./NavBar/AppContext";
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

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .post(`/movies/details`, { movieID: movie.id })
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  const [favorite, setFavorite] = useState(false);
  const [watchList, setWatchList] = useState(false);

  //Favorites
  const handleFavorite = () => {
    setFavorite(!favorite); // usar true e false para validacao da lista

    if (favorite == true) {
      //passar o conteudo de movies para o banco
    }
    // dentro do controlle, fazer requisicao pra API, pra pegar as info do filme e depois saalvar no db
  };

  //WatchList
  const handleWatchList = () => {
    setWatchList(!watchList);

    if (watchList == true) {
    }
  };

  const login = useContext(AppContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  console.log("user", login.user);

  //Reviews
  const onClickHandle = (e) => {
    e.preventDefault();
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandle = (e) => {
    setComment(e.target.value);
  };

  //Genres check
  let genres = "";
  if (movieDetails.genres) {
    genres = movieDetails.genres.join(",");
  }

  return (
    <>
      <Container fluid className="header-movie-details"></Container>

      <Container className="movie-details">
        <Row>
          <Col xs={3}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col xs={9}>
            <h2>{movieDetails.original_title}</h2>
            <span>{movieDetails.release_date}</span>
            <span className="gender">{genres}</span>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
            <button onClick={handleFavorite}>
              <BsBookmarks /> Add To Watch List
            </button>
            <button onClick={handleWatchList}>
              <BsHeart /> Add To Favorites
            </button>
            <button onClick={handleWatchList}>
              <BsTextareaT /> Write Your Reviews
            </button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="trailer">
        <Row className="justify-content-md-center">
          <Col xs={10}>
            <h2>trailer</h2>
            <Ratio aspectRatio={1 / 2}>
              <div>
                <iframe
                  width="100%"
                  height="100%"
                  src={movieDetails.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
              <textarea
                value={comment}
                onChange={onChangeHandle}
                cols="30"
                rows="10"
              ></textarea>
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
                <p>{text}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}