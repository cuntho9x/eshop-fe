
import React from 'react'
import styles from './BestSelling.module.scss'
import BestSellingProductCard from '../../component/BestSellingList/BestSellingList'

// add product
const products = [
    {
        image: '/image/coat.png',
        name: 'The north coat',
        currentPrice: 260,
        originalPrice: 360,
        rating: 4.5,
        reviews: 88,
    },
    {
      image: '/image/bag.png',
      name: 'Gucci duffle bag',
      currentPrice: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
    },
    {
      image: '/image/CPU.png',
      name: 'RBG liquild CPU cooler',
      currentPrice: 370,
      originalPrice: 400,
      rating: 4.8,
      reviews: 99,
    },
    {
      image: '/image/chair.jpg',
      name: 'S-Series Comfort Chair',
      currentPrice: 375,
      originalPrice: 400,
      rating: 4.7,
      reviews: 99,
    },
  ];

const BestSelling:React.FC = () =>{
    return(
        <div className={styles['best-selling']}>
            <div className={styles['header']}>
                <div className={styles['heading']}>
                        <div className={styles['subject']}/>
                        <h2 className={styles['sub']}>This Month</h2>
                </div>
                <div className={styles['main-header']}>
                    <h2>Best Selling Products</h2>
                    <div className={styles['viewBtn']}>
                        <button className={styles['viewAllBtn']}>View All Products</button>
                    </div>
                </div>
            </div>
             {/* chua them link khi click vao san pham */}
             <div className={styles['productList']}>
                {products.map((product, index) => (
                    <BestSellingProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling;