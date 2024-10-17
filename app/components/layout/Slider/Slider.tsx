import React from 'react'
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons';





const Slider: React.FC = () =>{
    return(
        <div className={styles['slider']}>
        {/* <Image 
              src='' 
              className={styles['slider-img']} 
              alt='ip16'
              width={150} 
              height={150}
            /> */}

            <div className={styles['content']}>
                <h1>
                    <FontAwesomeIcon className={styles['icon-apple']} icon={faApple} />
                    iPhone 14 Series
                </h1>
                <h2>Up to 10% off <br/> Voucher</h2>
                <button className={styles['shopNow']}>
                    <a href="#" className="underline">ShopNow</a>
                    <FontAwesomeIcon className={styles['icon-next']} icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Slider;