import React from 'react';
import './3rdUprisingMap.scss';
import Map from './3rduprisingmap.png';

const ThirdUprisingMap = props => {
    return(
        <div className="ps__modalwindow__map__content" style={{backgroundImage: `url(${props.bg})`}}>
            <div className="ps__modalwindow__map__grid">
                <div className="ps__modalwindow__map__grid__title">
                    <h1>III Powstanie Śląskie</h1>
                    <h2>2/3.05 - 08/1920</h2>
                </div>
                <div className="ps__modalwindow__map__grid__legend">
                    <h1>LEGENDA</h1>
                    <div className="legend__line"></div>
                    <div className="legend__label">Historyczne granice Górnego Śląska</div>
                    <div className="legend__dashed__line"></div>
                    <div className="legend__label">Obszar objęty powstaniem / 25.08.1920</div>
                    <div className="legend__box__small box__black"></div>
                    <div className="legend__label">Miejscowości blokowane przez powstańców</div>
                    <div className="legend__box__small box__blue"></div>
                    <div className="legend__label">Bunty w polskich oddziałach pod koniec powstania</div>
                    <div className="legend__box__plflag"></div>
                    <div className="legend__label">Dowództwo wojsk polskich</div>
                    <div className="legend__box__large box__blue"></div>
                    <div className="legend__label">Niemcy</div>
                    <div className="legend__box__large box__red"></div>
                    <div className="legend__label">Polska</div>
                    <div className="legend__box__large box__gray"></div>
                    <div className="legend__label">Czechosłowacja</div>
                </div>
                <div className="ps__modalwindow__map__grid__map">
                    <img src={Map} alt="Mapa trzeciego powstania śląskiego" onLoad={(e) => e.target.style.opacity = 1} />
                </div>
            </div>

        </div>
    )
}

export default ThirdUprisingMap;