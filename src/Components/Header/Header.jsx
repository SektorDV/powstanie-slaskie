import React from 'react';
import './Header.scss';
import image from '../../res/img/header_logo.png';

const Header = () => {
    return(
        <div className="ps__header">
            <a href="https://polskieradio24.pl/"><img className="ps__logo" src={image} alt="Logo Polskiego Radia 24"></img></a>
            
        </div>
    )
}

export default Header;