import { NavLink } from 'react-router-dom';

import React from 'react';

import './Footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <NavLink to="/contact"><h3>Contact</h3></NavLink>
        </div>
    )
}
export default Footer;