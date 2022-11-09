//CADA ITEM DE FILME QUE APARECE NA SEARCH LIST
import axios from 'axios';
import React, { useState } from 'react';

export default function MovieItem(props) {

    const {movie} = props;

    return (
        <section>
            <div classname='movie-main' id={movie._id} key={movie._id}>
                {/* <img style={} src={} alt="" /> */}
                <p>{movie.original_title}</p>
                <p>{movie.release_date}</p>
                <h2>{movie.overview}</h2>
            </div>
        </section>
    );

}