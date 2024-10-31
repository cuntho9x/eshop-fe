import React from "react";
import styles from './login.module.scss'

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Image from "next/image";

const Login: React.FC = () =>{
    return (
        <>
        <Header/>
        {/* container login */}
        <div className={styles['login-container']}>
            <div className={styles['img']}>
                <Image 
                    src='/image/Side Image.png' 
                    className={styles['img-login']} 
                    alt='shopping cart and phone'
                    width={150} 
                    height={150}
                />
            </div>
            <div className={styles['formSection']}>
                <h2>Log in to Exclusive</h2>
                <p>Enter your details below</p>
                <form>
                    <input type="text" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                    <a href="#" className={styles['forgotPassword']}>Forget Password?</a>
                </form>
            </div>
        </div>

        <Footer/>
        </>
    );
};

export default Login;