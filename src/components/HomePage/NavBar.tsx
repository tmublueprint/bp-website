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
import { useState, useEffect } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function hamburgerClick() {
        setMenuOpen(current => !current);
    }

    // Make the navbar the same color as the background, while on the gradient
    // function getGradColor(scrollY: number, conSize: number) {
    //     const stops = [
    //         { pct: 0, color: [148, 201, 255] },   
    //         { pct: 0.18, color: [162, 208, 254] },
    //         { pct: 0.53, color: [199, 225, 253] },
    //         { pct: 0.70, color: [255, 255, 255] }
    //     ];
    //     const percent = Math.min(scrollY / conSize, 0.70);

    //     let lower = stops[0], upper = stops[stops.length - 1];
    //     for (let i = 1; i < stops.length; i++) {
    //         if (percent <= stops[i].pct) {
    //             lower = stops[i - 1];
    //             upper = stops[i];
    //             break;
    //         }
    //     }

    //     const range = upper.pct - lower.pct;
    //     const frac = range === 0 ? 0 : (percent - lower.pct) / range;
    //     const color = lower.color.map((c, i) =>
    //         Math.round(c + (upper.color[i] - c) * frac)
    //     );
    //     return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    // }

    // function useNavBarGradient() {
    //     useEffect(() => {
    //         const navBar = document.getElementById("navBar-container");
    //         function handleScroll() {
    //             const scrollY = window.scrollY;
    //             if (!navBar) return;
    //             if(scrollY <= 1000) navBar.style.background = getGradColor(scrollY, 1000);
    //             else navBar.style.background = "white";
    //         }
    //         window.addEventListener("scroll", handleScroll);
    //         handleScroll();
    //         return () => window.removeEventListener("scroll", handleScroll);
    //     }, []);
    // }
    // useNavBarGradient();

    return (
        <div id="navBar-container">
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <link href="/public/NavBar.css" rel="stylesheet"/>
            <link href="/src/index.css" rel="stylesheet"/>
            <ul id="nav-bar">
                <button id="hamburger-button" onClick={hamburgerClick}><img src={HamburgerIcon} alt="hamburger menu"/></button>
                <a id="home-link" href="/"><img src={SmallLogo} alt="bp logo" id="bp-small-logo"/></a>
                <a id="home-link-full" href="/"><img src={FullLogo} alt="bp logo" id="navBar-bp-full-logo"/></a>
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
                <a id="navBar-button-small" href="/contact">
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