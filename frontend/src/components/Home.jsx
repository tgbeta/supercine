import SearchMovie from "./Search.jsx";

export default function Home(props) {

    //Search movie
    //Popular movies
    //Upcoming movies

    
    return (
        <div>
            {
                <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
            }
        </div>
    )

    
}