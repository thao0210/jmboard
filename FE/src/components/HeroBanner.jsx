import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { banners, products } from '../data/mockData';
import styles from './HeroBanner.module.scss';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const getProductById = (id) => products.find(p => p.id === id);

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

            <div className={styles.productHotspots}>
              {banner.products.map((productId, idx) => {
                const product = getProductById(productId);
                if (!product) return null;
                
                const positions = [
                  { top: '35%', left: '25%' },
                  { top: '50%', left: '55%' },
                  { top: '65%', left: '75%' }
                ];
                
                return (
                  <Link
                    key={productId}
                    to={`/products/${productId}`}
                    className={styles.hotspot}
                    style={positions[idx]}
                  >
                    <div className={styles.hotspotPulse}></div>
                    <div className={styles.hotspotContent}>
                      <img src={product.image} alt={product.name} />
                      <span className={styles.hotspotLabel}>{product.id.toUpperCase()}</span>
                    </div>
                    <div className={styles.hotspotTooltip}>
                      <p className={styles.tooltipName}>{product.name}</p>
                      <p className={styles.tooltipPrice}>${product.price}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
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