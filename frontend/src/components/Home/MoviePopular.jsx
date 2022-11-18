import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function MoviePopular() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/movies/popular`).then((res) => {
            console.log("movies Popular",res.data);
            setMovies(res.data.results.slice(9));
        });
    },[])

    return (
        <div>
            {                     
                    movies.map(movie => <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <p>{movie.original_title}</p>
                    </div>)
                } 
        </div>
    );
}