//PAGINA PRINCIPAL
import SearchMovie  from "./SearchMovie.jsx";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePopular from "./MoviePopular.jsx";
import MovieUpcoming from "./MovieUpcoming.jsx";


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
                // <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/>
            <>  
            <Container fluid className="header">
                <Row>
                    <Col>  <SearchMovie movieSearch={movieSearch} setMovieSearch={setMovieSearch}/></Col>
                </Row>
            </Container>  

             <Container fluid className="movies-list">
                <Row>
                    <Col>
                        <h2>Popular Films - Top 10</h2>
                        <MoviePopular />
                    </Col>
                </Row>
            </Container>       

            <Container fluid className="join-us">
                <Row>
                    <Col className="join-us-box">
                        <h2>What is your next movie?</h2>
                        <p>read and post movie reviews</p>
                        <button>Join Us today</button>
                    </Col>
                </Row>
            </Container>    

            <Container fluid className="movies-list">
                <Row>
                    <Col>
                        <h2>Last Releases</h2>
                        <MovieUpcoming />
                    </Col>
                </Row>
            </Container>  

            <Container fluid className="footer">
                <Row>
                    <Col>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Login</li>
                            <li>My List</li>
                        </ul>
                    </Col>
                </Row>
            </Container>    
            </>  

            }
        </div>
    )

    
}