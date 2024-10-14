/* eslint-disable react/jsx-no-comment-textnodes */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser,faShoppingBag, faXmark, faStar, faSignOut } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import CSS thủ công
import '../../../lib/fontawesome'; // Import file cấu hình Font Awesome
import styles from './Header.module.scss'; // Import SCSS




// Định nghĩa kiểu dl cho user-avatar



const Header: React.FC = () => {
  // Định nghĩa kiểu dl cho userMenu
  interface UserMenuItem {
    icon: ReactNode;
    title: string;
    to: string;
  }

  const userMenu: UserMenuItem[] =[
    {
      icon: <FontAwesomeIcon icon= {faUser} />,
      title: 'Manage My Account',
      to: '@thang',
    },
    {
      icon: <FontAwesomeIcon icon= {faShoppingBag} />,
      title: 'My Oder',
      to: '@shopbag',
    },
    {
      icon: <FontAwesomeIcon icon= {faXmark} />,
      title: 'My Cancellation',
      to: '@cacellation',
    },
    {
      icon: <FontAwesomeIcon icon= {faStar} />,
      title: 'My Reviews',
      to: '@review',
    },
    {
      icon: <FontAwesomeIcon icon= {faSignOut} />,
      title: 'Logout',
      to: '@logout',
    },
  ]


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

        {/* Icon */}
        <div className={styles.action}>
          <button aria-label="Wishlist">
            <FontAwesomeIcon icon={faHeart} className={styles['heart-icon']} />
          </button>

          <button aria-label="Cart">
            <FontAwesomeIcon icon={faShoppingCart} className={styles['cart-icon']} />
          </button>

        {/* User */}
          <div className={styles['user']}>

            <Image 
              src='/image/avatar.JPG' 
              className={styles['user-avatar']} 
              alt='Ngo Duc Thang'
              width={150} 
              height={150}
            />

            <ul className={styles['user-menu']}>
              {userMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.to}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
