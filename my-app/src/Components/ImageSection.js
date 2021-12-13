import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return(
        <div className="ImageSection">
           <div className="img">
               <img src={about} alt="" />
               </div> 
               <div className="about-info">
                   <h4>Shruthi Dasarapu</h4>
                   <p>
                   I am passionate about creating webpages which provide a clean and user-friendly experience. Also, I am highly motivated to learn new technologies in a fast pace, and enhance my knowledge and experience in coding and web development.

                   </p>
                   <div className="about-details">
                     <div className="left-section">
                      <p>Full Name</p>   
                      <p>Age</p>
                      <p>Nationality</p>
                      <p>Languages</p> 
                      {/* <p>Address</p> */}
                      <p>Countries</p>
                     </div>
                     <div className="right-section">
                      <p>: Shruthi Dasarapu</p>   
                      <p>: 30</p>
                      <p>: Indian</p>
                      <p>: English, Danish </p>
                      {/* <p>: Værebrovej 42, 2880, Bagsværd, Copenhagen</p> */}
                      <p>: India, Denmark</p>
                     </div> 
                   </div>
                   {/* <btn class="btn"> Download cv</btn>  */}
                   </div> 
                   
        </div>
    )
}
export default ImageSection;