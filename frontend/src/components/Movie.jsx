//PAGINA DE DETALHES DO FILME
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./NavBar/AppContext";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Ratio from "react-bootstrap/Ratio";
import Modal from 'react-bootstrap/Modal';
import {
  BsHeart,
  BsTextareaT,
  BsBookmarks,
  BsChevronDoubleLeft,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Movie(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const user = useContext(AppContext);
  const location = useLocation();
  let movie = location.state.movieSearchDetails;
  const navigate = useNavigate()
  const [movieDetails, setMovieDetails] = useState({});
  
  const login = useContext(AppContext);

    // Movie DB
    const addMovieDB = (movieapi) => {
      axios
      .post(`/moviesdb`, {movieTitle: movie.original_title,  movieapiID: movie.id , adult: movie.adult,  posterpath: movie.poster_path,  trailerlink: movie.trailer, dtreleased: movie.release_date})
      .then((res) => {
        console.log('new movie:',res.data);
        setMovieDetails({...movieapi, movieDB: res.data.movieid});  // getmovieid by title
        ListReview(res.data.movieid);  
      })
      .catch((erro) => console.log(erro));

      // insert movie genres

    };

  //MovieUSer
  const getMovieUser = (mID,uID) => {
  
    // get list of movies by movieid, userid
        axios
        .post(`/moviesdb/movieuser`, {movieID: mID, userID: uID})
        .then((res) => {
          console.log("movieuser", res.data);
        })
        .catch((erro) => console.log(erro));

};

useEffect(() => {
if (login.user && movieDetails.movieDB) {
  getMovieUser( movieDetails.movieDB ,  login.user.userid ); 
}
}, [login, movieDetails ]);

  useEffect(() => {
    axios
      .post(`/movies/details`, { movieID: movie.id })
      .then((res) => {
        setMovieDetails(res.data);
        addMovieDB(res.data);  //insert new movie detailed to DB
      })
      .catch((erro) => console.log(erro));
  }, []);


  const [favorite, setFavorite] = useState(false);
  const [watchList, setWatchList] = useState(false);

  const adicionado = document.querySelector(".addedWatch");
  const favoriteadicionado = document.querySelector(".addedFavorite");
  

  //WatchList
  const handleWatchList = () => {

    adicionado.innerText = "Added To Watch List"
  
      // insert watchlist by movieid, userid
          axios
          .post(`/watchlist/add`, {userID: login.user.userid,  movieID: movieDetails.movieDB })
          .then((res) => {
            console.log("watchlist", res.data);
          })
          .catch((erro) => console.log(erro));



  };


  //Favorites
  const handleFavorite = () => {

    favoriteadicionado.innerText = "Added as Favorite"
      
     // insert favoriteList by movieid, userid
      axios
      .post(`/favorites/add`, {userID: login.user.userid,  movieID: movieDetails.movieDB })
      .then((res) => {
        console.log("add favorite movie", res.data);
      })
      .catch((erro) => console.log(erro));

  };


//REVIEW

  // const login = useContext(AppContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

// console.log("user", user);

  const ListReview = (movieDB) => {
    axios
      .post(`/reviews`, {movieID: movieDB})
      .then((res) => {
        setComments(res.data);
        console.log('list review:', res.data);
      })
      .catch((erro) => console.log(erro));
  
 }

  
  //Reviews
  const onClickHandle = (e) => {
    e.preventDefault();
    if(user.isLogIn){
      // insert Review by movieid, userid, comment, rate
      axios
      .post(`/reviews/add`, {userID: login.user.userid,  movieID: movieDetails.movieDB, review: comment, rate: 5})
      .then((res) => {
        console.log("add review", res.data);
        setComments(res.data);
        setComment("");
      })
      .catch((erro) => console.log(erro));

    }else{
      user.login()
    }
  };
  const onChangeHandle = (e) => {
    setComment(e.target.value);
  };

  //Genres check
  let genres = "";
  if (movieDetails.genres) {
    genres = movieDetails.genres.join(",");
  }
console.log("user", user)

return (
    <>
      <Container fluid className="header-movie-details"></Container>

      <Container className="movie-details">
        <Row className="justify-content-center">
          <Col xs={10} md={3} className="mb-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col xs={10} md={9}>
            <h2>{movieDetails.original_title}</h2>
            <span>{movieDetails.release_date}</span>
            <span className="gender">{genres}</span>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
            <button className="addedWatch" onClick={handleWatchList}>
              <BsBookmarks /> Add To Watch List
            </button>
            <button className="addedFavorite" onClick={handleFavorite}>
              <BsHeart /> Add To Favorites
            </button>
 
               {!user.isLogIn ? (
                <button onClick={() => user.login()}><BsTextareaT /> Write Your Reviews</button>
              ) : (
                <button onClick={handleShow}><BsTextareaT /> Write Your Reviews</button>
              )}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
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
              <input onClick={(e) =>{onClickHandle(e); handleClose()}} type="submit" value="Send"></input>
            </form>
          </Col>
        </Row>
                </Container>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>

      <Container fluid className="trailer">
        <Row className="justify-content-md-center">
          <Col xs={12}>
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
        <Row className="justify-content-center">
          <Col xs={10}>
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
        <Row className="justify-content-center">
          <Col className="all-reviwes" xs={10}>
            <h2>Reviews</h2>
            {comments.map((text) => (
              <div>
                <h3>{text.username}</h3>
                <p>{text.review}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
