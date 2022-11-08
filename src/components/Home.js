import React , { useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Task from './Task';


const Home = () => {

    const [time , setTime] = useState(0)
    const [running , setRunning] = useState(true);
    const increment = useRef(null)
    const [data , setData] = useState([])
    

    const clickHandler = (event) => {
        if(event.target.name === "start"){

            increment.current = setInterval(() => {
                 setTime((prevState) => prevState + 1)
            } , 1000)
            setRunning(false);
            console.log('start')
        } else if (event.target.name === "stop") {

            setRunning(true);
            setData([...data ,{ time:timeFormatting()}])
            setTime(0);
            clearInterval(increment.current)
            console.log('stop')
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

    return (
        <div>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
                <div>
                    <input />
                </div>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        {timeFormatting()}
                    </div>
                        {
                            running ?
                            <button name='start' onClick={clickHandler}>Start</button> :
                            <button name='stop' onClick={clickHandler}>Stop</button>

                        }
                    </div>
            </div>
            <div>
                  {
                    data.map(item => <Task key={uuidv4()} time={item.time} />)
                  }
            </div>
        </div>
    );
};

export default Home;