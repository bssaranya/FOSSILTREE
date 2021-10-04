import React, { useState, useEffect } from "react";
import { Link, link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import fullscreenimagehome from "../../assets/images/fullscreenimagehome.jpeg";
import "./ProductScreen.css";
import axios from "axios";

function ProductScreen({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`); 
      setProduct(data);
    }

    fetchProduct();
  }, []);

  console.log(match);
  return (
    <div>
      <Row className="pdp-screen">
        <Col md={7}>
          <Image
            src={fullscreenimagehome}
            alt="productname"
            loading="lazy"
            className="ml-4"
            fluid
          />
        </Col>
        <Col md={3} className="product-card">
          <ListGroup variant="flush">
            <div className="product-title">
              <ListGroup.Item>{product.name}</ListGroup.Item>
            </div>
            <Card className="price-card">
              <ListGroup variant="flush">
                <ListGroup.Item className="mr-4 mt-4 p-4">
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block cart-button"
                    variant="light"
                    type="button"
                    disabled={product.countInStock == 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <div className="product-description">
              <label for="description">{product.description}</label>
            </div>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
