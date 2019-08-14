import React from 'react';
import {BrowserRouter, NavLink } from 'react-router-dom';
import './Pagination.scss';

const Pagination = () => {
    return (
        <div className="ps__pagination">
            <ul className="pagination__list">
                <NavLink to={`/`} exact activeClassName="pagination_active" ><li className="pagination__link"></li></NavLink>
                <NavLink to={`/PoWojnie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/Korfanty`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/IPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/IIPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/Plebiscyt`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/IIIPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/Skutki`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
            </ul>
        </div>
    )
}

export default Pagination;