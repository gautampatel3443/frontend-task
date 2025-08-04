import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    toast.success(`Added "${product.title}" to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <span className="category">{product.category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </Link>
  );
};
export default ProductCard;