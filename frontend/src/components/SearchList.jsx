import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchMovie from "./Search.jsx";

export default function SearchList(props) {
        
    //usar navigate para passar para a proxima pagina
    //tentar passar o movie

    const { movieSearch, setMovieSearch } = props;

    return (
        <section>
            <div>
            {
                <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
            }
            </div>
        </section>
    );
}