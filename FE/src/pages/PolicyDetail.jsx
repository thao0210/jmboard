import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { policies } from '../data/mockData';
import styles from './NewsDetail.module.scss';

const PolicyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const policy = policies.find((p) => p.id === id);

  if (!policy) {
    return (
      <div className={styles.notFound}>
        <p>Page not found.</p>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </button>
      </div>

      <div className={styles.contentCol}>
        <div className={styles.meta}>
          <span className={styles.categoryBadge}>Policy</span>
        </div>

        <h1 className={styles.articleTitle}>{policy.title}</h1>

        {policy.image && (
          <div className={styles.imageWrap}>
            <img src={policy.image} alt={policy.title} />
          </div>
        )}

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: policy.content }}
        />
      </div>

    </div>
  );
};

export default PolicyDetail;