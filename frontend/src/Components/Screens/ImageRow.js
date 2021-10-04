import React from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";
import naturemodel3 from "../../assets/images/naturemodel3.jpeg";
import naturemodel1 from "../../assets/images/naturemodel1.jpeg";
import "./ImageRow.css";

function ImageRow() {
  return (
    <div className="second-carousel">
      <Row>
        <Col xs={6} md={4}>
          <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel3} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel3} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel3} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel1} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel1} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={naturemodel1} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
      </Row>
    </div>
  );
}

export default ImageRow;
