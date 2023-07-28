import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../Assets/wedsinLogo.png';
import whatsappLogo from '../../Assets/whatsappLogo.png';

const Navbar = () => {
    return (
        <>
            <div className={styles.container} >
                <div>
                    <div className={styles.navbar}>
                        <div className={styles.left}>
                            <img src={logo} alt="Logo" className={styles.logo} />
                        </div>
                        <div className={styles.right}>
                            <p>Contact us now</p>
                            <img src={whatsappLogo} alt="WhatsApp Logo" className={styles.whatsappLogo} />
                        </div>

                    </div>
                    {/* <div className={styles.links}>
                        <a >Profile details</a>
                        <a >Career Details</a>
                        <a >Lifestyles details</a>
                        <a >Family Details</a>
                        <a >Photos</a>
                        <a >Government id</a>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Navbar;
