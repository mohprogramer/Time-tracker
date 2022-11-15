import React from 'react';

//Style
import styles from './Navbar.module.css'

//img
import avatar from '../assets/avatar.png'

const Navbar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.navContainer}>
                     <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
};

export default Navbar;