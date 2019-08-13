import React from 'react';
import './PoWojnie.scss';
import AfterWarStats1 from './afterwarstats1.png';
import AfterWarStats2 from './afterwarstats2.png';

const PoWojnieStats = () => {
    return(
        <div className="ps__modalwindow__afterwar__main">
            <h2>Ludność Górnego Śląska i podział wg używanego języka</h2>
            <img src={AfterWarStats1} alt="Liczba ludności Górnego Śląska"/>
            <img src={AfterWarStats2} alt="Podział ludności Górnego Śląska pod względem języka"/>
        </div>
    )
}

export default PoWojnieStats;