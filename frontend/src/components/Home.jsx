import SearchMovie  from "./Search.jsx";
import { useState } from "react";

export default function Home(props) {

    //Search movie
    //Popular movies
    //Upcoming movies

    const [movieSearch, setMovieSearch] = useState([]);
    
    return (
        <div>
            {
                <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
            }
        </div>
    )

    
}