import React from 'react';
import './Map.scss';

const Map = props => {
    return(
        <>
            {props.content[0].layout}
            <div className="ps__modalwindow__autor" style={{position: 'absolute', right: '3%', bottom: '10%', fontSize: "0.5rem", fontFamily: "'Lato', sans-serif"}}>Źr: Marcin Kordecki, Dawid Smolorz, „Atlas historyczny. Górny Śląsk w XX wieku”, Gliwice-Opole 2013</div>

        </>
    )
}

export default Map;