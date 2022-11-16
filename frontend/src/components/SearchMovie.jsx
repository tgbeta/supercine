//BARRA DE PESQUISA DA HOME
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

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

            <div>
                <h2 className='form-title'>Find your Best Movie</h2>
                <p>Explore now</p>
            <form onSubmit={handleSubmit}>
                <div className='movie-container'>
                    <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movieSearch} onChange={handleInputChange} />

                    <select name="genderSelect" className='select-gender'>
                        <option selected="selected" value="volvo">Find by Gender</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button className='search-btn' ><BiSearchAlt2 /></button>
                </div>
            </form>
            </div>

    );
}