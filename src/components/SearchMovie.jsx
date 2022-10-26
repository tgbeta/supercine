import React, { useState } from 'react';
import axios from "axios";

export default function SearchMovie(props) {

    const { movie, setMovie } = props;

    const [movieText, setMovieText] = useState('');

    const handleInputChange = (e) => {
        setMovieText(e.target.value);
    };

    const handleSubmit = (event) => {}
    
    return (
        <section>
            <div>
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Search Movie</h2>
                <div className='movie-container'>
                    <input  maxLength={140} autocomplete="off" placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movieText} onChange={handleInputChange} />
                    <button className='search-btn'>Search</button>
                </div>
            </form>
            </div>
        </section>
    );
}