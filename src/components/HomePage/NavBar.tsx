// Implement the NavBar component
// Reference Zeplin General Page for the design specs
// Requirement:
// - Each button should be a link to the respective page
// - Make header stick to top

import { useState, useEffect } from "react";
import SmallLogo from '../../../src/assets/images/small-logo.svg';
import FullLogo from '../../../src/assets/images/full-logo.svg';
import HamburgerIcon from '../../../src/assets/images/hamburger-icon.svg';
import CloseIcon from '../../../src/assets/images/close-icon.svg';
import NorthEastArrow from '../../../src/assets/images/north-east-arrow.svg';
import '../../assets/css/NavBar.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function hamburgerClick() {
        setMenuOpen(current => !current);
    }

    return (
        <div id="navBar-container">
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <ul id="nav-bar">
                <button id="hamburger-button" onClick={hamburgerClick}><img src={HamburgerIcon} alt="hamburger menu"/></button>
                <a id="home-link" href="/"><img src={SmallLogo} alt="bp logo" id="bp-small-logo"/></a>
                <a id="home-link-full" href="/"><img src={FullLogo} alt="bp logo" id="navBar-bp-full-logo"/></a>
                <div id="navBar-items">
                    <li><a href="about">About Us</a></li>
                    <li><a href="project">Projects</a></li>
                    <li><a href="student">Students</a></li>
                    <li><a href="npo">Non-Profits</a></li>
                </div>
                <a id="navBar-button" href="contact">
                    <p id="navBar-button-text">Contact Us</p>
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow"/>
                </a>
                <a id="navBar-button-small" href="contact">
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow-small"/>
                </a>
                
            </ul>
            
            {<div id="hamburger-menu" className={menuOpen ? "open" : ""}> {/*Could be a component I suppose*/}
                <button onClick={() => setMenuOpen(false)} id="hamburger-close"><img src={CloseIcon} alt="close" id="hamburger-img"/></button>
                <div id="hamburger-items">
                    <div><a href="/about">About Us</a></div>
                    <div><a href="/project">Projects</a></div>
                    <div><a href="/student">Students</a></div>
                    <div><a href="/npo">Non-Profits</a></div>
                </div>
            </div>}
        </div>
    )
}

export default NavBar;