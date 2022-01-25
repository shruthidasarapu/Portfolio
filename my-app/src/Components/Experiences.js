import React from 'react';


function Experiences({title,text,desc}) {
    return(
        <div className="Experiences">
            <div className="experience-list">
            <h2>{title}</h2>
            <h6>{text}</h6>
            <p>{desc}</p>
            </div>
        </div>
    )
}
export default Experiences;