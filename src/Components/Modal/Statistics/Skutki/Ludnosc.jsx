import React from 'react';
import './Ludnosc.scss';
import Chart from './populationchart.png';

const Ludnosc = () => {
    return(
        <div className="ps__modalwindow__population__grid">
            <h2>Podział ludności terytorium plebiscytowego</h2>
            <div className="ps__modalwindow__population__grid__image">
                <img src={Chart} alt="Wykres ludności" />
            </div>
        </div>
        
    )
}

export default Ludnosc;