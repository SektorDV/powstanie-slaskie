import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = () => {
    return (
        <div className="ps__pagination">
            <ul className="pagination__list">
                <Link to={`/`}><li className="pagination__link"></li></Link>
                <Link to={`/PoWojnie`}><li className="pagination__link"></li></Link>
                <Link to={`/Korfanty`}><li className="pagination__link"></li></Link>
                <Link to={`/IPowstanie`}><li className="pagination__link"></li></Link>
                <Link to={`/IIPowstanie`}><li className="pagination__link"></li></Link>
                <Link to={`/Plebiscyt`}><li className="pagination__link"></li></Link>
                <Link to={`/IIIPowstanie`}><li className="pagination__link"></li></Link>
                <Link to={`/Skutki`}><li className="pagination__link"></li></Link>
            </ul>
        </div>
    )
}

export default Pagination;