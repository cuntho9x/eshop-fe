// components/Footer.js

import React from 'react';
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faShare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['section']}>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">
                <FontAwesomeIcon icon={faShare} className={styles['share-icon']}/>
            </button>
          </form>
        </div>
        
        <div className={styles['section']}>
          <h3>Support</h3>
          <address>ThuongMaiUniversity, Caugiay, HaNoi, VietNam.</address>
          <p>exclusive@gmail.com</p>
          <p>+09-8888-9999</p>
        </div>

        <div className={styles['section']}>
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div className={styles['section']}>
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles['section']}>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className={styles['appLinks']}>
            <img src="/image/GooglePlay.png" alt="Get it on Google Play" />
            <img src="/image/AppStore.png" alt="Download on the App Store" />
          </div>
          <div className={styles['socialLinks']}>
          <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles['icon']} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles['icon']} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles['icon']} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className={styles['icon']} /></a>
          </div>
        </div>
      </div>
      <div className={styles['copyright']}>
        <p>© Copyright GG. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
