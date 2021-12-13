import React from 'react';

function Education({title, text}){

    return(
        <div className="Education">
            <div className="education-list">
          <h4>{title}</h4>
          <p>{text}</p>
          </div>
        </div>
    )
}
export default Education;