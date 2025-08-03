import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

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
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <span className="category">{product.category}</span>
          <button onClick={() => alert(`Added "${product.title}" to cart!`)}>
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
