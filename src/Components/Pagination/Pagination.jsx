import React from 'react';
import {BrowserRouter, NavLink } from 'react-router-dom';
import './Pagination.scss';

const Pagination = () => {
    return (
        <div className="ps__pagination">
            <ul className="pagination__list">
                <NavLink to={`/powstaniaslaskie/`} exact activeClassName="pagination_active" ><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/PoWojnie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Korfanty`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IIPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Plebiscyt`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/IIIPowstanie`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
                <NavLink to={`/powstaniaslaskie/Skutki`} activeClassName="pagination_active"><li className="pagination__link"></li></NavLink>
            </ul>
        </div>
    )
}

export default Pagination;