
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";




function Product({product}) {
    return (
        <ul className="mega-links">      
        <li>
            <Link to={`/product/${product._id}`}>{product.name}</Link></li>
        </ul>
        
        
    );
}

export default Product


