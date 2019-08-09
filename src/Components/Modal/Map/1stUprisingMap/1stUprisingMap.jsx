import React from 'react';
import './1stUprisingMap.scss';
import Map from './1stuprisingmap.png';

const FirstUprisingMap = props => {
    return(
        <div className="ps__modalwindow__map__content" style={{backgroundImage: `url(${props.bg})`}}>
            <div className="ps__modalwindow__map__grid">
                <div className="ps__modalwindow__map__grid__title">
                    <h1>I Powstanie Śląskie</h1>
                    <h2>16 - 24.08/1919</h2>
                </div>
                <div className="ps__modalwindow__map__grid__legend">
                    <h1>LEGENDA</h1>
                    <div className="legend__line"></div>
                    <div className="legend__label">Historyczne granice Górnego Śląska</div>
                    <div className="legend__dashed__line"></div>
                    <div className="legend__label">Najdalszy zasięg powstania </div>
                    <div className="legend__countries">
                    <div className="legend__box__large box__blue"></div>
                    <div className="legend__label">Niemcy</div>
                    <div className="legend__box__large box__red"></div>
                    <div className="legend__label">Polska</div>
                    <div className="legend__box__large box__gray"></div>
                    <div className="legend__label">Czechosłowacja</div>
                    </div>
                    <div className="legend__box__large box__yellow"></div>
                    <div className="legend__label">Miejsce podjęcia decyzji o wybuchu powstania</div>
                    <div className="legend__box__plflag"></div>
                    <div className="legend__label">Dowództwo wojsk polskich</div>
                    <div className="legend__box__large box__cyan"></div>
                    <div className="legend__label">Dowództwo straży granicznej</div>

                </div>
                <div className="ps__modalwindow__map__grid__map">
                    <img src={Map} alt="Mapa trzeciego powstania śląskiego" onLoad={(e) => e.target.style.opacity = 1} />
                </div>
            </div>

        </div>
    )
}

export default FirstUprisingMap;