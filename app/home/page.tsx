// pages/home.tsx
import React from 'react';
import styles from './home.module.scss'

import Header from '../components/layout/Header/Header';
import Sibar from '../components/layout/Sibar/Sibar';
import Slider from '../components/layout/Slider/Slider'
import FlashSale from '../components/layout/FlashSale/FlashSale'

// import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles['content']}>
        <Sibar/>
        <Slider/>
      </div>
      <div className={styles['container']}>
        <FlashSale/>
      </div>

    </>
  );
};

export default Home;
