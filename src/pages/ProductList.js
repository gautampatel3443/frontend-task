import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = products;
    if (search) {
      filteredData = filteredData.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category !== 'all') {
      filteredData = filteredData.filter((p) => p.category === category);
    }
    setFiltered(filteredData);
  }, [search, category, products]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Something went wrong.</p>;

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
