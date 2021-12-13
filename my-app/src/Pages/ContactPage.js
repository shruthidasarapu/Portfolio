import React from 'react';
import ContactItem from '../Components/ContactItem';
import home from '../img/home.png';
import phone from '../img/phone.png';
import gmail from '../img/gmail.png';
import Title from '../Components/Title';

function ContactPage() {
    return(
           <div>
              <div className="title">
            <Title title= {'Contact Me'} span= {'Contact Me'}/>
            </div>
            <div className=" ContactPage">
           
             <div className="map-sect">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.64910984709!2d12.523784418164047!3d55.671247413470496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1622410350706!5m2!1sen!2sdk" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
             </div>
             <div className="contact-sect">
             <ContactItem icon= {phone} text= {'+45 91571338'} title={'Phone'} />
             <ContactItem icon= {gmail} text= {'shruthi.dasarapu@gmail.com'} title={'Email'} />
             <ContactItem icon= {home} text= {'Værebrovej 42, 2880 Bagsværd, Copenhagen'} title={'Address'} />
             </div>
        </div>
        </div>
    )
}
export default ContactPage;