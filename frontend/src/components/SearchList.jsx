import axios from 'axios';
import React, { useState } from 'react';

export default function SearchList(props) {
    const { SearchList, setSearchList } = props;

    const [search, setSearch] = useState([]);

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
        <section>
            <div>
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Search Movie</h2>
                <div className='search-container'>
                    <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movies} onChange={(e) => setSearch(e.target.value)} />
                    <button className='search-btn'>Search</button>
                    <button className='search-btn'>Favorite List</button>
                    <button className='search-btn'>Watch List</button>
                </div>
            </form>
            </div>
        </section>
    );
}