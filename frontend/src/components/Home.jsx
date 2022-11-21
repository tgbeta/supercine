//PAGINA PRINCIPAL
import SearchMovie  from "./SearchMovie.jsx";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer.jsx";


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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Container>  
            </>  

            }
        </div>
    )

    
}