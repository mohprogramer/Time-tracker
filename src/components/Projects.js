import React from 'react';

//Styles
import styles from './Projects.module.css';

//Icons
import { UilTrashAlt } from '@iconscout/react-unicons'




const Projects = ({item , data ,setData}) => {

    const clickHandler = () => {
        const newData = data.filter(it => it !== item)
        setData(newData)
    }


    return (
        <>
        <div className={styles.container}>
            <div className={styles.time}>
                {
                    item.time
                }
            </div>
            <div className={styles.nameTask}>
                <div className={styles.name}>
                    {
                        item.name 
                        
                    }
                </div>
                <div className={styles.task}>
                    {
                        item.task 
                    }
                </div>
                <div className={styles.delete}>
                    <button name='delete' onClick={clickHandler} ><UilTrashAlt /></button>
                </div>
            </div>
        </div>
         
        </>
    );
};

export default Projects;