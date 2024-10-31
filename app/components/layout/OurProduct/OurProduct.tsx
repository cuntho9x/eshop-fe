import React from 'react'
import styles from './OurProduct.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ProductCard from '../../component/OurProduct/OurProduct';

const products = [
    {
        image: '/image/dogfood.png',
        name: 'Breed Dry Dog Food',
        banner: 'New',
        currentPrice: 120,
        originalPrice: 160,
        rating: 4.5,
        reviews: 88,
    },
    {
      image: '/image/jacket.png',
      name: 'Quilted Satin Jacket',
      banner: 'New',
      currentPrice: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
    },
    {
      image: '/image/asuslaptop.png',
      name: 'ASUS FHD Gaming Laptop',
      banner: 'old',
      currentPrice: 370,
      originalPrice: 400,
      rating: 4.8,
      reviews: 99,
    },
    {
      image: '/image/soccerCleat.png',
      name: 'Jr. Zoom Soccer Cleats',
      banner: 'old',
      currentPrice: 375,
      originalPrice: 400,
      rating: 4.7,
      reviews: 99,
    },
    {
        image: '/image/chair.jpg',
        name: 'S-Series Comfort Chair',
        banner: 'new',
        currentPrice: 375,
        originalPrice: 400,
        rating: 4.7,
        reviews: 99,
      },
      {
        image: '/image/bag.png',
        name: 'Gucci duffle bag',
        banner: 'old',
        currentPrice: 655,
        originalPrice: 400,
        rating: 4.7,
        reviews: 49,
      },
      {
        image: '/image/soccerCleat.png',
        name: 'Jr. Zoom Soccer Cleats',
        banner: 'old',
        currentPrice: 375,
        originalPrice: 400,
        rating: 4.7,
        reviews: 99,
      },
      {
        image: '/image/CPU.png',
        name: 'RBG liquild CPU cooler',
        banner: 'new',
        currentPrice: 375,
        originalPrice: 800,
        rating: 4.7,
        reviews: 99,
      },
      {
        image: '/image/ip16promaxx.jpg',
        name: 'Iphone16 promax',
        banner: 'old',
        currentPrice: 645,
        originalPrice: 700,
        rating: 4.9,
        reviews: 79,
      },
      {
        image: '/image/bag.png',
        name: 'Gucci duffle bag',
        banner: 'old',
        currentPrice: 655,
        originalPrice: 400,
        rating: 4.7,
        reviews: 49,
      },
  ];


const OurProducts:React.FC = () =>{
    return(
        <div className={styles['ourProducts']}>
            {/* header */}
            <div className={styles['header']}>
                <div className={styles['heading']}>
                    <div className={styles['subject']}/>
                    <h2 className={styles['sub']} >Our Products</h2>
                </div>
                <div className={styles['main-header']}>
                    <h2>Explore Our Products</h2>
                    <div className={styles['backnext-icon']}>
                        <button className= {styles['backnext-btn']} aria-label="back">
                            <FontAwesomeIcon icon={faArrowLeft} className={styles['back-icon']} />
                        </button>

                        <button className= {styles['backnext-btn']} aria-label="Next">
                            <FontAwesomeIcon icon={faArrowRight} className={styles['next-icon']} />
                        </button>
                    </div>
                </div>
            </div>

            {/* product */}
            <div className={styles['ourProductList']}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>  

            {/* viewbtn */}
            <div className={styles['viewBtn']}>
                 <button className={styles['viewAllBtn']}>View All Products</button>
            </div>
            
        </div>
    )
}

export default OurProducts;