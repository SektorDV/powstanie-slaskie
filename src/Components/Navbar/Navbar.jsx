import React from 'react';
import './Navbar.scss';
import {BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = ({match}) => {
console.log(match)
    return(
        <div className="ps__navbar">
            <ul>
                <NavLink to={`/powstaniaslaskie/`} exact activeClassName="nav_active"><li><div className="nav_select"></div><span>Główna</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/PoWojnie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Śląsk po I Wojnie Światowej</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Korfanty`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Wojciech Korfanty</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>I Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IIPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>II Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Plebiscyt`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Plebiscyt</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IIIPowstanie`} activeClassName="nav_active"><li><div className="nav_select"></div><span>III Powstanie Śląskie</span></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Skutki`} activeClassName="nav_active"><li><div className="nav_select"></div><span>Skutki i Ocena</span></li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar;