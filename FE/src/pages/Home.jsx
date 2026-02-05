import React from 'react';
import HeroBanner from '../components/HeroBanner';
import NewsSection from '../components/NewsSection';
import PartnersSection from '../components/PartnersSection';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className="container">
        <HeroBanner />
      </div>
      <NewsSection />
      <PartnersSection />
    </div>
  );
};

export default Home;