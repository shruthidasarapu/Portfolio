import React from 'react';
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom';

  function NavBar() {
    return (
        <div className="NavBar">
      
       <nav className="nav">
       <div className="profile">
              <img src= {avatar} alt= "" /> 
       </div>
       <ul className="nav-items">
             <li className="nav-item">
             <NavLink to="/" exact activeClassName="active">
               Home
             </NavLink>
             </li>
           <li className="nav-item">
               <NavLink to="/about" exact activeClassName="active">
                About
                </NavLink>
            </li>
            <li className="nav-item">
               <NavLink to="/skills" exact activeClassName="active">
                Skills
                </NavLink>
            </li>
          <li className="nav-item">
            <NavLink to="/experiences" exact activeClassName="active">
               Experiences
            </NavLink>
          </li>
         <li className="nav-item">
          <NavLink to="/contact" exact activeClassName="active">
            Contact
          </NavLink>
           </li>
          </ul>
        <footer className="footer"> 
           <p>
               @2021 copyright
            </p>
        </footer>
       </nav>
    </div>
    )
}
export default NavBar;