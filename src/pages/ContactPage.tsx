import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
    return (
        <div className='ml-[132.7px] mr-[155.3px] small-screen-comp'>
            <link href="/public/ContactPage.css" rel="stylesheet"/>
            <div id="contactPage-title-container">
                <h1 id="contactPage-title">Contact Us</h1>
                <p id="contactPage-title-text">Contact us at tmublueprint@gmail.com or by reaching out on our social media pages!</p>
                
                <div id="social-media-container">
                    <div id="instagram">
                        <a href="https://www.linkedin.com/company/tmu-blueprint/" className="social-icon"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/tmublueprint/" className="social-icon"><FaInstagram /></a>
                    </div>
                    <div id="linkedin">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;