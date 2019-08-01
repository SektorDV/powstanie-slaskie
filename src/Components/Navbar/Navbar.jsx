import React from 'react';
import './Navbar.scss';
import {BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="ps__navbar">
            <ul>
                <Link to={`/`}><li>Główna</li></Link>
                <Link to={`/PoWojnie`}><li>Śląsk po I Wojnie Światowej</li></Link>
                <Link to={`/Korfanty`}><li>Wojciech Korfanty</li></Link>
                <Link to={`/IPowstanie`}><li>I Powstanie Śląskie</li></Link>
                <Link to={`/IIPowstanie`}><li>II Powstanie Śląskie</li></Link>
                <Link to={`/Plebiscyt`}><li>Plebiscyt</li></Link>
                <Link to={`/IIIPowstanie`}><li>III Powstanie Śląskie</li></Link>
                <Link to={`/Skutki`}><li>Skutki i Ocena</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;