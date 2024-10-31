import React from 'react'
import styles from './Feature.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast,faHeadset,faShieldVirus} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';


const Feature:React.FC = () =>{
    return(
        <div className={styles['feature']}>
            {/* header */}
            <div className={styles['header']}>
                <div className={styles['heading']}>
                    <div className={styles['subject']}/>
                    <h2 className={styles['sub']} >Featured</h2>
                </div>   
                <h2>New Arrival</h2>
            </div>
            <div className={styles['containner']}>
                <div className={styles['half-column']}>
                    <Image 
                        src='/image/PS5.png' 
                        className={styles['slider-img']} 
                        alt='ps5'
                        width={150} 
                        height={150}
                    />

                    <div className={styles['content']}>
                        <h1>PlayStation 5</h1>
                        <h2>Black and White version of the PS5  <br/> coming out on sale.</h2>
                        <a href='#' className='underline'>Shop Now</a>
                    </div>
                </div>
                <div className={styles['half-column']}>
                    <div className={styles['half-grid']}>
                        <Image 
                            src='/image/WomenCollection.png' 
                            className={styles['slider-img']} 
                            alt='Women Collection'
                            width={150} 
                            height={150}
                        />

                        <div className={styles['content']}>
                            <h1>Women&apos;s Collections</h1>
                            <h2>Featured woman collections that  <br/>give you another vibe.</h2>
                            <a href='#' className='underline'>Shop Now</a>
                        </div>
                    </div>
                    <div className={styles['half-grid']}>
                        <div className={styles['half-half-column']}>
                            <Image 
                                src='/image/Speakers.png' 
                                className={styles['slider-img']} 
                                alt='Speakers'
                                width={150} 
                                height={150}
                            />

                            <div className={styles['content']}>
                                <h1>Speakers</h1>
                                <h2>Amazon wireless speakers</h2>
                                <a href='#' className='underline'>Shop Now</a>
                            </div>
                        </div>
                        <div className={styles['half-half-column']}>
                            <Image 
                                src='/image/Perfume.png' 
                                className={styles['slider-img']} 
                                alt='perfume'
                                width={150} 
                                height={150}
                            />

                            <div className={styles['content']}>
                                <h1>Perfume</h1>
                                <h2>GUCCI INTENSE OUD EDP</h2>
                                <a href='#' className='underline'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['benefits']}>
                <div className={styles['benefitItem']}>
                    <div className={styles['icon']}>
                    <FontAwesomeIcon icon={faShippingFast} className={styles['Shipping-icon']} />
                    </div>
                    <div className={styles['title']}>FREE AND FAST DELIVERY</div>
                    <div className={styles['description']}>Free delivery for all orders over $140</div>
                </div>
                <div className={styles['benefitItem']}>
                    <div className={styles['icon']}>
                    <FontAwesomeIcon icon={faHeadset} className={styles['Shipping-icon']} />

                    </div>
                    <div className={styles['title']}>24/7 CUSTOMER SERVICE</div>
                    <div className={styles['description']}>Friendly 24/7 customer support</div>
                </div>
                <div className={styles['benefitItem']}>
                    <div className={styles['icon']}>
                    <FontAwesomeIcon icon={faShieldVirus} className={styles['shield-check']}/>
                    </div>
                    <div className={styles['title']}>MONEY BACK GUARANTEE</div>
                    <div className={styles['description']}>We return money within 30 days</div>
                </div>
            </div>

            
        </div>
    )
}

export default Feature;