import React from 'react';
import { partners } from '../data/mockData';
import styles from './PartnersSection.module.scss';

const PartnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <h2 className={styles.title}>Our Trusted Partners</h2>
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className={styles.partnerCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;