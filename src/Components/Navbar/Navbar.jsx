import React from 'react';
import './Navbar.scss';
import {BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="ps__navbar">
            <ul>
                <li><Link to={`/`}>Główna</Link></li>
                <li><Link to={`/PoWojnie`}>Śląsk po I Wojnie Światowej</Link></li>
                <li><Link to={`/Korfanty`}>Wojciech Korfanty</Link></li>
                <li><Link to={`/IPowstanie`}>I Powstanie Śląskie</Link></li>
                <li><Link to={`/IIPowstanie`}>II Powstanie Śląskie</Link></li>
                <li><Link to={`/Plebiscyt`}>Plebiscyt</Link></li>
                <li><Link to={`/IIIPowstanie`}>III Powstanie Śląskie</Link></li>
                <li><Link to={`/Skutki`}>Skutki i Ocena</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;