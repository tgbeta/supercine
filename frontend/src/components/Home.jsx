import SearchMovie  from "./Search.jsx";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {

    //Search movie
    //Popular movies
    //Upcoming movies

    const [movieSearch, setMovieSearch] = useState([]);
    
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