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
    axios.get(`/favorites/`, {userID: user})
    .then((res) => {
      console.log(res.data.results);
    //  setFavorites(res.data.results);
    });
  
  
  }
  
  
  const showWatchList=(user) =>  {
    axios.get(`/watchlist/`, {userID: user})
    .then((res) => {
      console.log(res.data.results);
     // setWatchlist(res.data.results);
    });
  
  }
  

showWatchList(login.user.userid);  //userid

showFavorites(login.user.userid);


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