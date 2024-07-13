import React, {useState} from "react";
import './navbar.css'
import logo from '../../assets/logosolo.svg';
import menuIcon from '../../assets/menu-icon.svg';
import menuClose from '../../assets/menu-close-icon.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="afriano logo" className="logo-afriano" />
            <img src={menuIcon} alt="Menu icon" className="nav-mob-open"/>
            <ul className="nav-menu">
                <img src={menuClose} alt="" className="nav-mob-close" />
                <a><li>Home</li></a>
                <a href="#about"><li>About Me</li></a>
                <a href="#portfolio"><li>Portfolio</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    )
}

export default Navbar