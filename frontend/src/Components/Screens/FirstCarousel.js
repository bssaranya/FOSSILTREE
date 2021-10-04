import React from "react";
import Carousel from "react-bootstrap/Carousel";
import resized2 from "../../assets/images/resized2.jpeg";
import mangomodel4 from "../../assets/images/mangomodel4.jpeg";
import { MDBRipple } from "mdb-react-ui-kit";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./FirstCarousel.css";

function FirstCarousel() {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={resized2} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <Carousel.Caption>
    
              <div>
                <Button variant="light" className="carousel-button text-capitalize">Discover More</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={mangomodel4} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <Carousel.Caption>
              <div>
              <Button variant="light" className="carousel-button text-capitalize" style={{fontFamily: "MangoSans"}}>Discover More</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default FirstCarousel;
