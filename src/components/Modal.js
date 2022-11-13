import React from 'react';

import styles from "./Modal.module.css"

const Modal = ({setIsOpen , setName}) => {
    return (
        <div>
           <div className={styles.darkBg} onClick={() => setIsOpen(false)} />
           <div className={styles.center}>
                <div className={styles.modal}>
                    <div className={styles.headerModal}>
                        <h1>Project</h1>
                    </div>
                    <div className={styles.input}>
                        <input className={styles.modalInput} onChange={event => setName(event.target.value)} placeholder="Enter name your project..." />
                    </div>
                    <button className={styles.addBtn} name="add" onClick={() => setIsOpen(false)}>Add</button>
                    <button className={styles.dismissBtn} name="dismiss" onClick={() => setIsOpen(false) }>Dismiss</button>
                </div>
           </div>
        </div>
    );
};

export default Modal;