import React from 'react';
import './2ndUprisingMap.scss';
import Map from './2nduprisingmap.png';
import Stripes from '../../Statistics/Skutki/stripes.png'
const SecondUprisingMap = props => {
    return(
        <div className="ps__modalwindow__map__content" style={{backgroundImage: `url(${props.bg})`}}>
            <div className="ps__modalwindow__map__grid">
                <div className="ps__modalwindow__map__grid__title">
                    <h1>II&nbsp;Powstanie&nbsp;Śląskie</h1>
                    <h2>19 - 20.08/1920</h2>
                </div>
                <div className="ps__modalwindow__map__grid__legend">
                    <h1>LEGENDA</h1>
                    <div className="legend__line"></div>
                    <div className="legend__label">Historyczne granice Górnego Śląska</div>
                    <div className="legend__dashed__line"></div>
                    <div className="legend__label">Obszar objęty powstaniem 25.08.1920</div>
                    <div className="legend__dashed__line line__green"></div>
                    <div className="legend__label">Obszar objęty powstaniem 26.08.1920</div>
                    <div className="legend__dashed__line line__cyan"></div>
                    <div className="legend__label">Obszar objęty powstaniem 22.08.1920</div>
                    <div className="legend__box__small box__black" style={{gridArea: '6 / 1 / 7 / 2'}}></div>
                    <div className="legend__label">Miejscowości blokowane przez powstańców</div>
                    <div className="legend__box__large" style={{backgroundImage: `url(${Stripes})`, backgroundSize: 'cover', gridArea: `7 / 1 / 8 / 2`}}></div>
                    <div className="legend__label">Obszar plebiscytowy</div>
                    <div className="legend__box__plflag" style={{gridArea: '8 / 1 / 9 / 2'}}></div>
                    <div className="legend__label">Dowództwo wojsk polskich</div>
                    <div className="legend__box__large box__blue" style={{gridArea: '9 / 1 / 10 / 2'}}></div>
                    <div className="legend__label">Niemcy</div>
                    <div className="legend__box__large box__red" style={{gridArea: '10 / 1 / 11 / 2'}}></div>
                    <div className="legend__label">Polska</div>
                    <div className="legend__box__large box__gray" style={{gridArea: '11 / 1 / 12 / 2'}}></div>
                    <div className="legend__label">Czechosłowacja</div>

                    
                </div>
                <div className="ps__modalwindow__map__grid__map">
                    <img src={Map} alt="Mapa trzeciego powstania śląskiego" onLoad={(e) => e.target.style.opacity = 1} />
                </div>
            </div>

        </div>
    )
}

export default SecondUprisingMap;