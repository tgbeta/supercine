//BARRA DE PESQUISA DA HOME
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

export default function SearchMovie(props) {
    const {movieSearch, setMovieSearch} = props;

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setMovieSearch(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (movieSearch == "") {
             alert("What movie are you looking for?");
        } else {
            console.log(movieSearch);
            navigate("/SearchList", {
                state: {
                  movieName: movieSearch,
                }
              });
        }
    }



    return (
        <section>
            <div>
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Search Movie</h2>
                <div className='movie-container'>
                    <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movieSearch} onChange={handleInputChange} />
                    <button className='search-btn' >Search</button>
                </div>
            </form>
            </div>
        </section>
    );
}