import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { banners, products } from '../data/mockData';
import styles from './HeroBanner.module.scss';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const itemsPerPage = 5;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextProducts = () => {
    setCurrentProductIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProducts = () => {
    setCurrentProductIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProducts = products.slice(currentProductIndex, currentProductIndex + itemsPerPage);

  return (
    <div className={styles.heroBanner}>
      <div className={styles.bannerContainer}>
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <img src={banner.image} alt={banner.title} className={styles.bannerImage} />
            <div className={styles.overlay}></div>
            <div className={styles.bannerContent}>
              <div className="container">
                <h2 className={styles.bannerTitle}>{banner.title}</h2>
              </div>
            </div>
          </div>
        ))}

        {/* Product Hotspots Collection - Overlay on banner bottom */}
        <div className={styles.productCollection}>
          <button 
            className={`${styles.productNavButton} ${styles.prev}`} 
            onClick={prevProducts}
            disabled={currentProductIndex === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className={styles.productSlider}>
            {visibleProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={styles.productHotspot}
              >
                <div className={styles.hotspotPulse}></div>
                <div className={styles.productHotspotContent}>
                  <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.productName}>{product.name.substring(0, 18)}...</p>
                  </div>
                </div>
                <div className={styles.hotspotTooltip}>
                  <p className={styles.tooltipName}>{product.name}</p>
                  <p className={styles.tooltipPrice}>${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <button 
            className={`${styles.productNavButton} ${styles.next}`} 
            onClick={nextProducts}
            disabled={currentProductIndex >= maxIndex}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;