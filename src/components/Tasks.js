import React from 'react';

import { v4 as uuidv4 } from 'uuid';


import Task from './Task'

const Tasks = ({projectName , data}) => {
    return (
        <div>
            <h1>{projectName}</h1>
            {
                data.map(item => <Task key={uuidv4()} time={item.time} />)
            }
        </div>
    );
};

export default Tasks;