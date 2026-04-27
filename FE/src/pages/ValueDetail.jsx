import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { valuePages } from '../data/mockData';
import styles from './NewsDetail.module.scss';

const ValueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const value = valuePages.find((v) => v.id === id);
  const siblings = valuePages.filter((v) => v.id !== id).slice(0, 3);

  if (!value) {
    return (
      <div className={styles.notFound}>
        <p>Page not found.</p>
        <button onClick={() => navigate('/about')}>← Back to About</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <button className={styles.backBtn} onClick={() => navigate('/about')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to About
        </button>
      </div>

      <div className={styles.contentCol}>
        <div className={styles.meta}>
          <span className={styles.categoryBadge}>Our Values</span>
        </div>

        <h1 className={styles.articleTitle}>{value.title}</h1>

        <div className={styles.imageWrap}>
          <img src={value.image} alt={value.title} />
        </div>

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: value.content }}
        />
      </div>

      {siblings.length > 0 && (
        <div className={styles.related}>
          <p className={styles.relatedHeading}>Other Values</p>
          <div className={styles.relatedGrid}>
            {siblings.map((item, index) => (
              <article
                key={item.id}
                className={styles.relatedCard}
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() => navigate(`/about/values/${item.id}`)}
              >
                <img src={item.image} alt={item.title} />
                <div className={styles.relatedBody}>
                  <p className={styles.relatedCat}>Our Values</p>
                  <p className={styles.relatedTitle}>{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ValueDetail;