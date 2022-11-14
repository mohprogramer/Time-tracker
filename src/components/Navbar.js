import React from 'react';

//Style
import styles from './Navbar.module.css'

//img
import avatar from '../assets/avatar.png'

const Navbar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.navContainer}>
                
                <ul className={styles.lfNav}>
                    <li>name</li>
                    <li className={styles.img} ><img src={avatar} alt="avatar" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;