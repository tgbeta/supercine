//PAGINA DE FAVORITOS E PEDENTES DE ASSISTIR
import axios from "axios";
import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsHeart, BsTrash } from "react-icons/bs";
import clelia from "../assets/clelia.png";
import tatiana from "../assets/tatiana.png";
import vini from "../assets/vini.png";
import { BsLinkedin } from "react-icons/bs";

export default function AboutUs() {
  return (
    <>
         <Container fluid className="header-movie-details"></Container>

         <Container className="about-us">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
                Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including The Riddler, The Joker, Catwoman, and The Penguin.

                acing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including The Riddler, The Joker, Catwoman, and The Penguin.</p>
           
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Our team</h2> 
          </Col>
        </Row>
        <Row>
         <Col xs={4}>
             <img src={clelia}></img>
             <h3>Clelia Marcia</h3>
             <p>I am a devoted mother. Who loves God, traveling and learning new cultures and languages. Kind of nerd. Database specialist, graduated in Computer Science and also entrepreneur in the field of education and tourism. Working hard and looking forward to rebuilding my career in Vancouver</p>
            <a href="https://br.linkedin.com/in/cleliamarcia" target="_blank"><span>< BsLinkedin /></span> </a> 
         </Col>
         <Col xs={4}>
             <img src={tatiana}></img>
             <h3>Tatiana Bohrer</h3>
             <p>I am Tatiana, from Brazil. I am interested in books, games, TV shows, and travel. Currently, I am learning new programming languages, and looking to collaborate on open-source projects where I can help the community. You can reach me by Linkedin</p>
              <a href="https://www.linkedin.com/in/tatiana-bohrer/" target="_blank"><span>< BsLinkedin /></span> </a> 
         </Col>
         <Col xs={4}>
             <img src={vini}></img>
             <h3>Vini Guimaraes</h3>
             <p>Web designer with 8+ years of experience in one of the biggest Pharmaceutical Industries in Brazil called Hypera Pharma. I currently reside in Vancouver Canada and studying Web Development at Cornerstone College.</p>
              <a href="https://www.linkedin.com/in/guimaraesvinicius/" target="_blank"><span>< BsLinkedin /></span> </a> 
         </Col>
        </Row>
      </Container>

    </>
  );
}