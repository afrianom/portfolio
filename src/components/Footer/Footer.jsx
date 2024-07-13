import React from "react";
import './footer.css';

let date = new Date();
let currentYear = date.getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>©{currentYear} afriano</p>
        </div>
    )
}

export default Footer;