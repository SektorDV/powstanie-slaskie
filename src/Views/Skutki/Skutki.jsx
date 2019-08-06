import React from 'react';
import './Skutki.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/skutki.png';
import Small from '../../res/images/small/skutkismall.png';

const content={
    headline: `„Śląsk postawił przed Polską konieczność rozstrzygnięcia nowych wielkich problemów, wciągnął całe społeczeństwo jeszcze silniej i zdecydowaniej w orbitę cywilizacji zachodu. Śląsk wywołał konieczność szybkiej rozbudowy Gdyni i połączenia wybrzeża morskiego Polski bezpośrednią siecią komunikacyjną z całą Rzeczpospolitą.”`,
    subheadline: `Eugeniusz Kwiatkowski, minister, współtwórca portu w Gdyni i Centralnego Okręgu Przemysłowego`,
    bg: Background,
    bgAuthor: 'Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Efekty i skutki powstań",
            type: "text",
            content: `<p>
            Powstania Śląskie doprowadziły do <strong>korzystnego dla Polski </strong>
            podziału Śląska. Choć do odrodzonej Rzeczpospolitej została przyłączona
        mniejsza część obszaru plebiscytowego, to    <strong>stanowił on najlepiej rozwiniętą </strong>pod względem przemysłowym
            część Górnego Śląska.
        </p>
        <p>
        Śląsk odgrywał    <strong>kluczową rolę dla odradzającej się Rzeczpospolitej</strong>. Jak
            uważa prof. Maria Wanda Wanatowicz, Śląsk przekształcił Polskę z kraju
            rolniczego w <strong>przemysłowo-rolniczy</strong>. W latach 20. z tego
            pochodziło stąd <strong>80 proc. polskiego eksportu</strong>. Od 1933 roku
        surowiec był transportowany specjalną magistralą kolejową do    <strong>Gdyni</strong>. To również dzięki produkcji żelaza i węgla na
        Górnym Śląsku możliwe było stworzenie w latach 30.    <strong>Centralnego Okręgu Przemysłowego</strong>.
        </p>
        <p>
            Województwo śląskie, z uwagi na uwarunkowania narodowościowe i kulturowe,
            cieszyło się w II RP autonomią. Posiadało własny Sejmy i Skarb.
        </p>`
        },
        {
            label: "Statystyki i dane",
            type: "data",
            content: ``
        }
    ],
    multimediaItems: [
        {
            type: "video"
        },
        {
            type: "map"
        }
    ]
}


const Skutki = () => {
    return(
        <Page content={content}></Page>
    )
}

export default Skutki;