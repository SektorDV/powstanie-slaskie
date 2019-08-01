import React from 'react';
import './Intro.scss';
import Buttons from '../../Components/Buttons/Buttons'

const Intro = () => {
    return(
        
        <div className="ps__intro">
            <h1 className="intro_title">Powstania Śląskie</h1>
            <h2 className="intro_date">1919-1921
                <span class="intro__line"></span>
            </h2>
            <p className= "intro_paragraph">
                Górny Śląsk był w chwili zakończenia I wojny światowej jednym z najlepiej rozwiniętych 
                pod względem przemysłowym regionów Niemiec. Olbrzymie pokłady węgla i wysoki stopień 
                uprzemysłowienia czynił z niego potencjalne źródło olbrzymich zysków. Jednocześnie był
                 to obszar, który zamieszkiwali nieomal po równo Polacy i Niemcy. 
            </p>
            <Buttons map="1" audio="1" video="1"/>
            <div className="intro__img">
                <div className="intro__soldier"></div>
            </div>
        </div>
    )
}

export default Intro;