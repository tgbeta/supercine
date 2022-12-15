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
  

   //Favorites
   const handleFavorite=(movie) => {
     // insert favoriteList by movieid, userid
      axios
      .post(`/favorites/add`, {userID: login.user.userid,  movieID: movie})
      .then((res) => {
        setFavorites(res.data);
        showWatchList(login.user.userid);
        console.log("add favorite list", res.data);        
      })
      .catch((erro) => console.log(erro));
  };

  const deleteFavorite=(favid)  => {
       axios
        .post(`/favorites/delete`, {favoriteID: favid, userID: login.user.userid })
        .then((res) => {
          setFavorites(res.data);
          console.log("favorite deleted!", res.data);         
        })
        .catch((erro) => console.log(erro));
   };

   const showMovies = (user) =>{
    showWatchList(user);
    showFavorites(user);
   }

  const showFavorites=(user) =>  {
    axios.post(`/favorites/`, {userID: user})
    .then((res) => {
      setFavorites(res.data);
      console.log('show favorites:', res.data);
    })
    .catch((erro) => console.log(erro));
}
  
  const deleteWatchlist=(watid)  => {
    axios
    .post(`/watchlist/delete`, {watchlistID: watid, userID: login.user.userid })
    .then((res) => {
      setWatchlist(res.data);
      console.log("watchlist deleted!", res.data);      
    })
    .catch((erro) => console.log(erro));
  };  

  const showWatchList=(user) =>  {
    axios.post(`/watchlist/`, {userID: user})
    .then((res) => {
      setWatchlist(res.data);
      console.log('show watchlist:', res.data);
    })
    .catch((erro) => console.log(erro));

  
    }
  
useEffect(() => {    
  //  showWatchList(login.user.userid);  //userid
  //  showFavorites(login.user.userid);
      showMovies(login.user.userid);
}, [login]);


return (

        <>
            <Container fluid className="header-movie-details">
            </Container>
            <Container fluid className="profile-list">
                <h2>My Watch List</h2>
                <Row className="justify-content-start">
                  {watchlist.map((wat) => (
                    <Col xs={12} md={6}	lg={2} className="mb-3">
                      <img src={`${wat.posterpath}`} className="img-fluid" alt="" />
                      <span>{`${wat.movie}`}</span>
                      <button className="btn-remove"  onClick={ () => { deleteWatchlist(wat.id) }}><BsTrash /> Remove</button>
                      <button className="btn-favorites"  onClick={() => {handleFavorite(wat.movieid)}}> <BsHeart /> Add To Favorites</button>
                    </Col>
                  ))}
                </Row>
            </Container>

            <Container fluid className="profile-list">
                <h2>MY Favorites Movies</h2>
                <Row className="justify-content-start"> 
                 {favorites.map((fav) => (
                   <Col xs={12} md={6}	lg={2} className="mb-3">
                      <img src= {`${fav.posterpath}`} className="img-fluid" alt="" />
                      <span>{`${fav.movie}`}</span>
                      <button className="btn-remove" onClick={ () => {deleteFavorite(fav.id)} }><BsTrash /> Remove</button>
                    </Col>
                ))}
                </Row>
            </Container>
        
        </>
    );
}