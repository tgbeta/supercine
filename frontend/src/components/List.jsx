//PAGINA DE FAVORITOS E PENDENTES DE ASSISTIR
import axios from 'axios';
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./NavBar/AppContext";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsHeart, BsTrash } from "react-icons/bs";

export default function FavoriteList(props) {
  const login = useContext(AppContext);
  
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  

  const showFavorites=(user) =>  {
    axios.post(`/favorites/`, {userID: user})
    .then((res) => {
      setFavorites(res.data);
      console.log('teste favorites:', res.data);
    })
    .catch((erro) => console.log(erro));
}
  
  
  const showWatchList=(user) =>  {
    axios.post(`/watchlist/`, {userID: user})
    .then((res) => {
      setWatchlist(res.data);
      console.log('teste watchlist:', res.data);
    })
    .catch((erro) => console.log(erro));
    }
  

showWatchList(login.user.userid);  //userid

showFavorites(login.user.userid);


 return (

        <>
            <Container fluid className="header-movie-details">
            </Container>

            <Container fluid className="profile-list">
                <h2>My Watch List</h2>
                {watchlist.map((wat) => (
                <div>
                  <h3>{wat.id}</h3>
                  <p>{wat.movieid}</p>
                  <p>{wat.movie}</p>
                  <p>{wat.posterpath}</p>
                  <p>{wat.trailerlink}</p>
                  <p>{wat.dtreleased}</p>
                </div>
                ))}
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
                {favorites.map((fav) => (
                <div>
                  <h3>{fav.id}</h3>
                  <p>{fav.movieid}</p>
                  <p>{fav.movie}</p>
                  <p>{fav.posterpath}</p>
                  <p>{fav.trailerlink}</p>
                  <p>{fav.dtreleased}</p>
                </div>
                ))}

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