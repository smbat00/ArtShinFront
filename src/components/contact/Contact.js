import React from 'react';
import AboutContact from "./ContactAbout";
// import ContactImg from "./img/bgi.jpg";
const Contact = () => {
    const contactUsStyles = {
        // backgroundImage: 'URL('+ContactImg+')',
        backgroundRepeat: 'norepeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'88vh'

    }
    return (
        <div style={contactUsStyles}>
            {/*<h1>Contact us</h1>*/}
            {/*<p>About US page body content</p>*/}
            <AboutContact/>
        </div>
    );
}

export default Contact;