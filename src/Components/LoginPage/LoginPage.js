// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Here you can implement your login logic
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/Page1');
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleLogin}>
                <div className={styles['form-group']}>
                    <label className={styles.label} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label className={styles.label} htmlFor="password">
                        Password:
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.button} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
