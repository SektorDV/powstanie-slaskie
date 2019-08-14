import React from 'react';
import './PoWojnie.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/powojniebg.png';
import Small from '../../res/images/small/powojniesmall.png';
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";
import PoWojnieStats from "../../Components/Modal/Statistics/PoWojnie/PoWojnie";
import PoWojnieImg from "../../res/images/bg/powojniestatisticsbg.png";

const content = {
    headline: `„Wszystkie dążenia zmierzające do oderwania Górnego Śląska od Rzeszy Niemieckiej stanowią przestępstwo zdrady stanu”.`,
    subheadline: `Z rozporządzenia Walthera von Miquela, prezydenta rejencji opolskiej z ramienia Niemiec, 31 grudnia 1918`,
    bg: Background,
    bgAuthor: 'Krajobraz przemysłowy Górnego Śląska / Narodowe Archiwum Cyfrowe',
    smallImg: Small,
    titleLeft: false,
    menuItems: [
        {
            label: "Problem śląska po i wojnie światowej",
            type: "text",
            content: [<p>
            Górny Śląsk był w chwili zakończenia I wojny światowej jednym z najlepiej
        rozwiniętych pod względem przemysłowym regionów Niemiec.    <strong>Olbrzymie pokłady węgla i wysoki stopień uprzemysłowienia </strong> 
            czynił z niego potencjalne źródło olbrzymich zysków. Jednocześnie był to
            obszar, który zamieszkiwali nieomal po równo Polacy i Niemcy.
        </p>,
        <p>
            Nic dziwnego, że oba państwa chciały Górnego Śląska w swoich granicach.
            Sprawa regionu była też obiektem <strong>gry międzynarodowej </strong>
        podczas konferencji paryskiej po I wojnie światowej.    <strong>Francja </strong>optowała za przyłączeniem obszaru do Polski,
            widziała bowiem w Polsce naturalnego sojusznika, który szachowałby Niemcy
            od wschodu. <strong>Wielka Brytania</strong> z kolei obawiała się wzrostu
            znaczenia Francji, a ponadto uważała, że Niemcy bez zysków z górnośląskich
        zakładów przemysłowych nie będą w stanie wypłacić    <strong>kontrybucji wojennych</strong>. Zdecydowano, że kwestię
        przynależności Górnego Śląska rozstrzygnie w przyszłości    <strong>plebiscyt</strong>.
        </p>,
        <p>
            Równocześnie wieść o klęsce Niemiec i odradzaniu się państwa polskiego, w
            połączeniu z trudną sytuacją materialną spowodowaną wojną, rozbudziły wolę
            powrotu Ślązaków do Polski. Niemcy odpowiedzieli terrorem. Na teren
            Górnego Śląska sprowadzone zostały niemieckie oddziały wojskowe. 13
        stycznia 1919 komisarz <strong>Otto Hörsing</strong> ogłosił    <strong>stan oblężenia na Górnym Śląsku</strong>, w wyniku czego zniesiono
            nietykalność osobistą, a wojsko uzyskało prawo dokonywania rewizji i
            aresztowań polskich działaczy. Pogarszająca się sytuacja pchnęła polskich
        działaczy do podjęcia decyzji o rozpoczęciu    <strong>I powstania śląskiego</strong>.
        </p>]
        },
        {
            label: "Polskość na górnym śląsku",
            type: "text",
            content: [<p>
            Bogaty w złoża naturalne i żyzny Śląsk znajdował się na styku Polski (czy
            raczej państwa wczesnopiastowskiego), Czech i Niemiec. Stanowił przez
            długie lata obiekt rywalizacji tych państw.
        </p>,
        <p>
            Pierwszym dokumentem świadczącym o polskości Śląska był pozostawiony przez
            Mieszka I <strong>„Dagome iudex”</strong> (wydany pod koniec X wieku), w
            którym Dolny i część Górnego Śląska są wskazane jako terytorium podległe
            polskiemu biskupstwu wrocławskiemu.
        </p>,
        <p>
            Wskutek <strong>rozbicia dzielnicowego</strong> Polski w 1138 roku, Śląsk
            stał się dziedziczną dzielnicą najstarszego syna Bolesława Krzywoustego –
            Władysława Wygnańca. Potomkowie tego piastowskiego monarchy rządzili na
        Śląsku, a dzielnica z biegiem lat    <strong>rozdrobniła się na niewielkie ksiąstewka</strong>, których władcy
            poszukiwali wsparcia w Polsce, Niemczech i w Czechach. Śląsk stał się
            obiektem rywalizacji państw ościennych i areną walk książąt piastowskich.
        </p>,
        <p>
            W pierwszej połowie XVI wieku księstwa piastowskie znalazły się w
            większości w zależności od monarchii <strong>Habsburgów</strong>. W 1653
            roku <strong>Księstwo Cieszyńskie</strong> - ostatnie piastowskie księstwo
            na Śląsku – dostało się pod bezpośrednią kontrolę Habsburgów. Niemal sto
            lat później, <strong>w 1742 roku</strong> wskutek prusko-austriackiej wojny
            śląskiej region <strong>znalazł się w granicach Prus</strong>.
        </p>,
        <p>
            XIX wiek był czasem przebudzenia narodowego Polaków na Śląsku. Była to w
            dużej mierze reakcja na
        <strong>germanizację dzieci </strong> 
            w szkołach, którą wprowadzono w 1819 roku. Działalność takich postaci jak 
        <strong> ks. Józef Lompa, ks. Józef Szafranek czy Emanuel Smołka </strong>
            (wszyscy byli wydawcami pierwszej polskiej gazety na Górnym Śląsku –
            „Dziennika Górnośląskiego”) doprowadziła do utrzymania polskości wśród
            Polaków, którzy zamieszkiwali Śląsk od pokoleń, ale także wśród tych,
            którzy przybyli na Śląsk za chlebem.
        </p>]
        },
        {
            label: "śląsk w traktacie wersalskim",
            type: "text",
            content: [<p>
            <strong>
                Fragment traktat pokojowy z Niemcami dotyczący sprawy Górnego Śląska –
                Wersal – 28 czerwca 1919 roku
            </strong>
        </p>,
        <p align="center">
            <strong>Polska</strong>
        </p>,
        <p>
            Artykuł 88. W części Śląska Górnego, położonego w granicach poniżej
            opisanych, mieszkańcy zostaną powołani do wypowiedzenia się przez
            głosowanie, czy życzą sobie przyłączenia do Niemiec, czy też do Polski. (…)
        </p>,
        <p align="center">
            <strong>Aneks</strong>
        </p>,
        <p>
            4. Prawo głosowania będzie przyznane każdej, bez różnicy płci, osobie,
            która czyni zadość warunkom następującym:
        </p>,
        <p>
            a) mieć będzie ukończonych 20 lat wieku w dniu 1 stycznia tego roku, w
            którym plebiscyt się odbędzie;
        </p>,
        <p>
            b) urodziła się na obszarze podlegającym plebiscytowi, albo też ma swoje tu
            stałe miejsce zamieszkiwania (…).
        </p>,
        <p>
            <em>
                Źr. T. Maresz, K. Juszczyk, Historia w źródłach – nie tylko pisanych.
                XX wiek i czasy współczesne 3, Toruń 2005, s. 99.
            </em>
        </p>]
        },
        {
            label: "Statystyki i dane",
            type: "data",
            content: {
                modalTabs: [
                    {
                        name: "terytorium",
                        layout: <PoWojnieStats bg={PoWojnieImg} author="Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe"/>,
                        bgImgAuthor: "Narodowe Archiwum Cyfrowe"
                    },
                   
            ]

            }
        }
    ],
    multimediaItems: [
        {
            type: "audio",
            content: {
              img: AudioImg,
              author: "Narodowe Archiwum Cyfrowe",
              content: [
                
                  {
                    title: "Chleb pod kluczem" ,
                    text:
                    '- Gdy przyniosłem matce pierwszą wypłatę, w kwocie 25 marek niemieckich, rozpłakała się. Chleb był u nas w domu pod zamknięciem – opowiadał Aleksander Gniełka, uczestnik powstań śląskich. (PR, 22.08.1982)',
                    source: "6a8c165a-9bdb-4a1d-9dc2-daf1235c418a"
                  },
                  {
                    title: "Polska, ale jaka? ",
                    text:
                    '- W 1918 roku zaczęły budzić się w Polakach sentymenty narodowe. Nawet wśród grup, które takich sentymentów nie miały pod koniec XVIII wieku, jak Polacy na Śląsku – oceniał prof. Paweł Wieczorkiewicz. (PR, 21.04.2004)',
                    source: "0e6089eb-ad67-4698-a519-0c751d17893c"
                  },
                  
                
              ]
            }
          },
        
      
    ]
}


const PoWojnie = () => {
    return(
        <Page content={content}></Page>
    )
}

export default PoWojnie;