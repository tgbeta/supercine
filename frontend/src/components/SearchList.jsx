import axios from 'axios';
import React, { useState } from 'react';

export default function SearchList(props) {
        
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