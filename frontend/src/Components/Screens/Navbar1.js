import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Image,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiOutlineUser } from "react-icons/hi";
import { GrShop } from "react-icons/gr";
import { GrFavorite } from "react-icons/gr";
import fossil2_45x45 from "../../assets/images/fossil2_45x45.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import fullscreenimagehome from "../../assets/images/fullscreenimagehome.jpeg";
import "./Navbar.css";
// import products from "./products";
import Product from "./Product";
import axios from "axios";

export function Motto() {
  return (
    <div className="my-2">
      <p className="text-center motto border-bottom border-2">
        Recreating Nature Inside a Frame
      </p>
    </div>
  );
}

function Navbar1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }

    fetchProducts();
    
  }, []);
  console.log(products);
  return (
    <Container fluid>
      <div className="nav-css mt-2 " lg={12}>
        <nav>
          <div className="wrapper ">
            <div className="logo">
              <Link to="/">
                <img
                  src={fossil2_45x45}
                  className="logo"
                  style={{ marginBottom: "19px" }}
                />
              </Link>
            </div>

            <ul className="nav-links text-capitalize">
              <li className="mynav">
                <a href="#">Pendant</a>
              </li>
              <li className="mynav">
                <a href="#">Earring</a> 
              </li>
              <li className="mynav">
                <a href="#">Necklace</a>
              </li>
              <li className="mynav">
                <a href="#">MonsoonDiaries</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="image" style={{ marginRight: "530px" }}>
                      <img src={fullscreenimagehome} alt=""></img>
                    </div>

                    <Row className="row">
                      {products.map((product) => (
                        <Col lg={4} key={product._id}>
                          <Product product={product} /> 
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">WallFrames</a>
              </li>
              <li style={{ marginLeft: "50px" }}>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "1.9rem",
                    style: {
                      height: "1rem",
                      width: "2rem",
                      padding: "0 2px",
                    },
                  }}
                >
                  <button className="buttoncolor mx-3">
                    <GrFavorite></GrFavorite>
                  </button>
                  <button className="buttoncolor mx-3">
                    <HiOutlineUser></HiOutlineUser>
                  </button>
                  <button className="buttoncolor mx-3">
                    <GrShop></GrShop>
                  </button>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar1;
