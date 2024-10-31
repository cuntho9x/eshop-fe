// pages/home.tsx
import React from 'react';
import styles from './home.module.scss'

import Header from '../components/layout/Header/Header';
import Sibar from '../components/layout/Sibar/Sibar';
import Slider from '../components/layout/Slider/Slider'
import FlashSale from '../components/layout/FlashSale/FlashSale'
import Categories from '../components/layout/Categories/Categories';
import BestSelling from '../components/layout/BestSelling/BestSelling';
import OurProducts from '../components/layout/OurProduct/OurProduct';
import Feature from '../components/layout/Feature/Feature';
import Footer from '../components/layout/Footer/Footer';

// import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
    {/* page 1 */}
      <Header />
      <div className={styles['content']}>
        <Sibar/>
        <Slider/>
      </div>

    {/*container  */}
      <div className={styles['container']}>
        <FlashSale/>
        <Categories/>
        <BestSelling/>
        <OurProducts/>
        <Feature/>
      </div>

      <Footer/>

    </>
  );
};

export default Home;
