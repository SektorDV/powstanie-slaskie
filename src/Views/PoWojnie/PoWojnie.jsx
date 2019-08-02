import React from 'react';
import './PoWojnie.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/powojniebg.png';
import Small from '../../res/images/small/powojniesmall.png';

const content = {
    headline: `"Wszystkie dążenia zmierzające do oderwania Górnego Śląska od Rzeszy Niemieckiej stanowią przestępstwo zdrady stanu."`,
    subheadline: `z rozporządzenia Walthera von Miguela, 31 grudnia 1918`,
    bg: Background,
    smallImg: Small,
    titleLeft: true,
    menuItems: [
        {
            label: "Problem śląska po i wojnie światowej",
            type: "text",
            content: `Górny Śląsk był w chwili zakończenia I wojny światowej jednym z najlepiej rozwiniętych pod względem przemysłowym regionów Niemiec. Olbrzymie pokłady węgla i wysoki stopień uprzemysłowienia czynił z niego potencjalne źródło olbrzymich zysków. Jednocześnie był to obszar, który zamieszkiwali nieomal po równo Polacy i Niemcy.

            Nic dziwnego, że oba państwa chciały Górnego Śląska w swoich granicach. Sprawa regionu była też obiektem gry międzynarodowej podczas konferencji paryskiej po I wojnie światowej. Francja optowała za przyłączeniem obszaru do Polski, widziała bowiem w Polsce naturalnego sojusznika, który szachowałby Niemcy od wschodu. Wielka Brytania z kolei obawiała się wzrostu znaczenia Francji, a ponadto uważała, że Niemcy bez zysków z górnośląskich zakładów przemysłowych nie będą w stanie wypłacić kontrybucji wojennych. Zdecydowano, że kwestię przynależności Górnego Śląska rozstrzygnie w przyszłości plebiscyt.
            
            Równocześnie wieść o klęsce Niemiec i odradzaniu się państwa polskiego, w połączeniu z trudną sytuacją materialną spowodowaną wojną, rozbudziły wolę powrotu Ślązaków do Ojczyzny.  Niemcy odpowiedzieli terrorem. Na teren Górnego Śląska sprowadzone zostały niemieckie oddziały wojskowe. 13 stycznia 1919 komisarz Otto Hörsing ogłosił stan oblężenia na Górnym Śląsku, w wyniku czego zniesiono nietykalność osobistą, a wojsko uzyskało prawo dokonywania rewizji i aresztowań polskich działaczy. Pogarszająca się sytuacja pchnęła polskich działaczy do podjęcia decyzji o rozpoczęciu I powstania śląskiego. 
            `
        },
        {
            label: "Polskość na górnym śląsku",
            type: "text",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
        },
        {
            label: "śląsk w traktacie wersalskim",
            type: "text",
            content: `Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...`
        },
        {
            label: 'statystyki i dane',
            type: "data",
            content: ``
        }
    ],
    multimediaItems: [
        {
            type: 'audio'
        },
        {
            type: 'video'
        },
        {
            type: 'map'
        }
    ]
}


const PoWojnie = () => {
    return(
        <Page content={content}></Page>
    )
}

export default PoWojnie;