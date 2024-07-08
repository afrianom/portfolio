import React from "react";
import './navbar.css'
import logo from '../../assets/logosolo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="afriano logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar