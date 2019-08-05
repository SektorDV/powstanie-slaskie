import React from 'react';
import './IPowstanie.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/ipowstanie.png';
import Small from '../../res/images/small/ipowstaniesmall.png';
import PersonsImg from '../../res/images/bg/ipowstaniepostacie.png'

const content={
    headline: `"Zwycięstwo osiągniemy za wszelką cenę 
    i nie ma takiego mocarza na świecie, 
    który by mógł nas okuć ponownie 
    w kajdany germańskie" `,
    subheadline: `z odezwy Wojciecha Korfantego do rodaków, 3 maja 1921`,
    bg: Background,
    bgAuthor: 'Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "I Powstanie Śląskie",
            type: "text",
            content: `<p>Pogarszająca się sytuacja ekonomiczna, spowodowana niewydolnością gospodarki niemieckiej po I wojnie światowej, wieści o przetaczającej się przez Niemcy rewolucji, terror wprowadzony przez władze w regionie, połączony z informacją o zwycięstwie Powstania Wielkopolskiego rozbudził wśród polskich mieszkańców Górnego Śląska chęć przyłączenia regionu do Polski.</p> 

            <p>Bezpośrednim impulsem dla rozpoczęcia powstania była masakra robotników w Mysłowicach. 15 sierpnia oddział niemieckiego Grenzschutzu (niemieckiej „Straży Granicznej”) otworzył ogień do ludzi, którzy zgromadzili się na terenie mysłowickiej kopalni, domagając się zaległych wypłat. Zginęło siedmiu górników, dwie kobiety i 13-letni chłopiec.</p> 
            
            <p>Decyzja o wybuchu I Powstania Śląskiego została podjęta na spotkaniu dowódców POW, którzy w obawie przed aresztowaniami udali się na emigrację do Piotrowic w ówczesnej Czechosłowacji. Główną rolę podczas spotkania odgrywał Maksymilian Iksal, który jednak nie zdecydował się wziąć na siebie odpowiedzialności dowodzenia całym powstaniem.</p> 
            
            <p>Wobec aresztowania Józefa Grzegorzka, dowódcy Polskiej Organizacji Wojskowej Górnego Śląska tuż przed wybuchem powstania, na czele oddziałów powstańczych stanął Alfons Zgrzebniok.</p>
            <p>Zryw trwał zaledwie tydzień. Zabrakło koordynacji działań powstańczych, właściwego uzbrojenia oraz wsparcia odrodzonej Rzeczpospolitej, która borykała się w tamtym czasie z najazdem bolszewickim. Alfons Zgrzebniok wydał rozkaz zaprzestania walk 26 sierpnia 1919. 
            60 tys. Polaków -1218 spośród nich poległo, 794 odniosło rany.</p>
            <p>III Powstanie Śląskie zadecydowało o przyznaniu Polsce najbardziej uprzemysłowionej części Górnego Śląska.</p> 
            
            `
        },
        {
            label: "Przywódcy powstania",
            type: "persons",
            content: {
                img: PersonsImg
            }
        }
    ],
    multimediaItems: [
        {
            type: "audio"
        },
        {
            type: "video"
        },
        {
            type: "map"
        }
    ]
}


const IPowstanie = () => {
    return(
            <Page content={content}></Page>
        )
}

export default IPowstanie;