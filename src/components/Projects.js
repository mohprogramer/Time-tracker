import React from 'react';

//Styles
import styles from './Projects.module.css';

const Projects = ({data}) => {
    return (
        <div className={styles.container}>
            <div className={styles.time}>
                {
                    data.time
                }
            </div>
            <div className={styles.nameTask}>
                <div className={styles.name}>
                    {
                        data.name  
                    }
                </div>
                <div className={styles.tesk}>
                    {
                        data.task
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;