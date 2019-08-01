import React from 'react';
import './Intro.scss';
import Buttons from '../../Components/Buttons/Buttons'

const Intro = () => {
    return(
        
        <div className="ps__intro">
            <div className="intro__text">
            <h1 className="intro__title">Powstania Śląskie</h1>
            <h2 className="intro__date">1919-1921
                <span class="intro__line"></span>
            </h2>
            <p className= "intro__paragraph">
                Górny Śląsk był w chwili zakończenia I wojny światowej jednym z najlepiej rozwiniętych 
                pod względem przemysłowym regionów Niemiec. Olbrzymie pokłady węgla i wysoki stopień 
                uprzemysłowienia czynił z niego potencjalne źródło olbrzymich zysków. Jednocześnie był
                 to obszar, który zamieszkiwali nieomal po równo Polacy i Niemcy. 
            </p>
            <Buttons map="1" audio="1" video="1"/>
            </div>
            <div className="intro__img">
                <div className="intro__soldier"></div>
            </div>
        </div>
    )
}

export default Intro;