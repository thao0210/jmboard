import React from 'react';
import { useNavigate } from 'react-router-dom';
import { valuePages } from '../data/mockData';
import styles from './About.module.scss';

/* ── Icon map (same as ValueDetail) ── */
const ICONS = {
  layers: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  box: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  shield: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  users: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className={styles.pageTitle}>About JMBOARD</h1>
          <p className={styles.tagline}>Ideal for your wall space</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.textContent}>
              <h2>Our Story</h2>
              <p>
                JMBOARD was founded with a simple vision: to transform ordinary walls into functional,
                organized, and beautiful spaces. We understand that in modern living, every inch of space
                matters, and vertical surfaces offer untapped potential for organization and creativity.
              </p>
              <p>
                Our premium magnetic wall solutions are designed and manufactured with the highest quality
                standards, combining Japanese precision engineering with innovative materials to create
                products that last a lifetime.
              </p>
            </div>
            <div className={styles.imageBox}>
              <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop" alt="Modern kitchen" />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.imageBox}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" alt="Quality materials" />
            </div>
            <div className={styles.textContent}>
              <h2>Our Mission</h2>
              <p>
                We are committed to helping people maximize their living and working spaces through
                innovative magnetic solutions. Our products are not just functional – they're designed
                to enhance the aesthetic appeal of any room while providing unparalleled organization
                capabilities.
              </p>
              <p>
                Every JMBOARD product undergoes rigorous testing to ensure it meets our strict quality
                standards and delivers on our promise of durability, functionality, and style.
              </p>
            </div>
          </section>

          <section className={styles.values}>
            <h2>Our Values</h2>
            <div className={styles.valuesGrid}>
              {valuePages.map((value) => (
                <div
                  key={value.id}
                  className={styles.valueCard}
                  onClick={() => navigate(`/about/values/${value.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/about/values/${value.id}`)}
                  aria-label={`Learn more about ${value.title}`}
                >
                  <div className={styles.valueIcon}>
                    {ICONS[value.icon] || ICONS.layers}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.tagline}</p>
                  <span className={styles.learnMore}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;