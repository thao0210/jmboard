import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import styles from './Products.module.scss';

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Product JM', 'Tools'];
  
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show a simple notification
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className={styles.productsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our Products</h1>
          <p className={styles.pageSubtitle}>
            Discover our premium collection of magnetic wall solutions
          </p>
        </div>

        <div className={styles.productsLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Categories</h3>
              <ul className={styles.categoryList}>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className={styles.categoryName}>{category}</span>
                      <span className={styles.categoryCount}>
                        {category === 'All' 
                          ? products.length 
                          : products.filter(p => p.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className={styles.mainContent}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsCount}>
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className={styles.productsGrid}>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={styles.productCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/products/${product.id}`} className={styles.imageWrapper}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.overlay}>
                      <span className={styles.viewDetails}>View Details</span>
                    </div>
                  </Link>
                  
                  <div className={styles.productInfo}>
                    <span className={styles.category}>{product.category}</span>
                    <Link to={`/products/${product.id}`}>
                      <h3 className={styles.productName}>{product.name}</h3>
                    </Link>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    
                    <div className={styles.actions}>
                      <Link to={`/products/${product.id}`} className="btn btn-outline">
                        Details
                      </Link>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1"/>
                          <circle cx="20" cy="21" r="1"/>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;