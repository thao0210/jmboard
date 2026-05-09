import React from 'react';
import { Link } from 'react-router-dom';
import { products, projects, categoryTree } from '../data/mockData';
import { useCategory } from '../context/CategoryContext';
import CategorySidebar from '../components/CategorySidebar';
import styles from './Products.module.scss';

// Map key -> label để hiển thị title
const labelMap = categoryTree.reduce((acc, parent) => {
  acc[parent.key] = parent.label;
  parent.children.forEach((child) => {
    acc[child.key] = child.label;
  });
  return acc;
}, {});

const Products = ({ addToCart }) => {
  const { selected, setSelected } = useCategory();

  const pageTitle = selected ? (labelMap[selected] ?? selected) : 'Our Products';

  const isProjectMode =
    selected === 'Project' ||
    selected === 'Commercial' ||
    selected === 'Residential';

  const filteredProducts =
    !selected || isProjectMode
      ? products
      : products.filter((p) => p.category === selected || p.subcategory === selected);

  const filteredProjects =
    !isProjectMode
      ? []
      : selected === 'Project'
      ? projects
      : projects.filter((p) => p.type === selected);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className={styles.productsPage}>
      <div className="container">
        <div className={styles.productsLayout}>
          <CategorySidebar selected={selected} onSelect={setSelected} />

          <main className={styles.mainContent}>
            <h1 className={styles.pageTitle}>{pageTitle}</h1>

            {!isProjectMode && (
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
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isProjectMode && (
              <div className={styles.projectsGrid}>
                {filteredProjects.map((project, index) => (
                  <article
                    key={project.id}
                    className={styles.projectCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link to={`/projects/${project.id}`} className={styles.projectImageWrapper}>
                      <img src={project.coverImage} alt={project.title} />
                      <span className={styles.projectTypeBadge}>{project.type}</span>
                    </Link>

                    <div className={styles.projectInfo}>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectMetaItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {project.location}
                        </span>
                        <span className={styles.projectMetaItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {project.year}
                        </span>
                      </div>

                      <Link to={`/projects/${project.id}`}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                      </Link>
                      <p className={styles.projectSummary}>{project.summary}</p>

                      <Link to={`/projects/${project.id}`} className={`btn btn-outline ${styles.projectBtn}`}>
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;