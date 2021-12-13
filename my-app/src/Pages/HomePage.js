import React from 'react'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage(){
    return (
        <div className="Homepage">
        <header className="hero">
            <h1 className="hero-text">
             Hi, I am 
             <span>  Shruthi Dasarapu </span>
            </h1>
            <p className="h-sub-text">
              Front-end Developer
            </p>
            <div className="icons">
              <Link className="icon-holder">
              <FontAwesomeIcon icon={faLinkedin} className="icon li" />
              </Link>
             <Link className="icon-holder">
             <FontAwesomeIcon icon={faGithub} className="icon gh" />
             </Link>
            
            </div>
        </header>
        </div>
    )
}
export default HomePage;