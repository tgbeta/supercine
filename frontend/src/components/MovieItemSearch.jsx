import axios from 'axios';
import React, { useState } from 'react';

export default function MovieItem(props) {

    const {movie} = props;

    const [favorite, setFavorite] = useState(false);
    const [watchList, setWatchList] = useState(false);

    const handleFavorite = () => {
        setFavorite(!favorite); // usar true e false para validacao da lista

        if ( favorite == true) {

            //passar o conteudo de movies para o banco
        } 
        // dentro do controlle, fazer requisicao pra API, pra pegar as info do filme e depois saalvar no db
    }

    const handleWatchList = () => {
        setWatchList(!watchList);

        if ( watchList == true) {

        } 
    }


    return (
        <section>
            <div classname='movie-main' id={movie._id} key={movie._id}>
                {/* <img style={} src={} alt="" /> */}
                <p>Texto filme</p>
                <button className='search-btn' onClick={handleFavorite}>Favorite</button>
                <button className='search-btn' onClick={handleWatchList}>Watch List</button>
            </div>
        </section>
    );

}