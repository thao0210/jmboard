import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/mockData';
import styles from './ProductDetails.module.scss';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h2>Product not found</h2>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div className={styles.productDetails}>
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className={styles.infoSection}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            <div className={styles.details}>
              <h3>Product Details</h3>
              <ul>
                <li><strong>Dimensions:</strong> {product.dimensions}</li>
                <li><strong>Material:</strong> {product.material}</li>
              </ul>
            </div>

            <div className={styles.features}>
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.purchase}>
              <div className={styles.quantitySelector}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button className="btn btn-primary" onClick={handleAddToCart}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className={styles.relatedSection}>
            <h2>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(relProduct => (
                <Link 
                  key={relProduct.id} 
                  to={`/products/${relProduct.id}`}
                  className={styles.relatedCard}
                >
                  <img src={relProduct.image} alt={relProduct.name} />
                  <div className={styles.relatedInfo}>
                    <h4>{relProduct.name}</h4>
                    <p>${relProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;