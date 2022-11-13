import React from 'react';

//Style
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.navContainer}>
                <ul className={styles.rgNav} >
                    <li>Hamburger</li>
                    <li>Logo</li>           
                </ul>
                <ul className={styles.lfNav}>
                    <li>name</li>
                    <li><img src='../assets/img.jpg' alt="avatar" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;