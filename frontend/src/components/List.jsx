import axios from 'axios';
import React, { useState } from 'react';

export default function FavoriteList(props) {
    const { FavoriteList, setFavoriteList } = props;

    const [favorite, setFavorite] = useState([]);

    return (
        <section>
            <div>
                <h2 className='form-title'>My Watch List</h2>
                <div className='watch-list-container'>
            </div>
            <div>
                <h2 className='form-title'>My Movies</h2>
                <div className='watch-list-container'>
            </div>
        </section>
    );
}