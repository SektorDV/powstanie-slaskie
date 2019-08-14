import React from 'react';
import './Navbar.scss';
import {BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = ({match}) => {
    return(
        <div className="ps__navbar">
            <ul>
                <NavLink to={`/`} exact activeClassName="nav_active"><li><div className="nav_select"></div><span>Główna</span></li></NavLink>
                <NavLink to={`/PoWojnie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Śląsk po I Wojnie Światowej</span></li></NavLink>
                <NavLink to={`/Korfanty`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Wojciech Korfanty</span></li></NavLink>
                <NavLink to={`/IPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>I Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/IIPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>II Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/Plebiscyt`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Plebiscyt</span></li></NavLink>
                <NavLink to={`/IIIPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>III Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/Skutki`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Skutki i Ocena</span></li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar;