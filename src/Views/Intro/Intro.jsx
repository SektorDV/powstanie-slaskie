import React, {useState, useEffect} from 'react';
import './Intro.scss';
import Buttons from '../../Components/Buttons/Buttons';
import {parallax} from '../../functions/parallax';


const Intro = () => {
    const [imgStyle, setImgStyle] = useState({X:0,Y:0})
    const [x, updatePositionX] = useState();
    
    useEffect(()=>parallax(x, setImgStyle), [x]);



    return(
        
        <div className="ps__intro" onMouseMove={e=>updatePositionX(e.clientX)}>
            
            
            <div className="intro__text">
            <h1 className="intro__title">Powstania <br /> Śląskie</h1>
            <h2 className="intro__date">1919-1921</h2>
            <p className= "intro__paragraph">
                Górny Śląsk był w chwili zakończenia I wojny światowej jednym z najlepiej rozwiniętych 
                pod względem przemysłowym regionów Niemiec. Olbrzymie pokłady węgla i wysoki stopień 
                uprzemysłowienia czynił z niego potencjalne źródło olbrzymich zysków. Jednocześnie był
                 to obszar, który zamieszkiwali nieomal po równo Polacy i Niemcy. 
            </p>
            <Buttons map="1" audio="1" video="1"/>
            </div>
            
            
            <div className="intro__img" style={{
                backgroundPositionX:-142 + imgStyle.X+'px',
                backgroundPositionY:-80 + imgStyle.Y+'px'
                }}>
                <div className="intro__soldier"style={{
                    left:-130 +imgStyle.X+'px',
                    top:22 +imgStyle.Y+'px'
                    }}></div>
                <span className="intro__line" style={{
                    left:65 +imgStyle.X+'px',
                    top:327 +imgStyle.Y+'px'
                    }}></span>

            </div>
            

        </div>
    )
}

export default Intro;