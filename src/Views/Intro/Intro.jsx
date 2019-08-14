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
            Ślązacy trzykrotnie chwytali za broń, by zamanifestować swoją polskość. Prezentujemy multimedialny serwis edukacyjny, który stanowi kompendium wiedzy o trzech Powstaniach Śląskich. <strong>Zachęcamy do wysłuchania unikatowych nagrania głosów uczestników Powstań Śląskich.</strong>  
            </p>
            <Buttons map="1" audio="1" video="1" stopWorking={true}/>
            </div>
            
            
            <div className="intro__img" style={{
                backgroundPositionX: -7.1 + imgStyle.X+'rem',
                backgroundPositionY:`-3rem`
                }}>
                <div className="intro__soldier"style={{
                    left: -6.5 + imgStyle.X + 'rem',
                    top:3 +imgStyle.Y+'rem'
                    }}></div>
                <span className="intro__line" style={{
                    left:3.25 +imgStyle.X+'rem',
                    top:16.35 +imgStyle.Y+'rem'
                    }}></span>
                <span class="intro__imgDesc">Narodowe Archiwum Cyfrowe</span>
            </div>
            

        </div>
    )
}

export default Intro;