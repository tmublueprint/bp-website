// Implement the Footer component
// Reference Zeplin General Page for the design specs
// Recommend splitting the component into two columns
// Left column for contacts
// Right column for links to other parts of the website

import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import '../../index.css';

function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="footer-content">
        <div className="left-section">
          <div className="left-upper">
            <div className="logo-container">
              <img src="/logo.png" alt="Blueprint Logo" className="logo" />
              <span className="blueprint">blueprint</span>
            </div>
            <p className="Tech-for-social-good">Tech for social good.</p>
          </div>
         
          <div className="left-lower">
            <div className="social-links">
              <a href="/ContactUs" className="contact">Contact Us <span className="external-arrow">↗</span></a>  
              <a href="https://www.instagram.com/tmublueprint/" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/tmu-blueprint/" className="social-icon"><FaLinkedin /></a>
              <a href="https://youtube.com" className="social-icon"><FaYoutube /></a>
              <a href="https://github.com/tmublueprint" className="social-icon"><FaGithub /></a>
            </div>
            <p className="copyright">© Copyright TMU Blueprint 2025</p>
          </div>
        </div>


        <div className="right-section">
          <div className="nav-group">
            <h3>General</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="nav-group">
            <h3>Students</h3>
            <a href="/faq">FAQ</a>
            <a href="/process">Process</a>
          </div>
          <div className="nav-group">
            <h3>Non-profit</h3>
            <a href="/faq">FAQ</a>
            <a href="/process">Process</a>
          </div>
        </div>
       
      </div>
    </footer>
  );
}


export default Footer;

