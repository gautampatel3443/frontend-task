import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <span className="category">{product.category}</span>
    <button onClick={(e) => {
      e.preventDefault(); // Prevent link click
      alert(`Added "${product.title}" to cart!`);
    }}>
      Add to Cart
    </button>
  </Link>
  
  );
};

export default ProductCard;
