//PAGINA PRINCIPAL
import SearchMovie  from "./SearchMovie.jsx";
import { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePopular from "./MoviePopular.jsx";
import MovieUpcoming from "./MovieUpcoming.jsx";
import { AppContext } from "../NavBar/AppContext";


export default function Home(props) {
    const user = useContext(AppContext);

    const [movieSearch, setMovieSearch] = useState([]);

    //Search movie
    //Popular movies
    //Upcoming movies

     //usar navigate para passar para a proxima pagina
    //tentar passar o movie

    return (
        <div>
            {
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
                        {!user.isLogIn && (
                            <button onClick={() => user.login()}>Join Us today</button>
                        )}
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
            </>  

            }
        </div>
    )

    
}