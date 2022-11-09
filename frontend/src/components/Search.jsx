import axios from 'axios';
import React, { useState } from 'react';
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

export default function SearchMovie(props) {
    const { movieSearch } = props;

    const [movies, setMovies] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (movieSearch == "") {
             alert("What movie are you looking for?");
        } else {
            axios.get(`/search?movie=${movieSearch}`).then((res) => {
                setMovies(res.data.results);
            });
        }


    }

    return (

            <div>
                <h2 className='form-title'>Find your Best Movie</h2>
                <p>Explore now</p>
            <form >
                <div className='movie-container'>
                    <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movieSearch} />

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