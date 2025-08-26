// Implement the NavBar component
// Reference Zeplin General Page for the design specs
// Requirement:
// - Each button should be a link to the respective page
// - Make header stick to top

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SmallLogo from '../../assets/images/small-logo.svg';
import FullLogo from '../../assets/images/full-logo.svg';
import HamburgerIcon from '../../assets/images/hamburger-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';
import NorthEastArrow from '../../assets/images/north-east-arrow.svg';
import '../../assets/css/NavBar.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    // Page-specific gradient mappings
    const pageGradients = {
        '/': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 18%, rgba(199, 225, 253, 0.4) 53%, rgb(255, 255, 255) 70%)',
        '/about': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 5%, rgba(199, 225, 253, 0.4) 15%, rgb(255, 255, 255) 80%)',
        '/student': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 5%, rgba(199, 225, 253, 0.4) 15%, rgb(255, 255, 255) 80%)',
        '/npo': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 5%, rgba(199, 225, 253, 0.4) 15%, rgb(255, 255, 255) 80%)',
        '/contact': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 10%, rgba(199, 225, 253, 0.4) 40%, rgb(255, 255, 255) 80%)',
        '/project': 'linear-gradient(rgba(148, 201, 255, 0.7) 0%, rgba(162, 208, 254, 0.6) 10%, rgba(199, 225, 253, 0.4) 40%, rgb(255, 255, 255) 80%)'
    };

    // Get current page gradient
    const getCurrentGradient = () => {
        return pageGradients[location.pathname] || pageGradients['/'];
    };

    // Calculate navbar background based on scroll position
    const getNavbarBackground = () => {
        const baseGradient = getCurrentGradient();
        const scrollThreshold = 100; // Distance to scroll before navbar becomes more opaque
        
        if (scrollY < scrollThreshold) {
            // At the top, use the page gradient with reduced opacity
            const opacity = Math.min(0.9, scrollY / scrollThreshold * 0.5 + 0.4);
            return baseGradient.replace(')', `, ${opacity})`);
        } else {
            // After scrolling, transition to a more opaque white background
            const scrollOpacity = Math.min(1, (scrollY - scrollThreshold) / 100);
            return `linear-gradient(rgba(255, 255, 255, ${0.85 + scrollOpacity * 0.15}) 0%, rgba(255, 255, 255, ${0.9 + scrollOpacity * 0.1}) 100%)`;
        }
    };

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function hamburgerClick() {
        setMenuOpen(current => !current);
    }

    function handleNavigation(e, path) {
        e.preventDefault();
        navigate(path);
        setMenuOpen(false);
    }

    return (
        <div id="navBar-container" style={{ background: getNavbarBackground() }}>
            <ul id="nav-bar">
                <button id="hamburger-button" onClick={hamburgerClick}>
                    <img src={HamburgerIcon} alt="hamburger menu"/>
                </button>
                
                <a id="home-link" href="/" onClick={(e) => handleNavigation(e, '/')}>
                    <img src={SmallLogo} alt="bp logo" id="bp-small-logo"/>
                </a>
                <a id="home-link-full" href="/" onClick={(e) => handleNavigation(e, '/')}>
                    <img src={FullLogo} alt="bp logo" id="navBar-bp-full-logo"/>
                </a>
                
                <div id="navBar-items">
                    <li><a href="/about" onClick={(e) => handleNavigation(e, '/about')}>About Us</a></li>
                    <li><a href="/project" onClick={(e) => handleNavigation(e, '/project')}>Projects</a></li>
                    <li><a href="/student" onClick={(e) => handleNavigation(e, '/student')}>Students</a></li>
                    <li><a href="/npo" onClick={(e) => handleNavigation(e, '/npo')}>Non-Profits</a></li>
                </div>
                
                <a id="navBar-button" href="/contact" onClick={(e) => handleNavigation(e, '/contact')}>
                    <p id="navBar-button-text">Contact Us</p>
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow"/>
                </a>
                <a id="navBar-button-small" href="/contact" onClick={(e) => handleNavigation(e, '/contact')}>
                    <img src={NorthEastArrow} alt="arrow" className="white-north-east-arrow-small"/>
                </a>
            </ul>
            
            {<div id="hamburger-menu" className={menuOpen ? "open" : ""}>
                <button onClick={() => setMenuOpen(false)} id="hamburger-close">
                    <img src={CloseIcon} alt="close" id="hamburger-img"/>
                </button>
                <div id="hamburger-items">
                    <div><a href="/about" onClick={(e) => handleNavigation(e, '/about')}>About Us</a></div>
                    <div><a href="/project" onClick={(e) => handleNavigation(e, '/project')}>Projects</a></div>
                    <div><a href="/student" onClick={(e) => handleNavigation(e, '/student')}>Students</a></div>
                    <div><a href="/npo" onClick={(e) => handleNavigation(e, '/npo')}>Non-Profits</a></div>
                </div>
            </div>}
        </div>
    )
}

export default NavBar;