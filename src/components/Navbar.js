import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <img src={Logo} alt="Logo" />
                <h1>BlablaCharrette</h1>

            </div>
            <div className="rightSide">
                <div className="search">
                    <label for="Utilisateur">&#128270;</label>
                    <input type="text" placeholder="Rechercher" />

                    {/* <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" />
                    <input type="text" placeholder="Search..." /> */}
                </div>

                <div className="traject">
                    <label for="Utilisateur">&#8853;</label>
                    <input type="text" type="button" value="Publier un trajet" />

                    {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/add--v1.png" />
                    <button>Publier un trajet</button> */}
                </div>


            </div>

        </div>
    )
}
export default Navbar;