import React from 'react';
import './Terytorium.scss';
import Chart1 from './territorychart1.png';
import Map from './territorymap.png';
import Stripes from './stripes.png';

const Terytorium = () => {
    return (
        <div className="ps__modalwindow__territory__grid">
            <h2>Podział terytorium obszaru plebiscytowego</h2>
            <div className="ps__modalwindow__territory__grid__imageleft">
                <img src={Chart1} alt="Wykres podziału terytorium" />
            </div>
            <div className="ps__modalwindow__territory__grid__legend">
                <div className="ps__modalwindow__territory__grid__legend__top">LEGENDA</div>
                <div className="ps__modalwindow__territory__grid__legend__mid">
                    <div className="ps__modalwindow__territory__grid__legend__mid__line"></div>
                    Historyczne granice Górnego Śląska
                </div>
                <div className="ps__modalwindow__territory__grid__legend__bottom">
                    <div className="ps__modalwindow__territory__grid__legend__bottom__box box__blue"></div>
                    <span>Niemcy</span>
                    <div className="ps__modalwindow__territory__grid__legend__bottom__box box__gray"></div>
                    <span>Czechosłowacja</span>
                    <div className="ps__modalwindow__territory__grid__legend__bottom__box box__red"></div>
                    <span>Polska</span>
                    <div className="ps__modalwindow__territory__grid__legend__bottom__box box__striped" style={{backgroundImage: `url(${Stripes})`}}></div>
                    <span>Obszar plebiscytowy</span>
                </div>
            </div>
            <div className="ps__modalwindow__territory__grid__map">
                <img src={Map} alt="Mapa terytorium" />
            </div>
        </div>
    )
}

export default Terytorium;