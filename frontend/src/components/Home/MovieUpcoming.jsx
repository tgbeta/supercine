import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export default function MovieUpcoming() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/movies/upcoming`).then((res) => {
            console.log("movies upcoming",res.data);
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