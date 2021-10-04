import React from "react";
import FirstCarousel from "./FirstCarousel.js";
import ImageRow from './ImageRow.js';
import IntroImage from './IntroImage'


import "./HomeScreen.css";
import HomeScreenBottom from "./HomeScreenBottom.js";

function HomeScreen() {
  return (
    <div> 
      <FirstCarousel />
      <ImageRow />
      <IntroImage/>
      <HomeScreenBottom />
    </div>
  );
}

export default HomeScreen;
