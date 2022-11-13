import React from 'react';

//Style
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div  >
            <div className={styles.container}>
                <ul className={styles.rgNav} >
                    <li>name</li>
                    <li>avatar</li>
                </ul>
                <ul className={styles.lfNav}>
                    <li>Hamburger</li>
                    <li>Logo</li>

                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;