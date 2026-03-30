import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categoryTree } from '../data/mockData';
import styles from './Products.module.scss';

const Products = ({ addToCart }) => {
  // null = show all, string = filter by category or subcategory key
  const [selected, setSelected] = useState(null);
  // track which parent categories are expanded
  const [expanded, setExpanded] = useState({ 'Product JM': true, 'Magnetic Tools': false, 'Project': false });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredProducts = !selected
    ? products
    : products.filter(
        (p) => p.category === selected || p.subcategory === selected
      );

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const getCount = (key) =>
    products.filter((p) => p.category === key || p.subcategory === key).length;

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
          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Categories</h3>

              {/* All */}
              <button
                className={`${styles.parentItem} ${!selected ? styles.active : ''}`}
                onClick={() => setSelected(null)}
              >
                <span>All Products</span>
                <span className={styles.count}>{products.length}</span>
              </button>

              {categoryTree.map((parent) => (
                <div key={parent.key} className={styles.categoryGroup}>
                  {/* Parent row */}
                  <div className={styles.parentRow}>
                    <button
                      className={`${styles.parentItem} ${selected === parent.key ? styles.active : ''}`}
                      onClick={() => setSelected(parent.key)}
                    >
                      <span>{parent.label}</span>
                      <span className={styles.count}>{getCount(parent.key)}</span>
                    </button>
                    {/* Expand toggle */}
                    <button
                      className={styles.expandBtn}
                      onClick={() => toggleExpand(parent.key)}
                      aria-label="toggle"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: expanded[parent.key] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {/* Children */}
                  {expanded[parent.key] && (
                    <ul className={styles.childList}>
                      {parent.children.map((child) => (
                        <li key={child.key}>
                          <button
                            className={`${styles.childItem} ${selected === child.key ? styles.activeChild : ''}`}
                            onClick={() => setSelected(child.key)}
                          >
                            <span>{child.label}</span>
                            <span className={styles.count}>{getCount(child.key)}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* ── Product grid ── */}
          <main className={styles.mainContent}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsCount}>
                Showing {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
                {selected ? ` in "${selected}"` : ''}
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
                    <div className={styles.badges}>
                      <span className={styles.categoryBadge}>{product.category}</span>
                      {product.subcategory && (
                        <span className={styles.subcategoryBadge}>{product.subcategory}</span>
                      )}
                    </div>
                    <Link to={`/products/${product.id}`}>
                      <h3 className={styles.productName}>{product.name}</h3>
                    </Link>
                    {product.price > 0 ? (
                      <p className={styles.price}>${product.price.toFixed(2)}</p>
                    ) : (
                      <p className={styles.priceProject}>Contact for pricing</p>
                    )}

                    <div className={styles.actions}>
                      <Link to={`/products/${product.id}`} className="btn btn-outline">
                        Details
                      </Link>
                      {product.price > 0 && (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCart(product)}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          Add to Cart
                        </button>
                      )}
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