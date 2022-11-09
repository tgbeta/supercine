//PAGINA PRINCIPAL
import SearchMovie  from "./SearchMovie.jsx";
import { useState } from "react";


export default function Home(props) {

    const [movieSearch, setMovieSearch] = useState([]);

    //Search movie
    //Popular movies
    //Upcoming movies

     //usar navigate para passar para a proxima pagina
    //tentar passar o movie

    return (
        <div>
            {
                <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
            }
        </div>
    )

    
}