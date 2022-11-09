//PAGINA COM OS RESULTADOS DE PESQUISA
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MovieItemSearch from './MovieItemSearch.jsx';

export default function SearchList() {
    const location = useLocation(); 
    let movieName = location.state.movieName;
    const [movies, setMovies] = useState([]);
    const [movieSearchList, setMovieSearchList] = useState(movieName);  
    const searchRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log (searchRef.current.value)
        setMovieSearchList(searchRef.current.value)
    }

    useEffect(() => {
        axios.get(`/search?movie=${movieSearchList}`).then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
        });
    },[movieSearchList])

    

    return (
        <section>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2 className='form-title'>Search Movie</h2>
                        <div className='movie-container'>
                            <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" ref={searchRef} />
                            <button className='search-btn' >Search</button>
                        </div>
                    </form>
                </div>
                <div>
                {          
                    movies.length > 0 &&           
                    movies.map(movie => <MovieItemSearch movie={movie}/>)
                } 
                </div>
        </section>
    );
}