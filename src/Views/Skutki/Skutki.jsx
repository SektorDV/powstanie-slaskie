import React from 'react';
import './Skutki.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/skutki.png';
import Small from '../../res/images/small/skutkismall.png';
import Terytorium from '../../Components/Modal/Statistics/Skutki/Terytorium';
import Terytoriumimg from '../../res/images/bg/territorybg.png';
import Ludnoscimg from '../../res/images/bg/populationbg.png';
import Ludnosc from '../../Components/Modal/Statistics/Skutki/Ludnosc';
import Gospodarka from '../../Components/Modal/Statistics/Skutki/Gospodarka';
import Gospodarkaimg from '../../res/images/bg/economybg.png';
import AudioImg from "../../res/images/bg/skutki_modal_audio.png";
import VideoImg from "../../res/images/bg/skutki_modal_video.png";


const content={
    headline: `„Śląsk postawił przed Polską konieczność rozstrzygnięcia nowych wielkich problemów, wciągnął całe społeczeństwo jeszcze silniej i zdecydowaniej w orbitę cywilizacji zachodu. Śląsk wywołał konieczność szybkiej rozbudowy Gdyni i połączenia wybrzeża morskiego Polski bezpośrednią siecią komunikacyjną z całą Rzeczpospolitą”.`,
    subheadline: `Eugeniusz Kwiatkowski, minister, współtwórca portu w Gdyni i Centralnego Okręgu Przemysłowego`,
    bg: Background,
    bgAuthor: 'Eugeniusz Kwiatkowski / Narodowe Archiwum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Efekty i skutki powstań",
            type: "text",
            content: [<p>
            Powstania Śląskie doprowadziły do <strong>korzystnego dla Polski </strong>
            podziału Śląska. Choć do odrodzonej Rzeczpospolitej została przyłączona
        mniejsza część obszaru plebiscytowego, to    <strong>stanowił on najlepiej rozwiniętą </strong>pod względem przemysłowym
            część Górnego Śląska.
        </p>,
        <p>
        Śląsk odgrywał    <strong>kluczową rolę dla odradzającej się Rzeczpospolitej</strong>. Jak
            uważa prof. Maria Wanda Wanatowicz, historyk z Uniwersytetu Śląskiego, Śląsk przekształcił Polskę z kraju
            rolniczego w <strong>przemysłowo-rolniczy</strong>. W latach 20. z tego
            pochodziło stąd <strong>80 proc. polskiego eksportu</strong>. Od 1933 roku
        surowiec był transportowany specjalną magistralą kolejową do    <strong>Gdyni</strong>. To również dzięki produkcji żelaza i węgla na
        Górnym Śląsku możliwe było stworzenie w latach 30.    <strong>Centralnego Okręgu Przemysłowego</strong>.
        </p>,
        <p>
            Województwo śląskie, z uwagi na uwarunkowania narodowościowe i kulturowe,
            cieszyło się w II RP autonomią. Posiadało własny Sejmy i Skarb.
        </p>]
        },
        {
            label: "Statystyki i dane",
            type: "data",
            content: {
                modalTabs: [
                    {
                        name: "terytorium",
                        layout: <Terytorium bg={Terytoriumimg}/>,
                        bgImgAuthor: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe"
                    },
                    {
                        name: "ludność",
                        layout: <Ludnosc bg={Ludnoscimg}/>,
                        bgImgAuthor: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe"
                    },
                    {
                        name: "gospodarka",
                        layout: <Gospodarka bg={Gospodarkaimg}/>,
                        bgImgAuthor: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe"

                    }
            ]

            }
        }
    ],
    multimediaItems: [
        {
            type: "video",
            content: {
              img: AudioImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe",
              content: [
                {
                  title: "Nagranie numer 1",
                  text:
                    "- Górny Śląsk był skarbem przemysłowym. Choć ten teren był bardzo malutki, odpowiadał za 90 proc. eksportu Rzeczpospolitej. Również potęga morska Polski opierała się na Śląsku – do budowy portu w Gdyni wykorzystano maszyny przewiezione z Górnego Śląska – wyjaśniał Jan Planta, historyk z Muzeum Powstań Śląskich w Świętochłowicach.",
                  source: "38f946ae-49c7-4b71-b10b-219961c73613"
                },
                
              ]
            }
          },
       
        {
            type: "audio",
            content: {
              img: VideoImg,
              author: "Narodowe Archiwum Cyfrowe",
              content: [
                {
                  title: 'Ci, którzy zostali ' ,
                  text:
                  `- Wielu powstańców pozostało po stronie niemieckiej. Aż do 1939 roku organizowaliśmy życie społeczne Polaków w Niemczech - mówił Jan Wawrzynek, członek Związku Polaków w Niemczech. (PR, 28.04.1971)`,                 
                  source: "e28b250b-f5e0-45be-921a-eb495cf90952"
                },
                {
                    title: "Po dwudziestu latach pokoju",
                    text:
                    'Powstańcy śląscy wspominają wrzesień 1939 roku i ponowną walkę o polskość regionu. (PR, 2.09.1969)',
                    source: "b3c7520e-3e10-4548-9da2-6e9755ca3ff1"
                  },
                 
                  
                
              ]
            }
          },
    ]
}


const Skutki = () => {
    return(
        <Page content={content}></Page>
    )
}

export default Skutki;