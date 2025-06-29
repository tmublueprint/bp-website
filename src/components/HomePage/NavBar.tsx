// Implement the NavBar component
// Reference Zeplin General Page for the design specs
// Requirement:
// - Each button should be a link to the respective page
// - Make header stick to top

import NorthEastArrow from '/public/north-east-arrow.svg';
import SmallLogo from '/public/small-logo.svg';
import HamburgerIcon from '/public/hamburger-icon.svg';
import CloseIcon from '/public/close-icon.svg';
import FullLogo from '/public/full-logo.svg';
import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function hamburgerClick() {
        setMenuOpen(current => !current);
    }

    return (
        <div id="navBar-container">
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <link href="/public/NavBar.css" rel="stylesheet"/>
            <link href="/src/index.css" rel="stylesheet"/>
            <ul id="nav-bar">
                <button id="hamburger-button" onClick={hamburgerClick}><img src={HamburgerIcon} alt="hamburger menu"/></button>
                <a id="home-link" href="/"><img src={SmallLogo} alt="bp logo" id="bp-small-logo"/></a>
                <img src={FullLogo} alt="bp logo" id="navBar-bp-full-logo"/>
                <div id="navBar-items">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/student">Students</a></li>
                    <li><a href="/npo">Non-Profits</a></li>
                </div>
                <a id="navBar-button" href="/contact">
                    <p id="navBar-button-text">Contact Us</p>
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow"/>
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