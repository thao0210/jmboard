import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <h3 className={styles.footerLogo}>JMBOARD</h3>
              <p className={styles.footerTagline}>Ideal for your wall space</p>
              <p className={styles.description}>
                Premium magnetic wall solutions for modern living. 
                Transform your space with our innovative products.
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Products</h4>
            <ul>
              <li><a href="/products?category=Product JM">Magnetic Boards</a></li>
              <li><a href="/products?category=Tools">Magnetic Tools</a></li>
              <li><a href="/products">All Products</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Tokyo, Japan
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@jmboard.com
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +81 XX-XXXX-XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.colorBar}>
            <div style={{ background: 'var(--color-primary)' }}></div>
            <div style={{ background: 'var(--color-gold)' }}></div>
            <div style={{ background: 'var(--color-orange)' }}></div>
          </div>
          <p className={styles.copyright}>
            &copy; {currentYear} JMBOARD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;