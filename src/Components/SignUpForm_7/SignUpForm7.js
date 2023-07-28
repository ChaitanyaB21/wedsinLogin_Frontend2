import React from 'react';
import styles from './SignUpForm7.module.css';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';

const SignUpForm = () => {
    // const handleFormSubmit = async (event) => {
    // };


    return (
        <>
            <Navbar/>
            <ProgressBar/>
            <div className={styles.mainDiv} >
                <div className={styles.container}>
                    <h1>Verify your email ID</h1>
                    <span>NOTE:- Verify your email id by checking emails and click on activation link for</span>
                    <span className={styles.span2}>activating email account. If you don’t get verificaation link please contact us.</span>
                </div>
                <h2> Congratulations ! You are registered with us</h2>
            </div>
        </>
    );
}

export default SignUpForm;