// Implement the NavBar component
// Reference Zeplin General Page for the design specs
// Requirement:
// - Each button should be a link to the respective page
// - Make header stick to top

import "@fontsource/poppins";
import NorthEastArrow from '/public/north-east-arrow.svg';
import SmallLogo from '/public/small-logo.svg';
import HamburgerIcon from '/public/hamburger-icon.svg';
import CloseIcon from '/public/close-icon.svg';
import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function hamburgerClick() {
        setMenuOpen(current => !current);
    }

    return (
        <div id="navBar-container">
            <link href="/public/NavBar.css" rel="stylesheet"></link>
            <link href="/src/index.css" rel="stylesheet"></link>
            <div id="navBar-spacer"></div>
            <ul id="nav-bar">
                <a id="home-link" href="/">
                    <img src={SmallLogo} alt="arrow" className="small-logo"/>
                </a>
                <div id="navBar-items">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/student">Students</a></li>
                    <li><a href="/npo">Non-Profits</a></li>
                </div>
                <button id="hamburger-button" onClick={hamburgerClick}>
                    <img src={HamburgerIcon} alt="hamburger menu" id="hamburger-button"/>
                </button>
                <a id="navBar-button" href="/contact">
                    <p id="navBar-button-text">Contact Us</p>
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow"/>
                </a>
            </ul>
            
            {menuOpen && <div id="hamburger-menu"> {/*Could be a component I suppose*/} 
                <button onClick={() => setMenuOpen(false)} id="hamburger-close"><img src={CloseIcon} alt="close"/></button>
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