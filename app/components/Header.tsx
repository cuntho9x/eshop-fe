import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import CSS thủ công
import '../lib/fontawesome'; // Import file cấu hình Font Awesome
import styles from './Header.module.scss'; // Import SCSS

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      {/* Sale Banner */}
      <div className={styles['banner-header']}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
        <a href="#" className="underline">ShopNow</a>
      </div>

      <div className={styles['inner']}>
        {/* Logo */}
        <div className={styles['logo-link']}>
          <Link href="/">Exclusive</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <Link className={styles['header-link']} href="/home">Home</Link>
          <Link className={styles['header-link']} href="/contact">Contact</Link>
          <Link className={styles['header-link']} href="/about">About</Link>
          <Link className={styles['header-link']} href="/signup">Sign Up</Link>
        </nav>

        {/* Search Bar */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <button aria-label="Search">
            <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
          </button>
        </div>

        {/* Icon or user */}
        <div className={styles.action}>
          <button aria-label="Wishlist">
            <FontAwesomeIcon icon={faHeart} className={styles['heart-icon']} />
          </button>

          <button aria-label="Cart">
            <FontAwesomeIcon icon={faShoppingCart} className={styles['cart-icon']} />
          </button>

          <button aria-label="User">
            <FontAwesomeIcon icon={faUser} className={styles['user-icon']} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
