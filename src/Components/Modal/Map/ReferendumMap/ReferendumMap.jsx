import React from 'react';
import './ReferendumMap.scss';
import Map from './referendummap.png';
import Stripes from '../../Statistics/Skutki/stripes.png'


const ReferendumMap = props => {
    return(
        <div className="ps__modalwindow__map__content" style={{backgroundImage: `url(${props.bg})`}}>
            <div className="ps__modalwindow__map__grid">
                <div className="ps__modalwindow__map__grid__title">
                    <h1>Wyniki Plebiscytu</h1>
                    <h2>20.03/1921</h2>
                </div>
                <div className="ps__modalwindow__map__grid__legend">
                    <h1>LEGENDA</h1>
                    <div className="legend__line"></div>
                    <div className="legend__label">Historyczne granice Górnego Śląska</div>
                    <div className="legend__dashed__line" style={{borderStyle: "solid"}}></div>
                    <div className="legend__label">Polsko-niemiecka granica wytyczona po Plebiscycie (od 1922)</div>
                    <div className="legend__box__large box__blue" style={{backgroundImage: `url(${Stripes})`, backgroundSize: "cover", gridArea: "4 / 1 / 5 / 2"}}></div>
                    <div className="legend__label">Obszar plebiscytowy</div>
                    <div className="legend__box__large box__blue" style={{gridArea: "5 / 1 / 6 / 2"}}></div>
                    <div className="legend__label">Niemcy</div>
                    <div className="legend__box__large box__red" style={{gridArea: "6/1/7/2"}}></div>
                    <div className="legend__label">Polska</div>
                    <div className="legend__box__large box__gray" style={{gridArea: "7/1/8/2"}}></div>
                    <div className="legend__label">Czechosłowacja</div>
            

                </div>
                <div className="ps__modalwindow__map__grid__map">
                    <img src={Map} alt="Mapa trzeciego powstania śląskiego" onLoad={(e) => e.target.style.opacity = 1} />
                </div>
            </div>

        </div>
    )
}

export default ReferendumMap;