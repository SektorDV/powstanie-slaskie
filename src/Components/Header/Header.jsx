import React from 'react';
import './Header.scss';
import image from '../../res/img/header_logo.png';

const Header = () => {
    return(
        <div className="ps__header">
            <img className="ps__logo" src={image}></img>
            
        </div>
    )
}

export default Header;