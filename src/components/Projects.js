import React from 'react';

const Projects = ({data}) => {
    return (
        <div>
            <div>
                {
                    data.time
                }
            </div>
            <div>
                <div>
                    {
                        data.name
                    }
                </div>
                <div>
                    {
                        data.task
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;