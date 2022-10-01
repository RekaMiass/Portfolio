import React from "react";
import {NavLink} from 'react-router-dom';
import {useRef} from 'react';
import './Navbar.css';


const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <nav className='navbar'>
            <ul ref={navRef} className="nav-list">
                <NavLink onClick={showNavbar}  to="/" className="nav-link">
                    <li>Home</li>
                </NavLink>
                <NavLink onClick={showNavbar} to="/about" className="nav-link">
                    <li>About</li>
                </NavLink>
                <NavLink onClick={showNavbar} to="/portfolio" className="nav-link">
                    <li>Portfolio</li>
                </NavLink>
                <NavLink onClick={showNavbar} to="/contact" className="nav-link">
                    <li>Contact</li>
                </NavLink>
            </ul>
            <button className="menu-icon" onClick={showNavbar}>
            <span className="material-symbols-outlined">
            menu
            </span>
            </button>
        </nav>
    )
}

export default Navbar;