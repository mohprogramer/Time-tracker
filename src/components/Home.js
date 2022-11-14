import React , { useRef, useState , useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';


//icons
import { UilPlusCircle } from '@iconscout/react-unicons'

//Components
import Modal from './Modal';
import Projects from './Projects';

//Styles
import styles from "./Home.module.css";


const Home = () => {

    const [time , setTime] = useState(0)
    const [running , setRunning] = useState(true);
    const [isOpen , setIsOpne] = useState(false);
    const [name , setName] = useState("");
    const [task , setTask] = useState("");
    const [data , setData] = useState([]);
    const increment = useRef(null);

    

    const clickHandler = (event) => {
        if(event.target.name === "start"){
                increment.current = setInterval(() => {
                    setTime((prevState) => prevState + 1)
               } , 1000)
               setRunning(false);
               console.log('start')
            
           
        } else if (event.target.name === "stop") {
            setRunning(true);
            clearInterval(increment.current)
            setTime(0);
            setData([...data , {time:timeFormatting() , name:name , task:task }])   
            setTask("") 
            
            console.log(data)
        }
    }



    const timeFormatting = () => {
        const getSec = `0${time % 60}`.slice(-2);
        const min = `${Math.floor(time / 60)}`;
        const getMin = `0${min % 60}`.slice(-2);
        const h = `${Math.floor(time / 3600)}`;
        const getH = `0${h}`.slice(-2);

        return `${getH} : ${getMin} : ${getSec}`;
    }

    useEffect(() => {
        
    } , [])

    return (
        <>
        <div className={styles.container}>
            <div className={styles.entryData} >
                <div className={styles.entryproject}>
                    <input value={task} placeholder="What are you working on?" onChange={event => setTask(event.target.value)} />
                    <button onClick={() => setIsOpne(true)}>
                        <UilPlusCircle/> <span>Project</span>
                    </button>
                </div>
                <div className={styles.entryTime}>
                    <div className={styles.time}>
                        {timeFormatting()}
                    </div>
                        <div className={styles.buttons}>
                        
                            {
                                running ?
                                <button className={styles.startBtn} name='start' onClick={clickHandler}>Start</button> :
                                <button className={styles.stopBtn} name='stop' onClick={clickHandler}>Stop</button>

                            }
                        </div>

                </div>
            </div>
            <div className={data.length && styles.projectContainer}>
                {
                    data.map(item => <Projects key={uuidv4()} data={item}  />)
                }
            </div>
                  
        </div>
        {
            isOpen && <Modal setIsOpen={setIsOpne} setName={setName} />
        }
        </>
    );
};

export default Home;