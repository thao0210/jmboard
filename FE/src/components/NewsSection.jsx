import React, { useState } from 'react';
import { news } from '../data/mockData';
import styles from './NewsSection.module.scss';

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Product', 'Home', 'Others'];
  
  const filteredNews = activeCategory === 'All' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Latest News</h2>
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.newsGrid}>
          {filteredNews.map((item, index) => (
            <article 
              key={item.id} 
              className={styles.newsCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <span className={styles.category}>{item.category}</span>
              </div>
              <div className={styles.content}>
                <p className={styles.date}>{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <button className={styles.readMore}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;