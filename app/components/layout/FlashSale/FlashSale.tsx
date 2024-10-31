import React from "react";
import styles from './FlashSale.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../component/SaleProductList/SaleProductList";

// add product
const products = [
    {
        image: '/image/maxresdefault.jpg',
        name: 'Iphone 15 promax',
        discount: 40,
        currentPrice: 120,
        originalPrice: 160,
        rating: 4.5,
        reviews: 88,
    },
    {
      image: '/image/ip16promaxx.jpg',
      name: 'Iphone 16 promax',
      discount: 35,
      currentPrice: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
    },
    {
      image: '/image/screen.png',
      name: 'IPS LCD Gaming Monitor',
      discount: 30,
      currentPrice: 370,
      originalPrice: 400,
      rating: 4.8,
      reviews: 99,
    },
    {
      image: '/image/chair.jpg',
      name: 'S-Series Comfort Chair',
      discount: 25,
      currentPrice: 375,
      originalPrice: 400,
      rating: 4.7,
      reviews: 99,
    },
  ];

const FlashSale: React.FC = () => {
    return(

        // giao dien
        <div className={styles['flashSale']}>
            <div className={styles['header']}>
                <div className={styles['heading']} >
                    <div className={styles['subject']}/>
                    <h2 className={styles['sub']} >Today&apos;s</h2>
                </div>
                <div className={styles['main-header']}>
                    <div className={styles['logo-time']}>
                        <h2>Flash Sales</h2>
                        <div className={styles['timer']}>
                            <div>
                                <span>Days</span> <strong>03</strong>
                            </div>
                            <span className={styles['colon']}>:</span>
                            <div>
                                <span>Hours</span> <strong>23</strong>
                            </div>
                            <span className={styles['colon']}>:</span>
                            <div>
                                <span>Minutes</span> <strong>19</strong>
                            </div>
                            <span className={styles['colon']}>:</span>
                            <div>
                                <span>Seconds</span> <strong>56</strong>
                            </div>
                        </div>
                    </div>
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

            {/* chua them link khi click vao san pham */}
            <div className={styles['productList']}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>  

            <div className={styles['viewBtn']}>
                 <button className={styles['viewAllBtn']}>View All Products</button>
            </div>
        </div>
    )
}

export default FlashSale;