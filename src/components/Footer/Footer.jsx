import React from "react";
import './footer.css';

let date = new Date();
let currentYear = date.getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>©{currentYear} By Piperiao</p>
        </div>
    )
}

export default Footer;