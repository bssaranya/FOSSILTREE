import React from 'react'
import {Card,CardImg,Img,Image} from "react-bootstrap";
import darkimage from "../../assets/images/darkimage.jpg"
import './HomeScreenBottom.css'
function HomeScreenBottom() {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={darkimage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Header  className="image-text"> WE START OUR JOURNEY ON 2021 AUGUST 8 FROM OUR SWEET LOVELY HOME
          </Card.Header>
         
        
        </Card.ImgOverlay>
        
      </Card>
      // <div>
      //   <Image src={darkimage} fluid />
      //   <h1>WELCOME TO OUR HOME</h1>
      //   <h3>ummma</h3>
      // </div>
    )
}

export default HomeScreenBottom
