import React from 'react';
import './Korfanty.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Background from '../../res/images/bg/korfantybg.png';
import Page from '../../Components/Page/Page';

const content = {
    headline: `„Mości panowie, nie chcemy ani piędzi ziemi niemieckiej. Żądamy jedynie, w myśl postanowień punktu trzynastego programu Wilsona, własnej, jednej, złożonej z ziem trzech zaborów Polski”`,
    subheadline: `mowa posła Wojciecha Korfantego w Reichstagu, 25 października 1918`,
    bg: Background
}

const Korfanty = () => {
    return(
        <Page content={content}></Page>
    )
}

export default Korfanty;