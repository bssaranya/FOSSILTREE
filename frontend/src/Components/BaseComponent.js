import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./Screens/Navbar1.js";
import { Motto } from "./Screens/Navbar1.js";
import "./BaseComponent.css";
import Footer1 from "./Screens/Footer1";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";




function BaseComponent() {
  return (
    <Router>
      <header>
        <Motto />
        <Navbar1 />
      </header>
      <main className="py-3">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen}/>
      </main>
     
      <Footer1/>
    </Router>
  );
}

export default BaseComponent;
