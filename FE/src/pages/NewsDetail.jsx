import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { news } from '../data/mockData';
import styles from './NewsDetail.module.scss';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = news.find((n) => String(n.id) === String(id));

  const related = article
    ? [
        ...news.filter((n) => n.id !== article.id && n.category === article.category),
        ...news.filter((n) => n.id !== article.id && n.category !== article.category),
      ].slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className={styles.notFound}>
        <p>Article not found.</p>
        <button onClick={() => navigate('/news')}>← Back to News</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* Back button */}
      <div className={styles.topbar}>
        <button className={styles.backBtn} onClick={() => navigate('/news')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to News
        </button>
      </div>

      {/* Article content */}
      <div className={styles.contentCol}>
        <div className={styles.meta}>
          <span className={styles.categoryBadge}>{article.category}</span>
          <span className={styles.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <h1 className={styles.articleTitle}>{article.title}</h1>
        <p className={styles.lead}>{article.excerpt}</p>

        <div className={styles.imageWrap}>
          <img src={article.image} alt={article.title} />
        </div>

        {article.content ? (
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <div className={styles.body}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2>Key Highlights</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        )}

        <hr className={styles.divider} />

        <div className={styles.shareRow}>
            <span className={styles.shareLabel}>Share:</span>

            <button
                className={styles.shareBtn}
                onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(window.location.href)}`}
            >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                </svg>
                Email
            </button>

            <button
                className={styles.shareBtn}
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
            </button>

            {/* Facebook — icon + share link đúng */}
            <button
                className={styles.shareBtn}
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
            >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
                Facebook
            </button>
            </div>
      </div>

      {/* Related news */}
      {related.length > 0 && (
        <div className={styles.related}>
          <p className={styles.relatedHeading}>Related News</p>
          <div className={styles.relatedGrid}>
            {related.map((item, index) => (
              <article
                key={item.id}
                className={styles.relatedCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/news/${item.id}`)}
              >
                <img src={item.image} alt={item.title} />
                <div className={styles.relatedBody}>
                  <p className={styles.relatedCat}>{item.category}</p>
                  <p className={styles.relatedTitle}>{item.title}</p>
                  <p className={styles.relatedDate}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;