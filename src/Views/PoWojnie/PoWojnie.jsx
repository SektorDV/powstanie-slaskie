import React from 'react';
import './PoWojnie.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/powojniebg.png';

const content = {
    headline: `"Wszystkie dążenia zmierzające do oderwania Górnego Śląska od Rzeszy Niemieckiej stanowią przestępstwo zdrady stanu."`,
    subheadline: `z rozporządzenia Walthera von Miguela, 31 grudnia 1918`,
    bg: Background,
    titleLeft: true
}


const PoWojnie = () => {
    return(
        <Page content={content}></Page>
    )
}

export default PoWojnie;