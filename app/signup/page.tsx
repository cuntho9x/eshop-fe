import React from "react";
import styles from './SignUp.module.scss'

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const SignUp: React.FC = () =>{
    return (
        <>
        <Header/>
        {/* container signup */}
        <div className={styles['signup-container']}>
            <div className={styles['img']}>
                <Image 
                    src='/image/Side Image.png' 
                    className={styles['img-signup']} 
                    alt='shopping cart and phone'
                    width={150} 
                    height={150}
                />
            </div>
            <div className={styles['formSection']}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className={styles['create-btn']}>Create Account</button>
                    <button type="submit" className={styles['signup-btn']}>
                        <FontAwesomeIcon icon={faGoogle} className={styles['gg-icon']}/>
                        Sign up with Google
                    </button>
                    <div className={styles["other-option"]}>
                        Already have account?
                        <a href="#" className={styles['login']}>Log in?</a>
                    </div>
                </form>
            </div>
        </div>

        <Footer/>
        </>
    );
};

export default SignUp;