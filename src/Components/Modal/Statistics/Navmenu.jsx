import React from 'react';
import './Navmenu.scss';

const Navmenu = props => {
    return(
        <ul className="ps__modalwindow__navmenu" style={{marginLeft: props.selected == 0? '8.5rem':null}}
        >
            {props.menuItems.map((e,index) => {
                 return <li onClick={() => props.handler(index)} key={index} className={`ps__modalwindow__navmenu__item ${props.selected===index ? 'selected' : ''}`}>{e.name}</li>
            })}
        </ul>
    )
}

export default Navmenu;