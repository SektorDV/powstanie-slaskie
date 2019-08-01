import React from 'react';
import './Navbar.scss';
import {BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="ps__navbar">
            <ul>
                <NavLink to={`/`} activeClassName="nav_active"><li>Główna</li></NavLink>
                <NavLink to={`/PoWojnie`} activeClassName="nav_active"><li>Śląsk po I Wojnie Światowej</li></NavLink>
                <NavLink to={`/Korfanty`} activeClassName="nav_active"><li>Wojciech Korfanty</li></NavLink>
                <NavLink to={`/IPowstanie`} activeClassName="nav_active"><li>I Powstanie Śląskie</li></NavLink>
                <NavLink to={`/IIPowstanie`} activeClassName="nav_active"><li>II Powstanie Śląskie</li></NavLink>
                <NavLink to={`/Plebiscyt`} activeClassName="nav_active"><li>Plebiscyt</li></NavLink>
                <NavLink to={`/IIIPowstanie`} activeClassName="nav_active"><li>III Powstanie Śląskie</li></NavLink>
                <NavLink to={`/Skutki`} activeClassName="nav_active"><li>Skutki i Ocena</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar;