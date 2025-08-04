import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error || !product) return <p className="error">Product not found.</p>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-btn">← Back to Products</Link>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <span className="category">{product.category}</span>
          <h3>${product.price}</h3>
          <p className="desc">{product.description}</p>
          <button onClick={() => toast.success(`Added "${product.title}" to cart`)}>
             Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default ProductDetail;
