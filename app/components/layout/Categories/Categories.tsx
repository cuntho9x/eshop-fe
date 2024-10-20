import React from 'react'
import styles from './Categories.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';


const Categories:React.FC = () =>{
    return(
        <div className={styles['categories']}>
            {/* header */}
            <div className={styles['header']}>
                <div className={styles['heading']}>
                    <div className={styles['subject']}/>
                    <h2 className={styles['sub']} >Categories</h2>
                </div>
                <div className={styles['main-header']}>
                    <h2>Browse By Categories</h2>
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
            <ul className={styles['categories-list']}>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-Phone.png' 
                    className={styles['categories-img']} 
                    alt='Category-Phone'
                    width={56} 
                    height={56}
                    />
                    Phones
                </li>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-Computer.png' 
                    className={styles['categories-img']} 
                    alt='Category-Computer'
                    width={56} 
                    height={56}
                    />
                    Computers
                </li>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-SmartWatch.png' 
                    className={styles['categories-img']} 
                    alt='Category-SmartWatch'
                    width={56} 
                    height={56}
                    />
                    SmartWatch
                    </li>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-Camera.png' 
                    className={styles['categories-img']} 
                    alt='Category-Camera'
                    width={56} 
                    height={56}
                    />
                    Camera
                    </li>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-HeadPhone.png' 
                    className={styles['categories-img']} 
                    alt='Category-HeadPhone'
                    width={56} 
                    height={56}
                    />
                    HeadPhones
                </li>
                <li className={styles['categories-item']}>
                    <Image 
                    src='/image/Category-GamePad.png' 
                    className={styles['categories-img']} 
                    alt='Category-GamePad'
                    width={56} 
                    height={56}
                    />
                    Gaming
                    </li>
            </ul>
            
        </div>
    )
}

export default Categories;