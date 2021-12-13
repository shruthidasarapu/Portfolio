import React from 'react';


function Projects({title,text,desc}) {
    return(
        <div className="Projects">
            <div className="project-list">
            <h2>{title}</h2>
            <h6>{text}</h6>
            <p>{desc}</p>
            </div>
        </div>
    )
}
export default Projects;