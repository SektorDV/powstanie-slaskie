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
                img: PersonsImg,
                content: [
                        {
                            name: 'Józef Grzegorzek',
                            img: '#',
                            text: `Maciej Ignacy Mielżyński, pseud. „Nowina-Doliwa” (ur. 13 października 1869 w Chobienicach, zm. 9 stycznia 1944 w Wiedniu) – hrabia, podpułkownik kawalerii Wojska Polskiego, polski działacz narodowy w Wielkopolsce i na Górnym Śląsku. Naczelny wódz III powstania śląskiego, współzałożyciel Stronnictwa Polskiego na Górnym Śląsku.

                            Jego ojciec, Karol Ignacy hr. Mielżyński, był ziemianinem z Chobienic w powiecie wolsztyńskim, w Wielkopolsce. Matka Emilia pochodziła z rodu hrabiów Bnińskich. Jego rodzina należała do najbogatszych w Wielkopolsce. Ukończył szkołę średnią w Lesznie, a potem studiował prawo i malarstwo w Monachium. Odbył służbę wojskową w armii niemieckiej w latach 1894–1898, a następnie w latach 1898–1914 odbywał praktyki rolnicze w Będlewie i Dakowach Mokrych. W latach 1903–1914 był posłem do Reichstagu. W okresie 1904-1910 był prezesem Klubu Wioślarskiego z roku 1904 w Poznaniu.
                            
                            21 grudnia 1913 roku zastrzelił zdradzającą go żonę Felicję z Potockich (córkę hr. Bolesława Eligiusza Potockiego z Będlewa i Józefy z Mycielskich) oraz jej siostrzeńca i kochanka – hr. Alfreda Miączyńskiego (syna Władysława Miączyńskiego i Heleny z Potockich – siostry przyrodniej Felicji). Chociaż sąd go uniewinnił (działał w obronie honoru), stosowany był wobec niego w Wielkopolsce bojkot towarzyski.
                            
                            W 1909 roku posiadał wsie rycerskie: Chobienice, Godziszewo, Grońsko i Nieborze w powiecie babimojskim rejencji poznańskiej w Wielkim Księstwie Poznańskim[2].
                            
                            Maciej Mielżyński w 1909 roku zaczął interesować się sprawami górnośląskimi, politycznie związał się z endecją. Kupił też wydawnictwo Karola Miarki seniora w Mikołowie. I wojnę światową spędził w szeregach armii niemieckiej. W 1920 roku wstąpił do Wojska Polskiego w stopniu majora. W styczniu 1921 został oddelegowany na Górny Śląsk (już jako podpułkownik kawalerii). Początkowo zastępca dowódcy, a od kwietnia 1921 roku dowódca tajnej organizacji wojskowej Dowództwo Obrony Plebiscytu (DOP). W chwili wybuchu III powstania śląskiego DOP został przekształcony w Naczelną Komendę Wojsk Powstańczych, a Mielżyński stanął na czele III powstania śląskiego. O`
                        },
                        {
                            name: 'Maciej Miełżyński',
                            img: '#',
                            text: `Maciej Ignacy Mielżyński, pseud. „Nowina-Doliwa” (ur. 13 października 1869 w Chobienicach, zm. 9 stycznia 1944 w Wiedniu) – hrabia, podpułkownik kawalerii Wojska Polskiego, polski działacz narodowy w Wielkopolsce i na Górnym Śląsku. Naczelny wódz III powstania śląskiego, współzałożyciel Stronnictwa Polskiego na Górnym Śląsku.

                            Jego ojciec, Karol Ignacy hr. Mielżyński, był ziemianinem z Chobienic w powiecie wolsztyńskim, w Wielkopolsce. Matka Emilia pochodziła z rodu hrabiów Bnińskich. Jego rodzina należała do najbogatszych w Wielkopolsce. Ukończył szkołę średnią w Lesznie, a potem studiował prawo i malarstwo w Monachium. Odbył służbę wojskową w armii niemieckiej w latach 1894–1898, a następnie w latach 1898–1914 odbywał praktyki rolnicze w Będlewie i Dakowach Mokrych. W latach 1903–1914 był posłem do Reichstagu. W okresie 1904-1910 był prezesem Klubu Wioślarskiego z roku 1904 w Poznaniu.
                            
                            21 grudnia 1913 roku zastrzelił zdradzającą go żonę Felicję z Potockich (córkę hr. Bolesława Eligiusza Potockiego z Będlewa i Józefy z Mycielskich) oraz jej siostrzeńca i kochanka – hr. Alfreda Miączyńskiego (syna Władysława Miączyńskiego i Heleny z Potockich – siostry przyrodniej Felicji). Chociaż sąd go uniewinnił (działał w obronie honoru), stosowany był wobec niego w Wielkopolsce bojkot towarzyski.
                            
                            W 1909 roku posiadał wsie rycerskie: Chobienice, Godziszewo, Grońsko i Nieborze w powiecie babimojskim rejencji poznańskiej w Wielkim Księstwie Poznańskim[2].
                            
                            Maciej Mielżyński w 1909 roku zaczął interesować się sprawami górnośląskimi, politycznie związał się z endecją. Kupił też wydawnictwo Karola Miarki seniora w Mikołowie. I wojnę światową spędził w szeregach armii niemieckiej. W 1920 roku wstąpił do Wojska Polskiego w stopniu majora. W styczniu 1921 został oddelegowany na Górny Śląsk (już jako podpułkownik kawalerii). Początkowo zastępca dowódcy, a od kwietnia 1921 roku dowódca tajnej organizacji wojskowej Dowództwo Obrony Plebiscytu (DOP). W chwili wybuchu III powstania śląskiego DOP został przekształcony w Naczelną Komendę Wojsk Powstańczych, a Mielżyński stanął na czele III powstania śląskiego. O`
                        },
                        {
                            name: 'Wojciech Korfanty',
                            img: '#',
                            text: `Maciej Ignacy Mielżyński, pseud. „Nowina-Doliwa” (ur. 13 października 1869 w Chobienicach, zm. 9 stycznia 1944 w Wiedniu) – hrabia, podpułkownik kawalerii Wojska Polskiego, polski działacz narodowy w Wielkopolsce i na Górnym Śląsku. Naczelny wódz III powstania śląskiego, współzałożyciel Stronnictwa Polskiego na Górnym Śląsku.

                            Jego ojciec, Karol Ignacy hr. Mielżyński, był ziemianinem z Chobienic w powiecie wolsztyńskim, w Wielkopolsce. Matka Emilia pochodziła z rodu hrabiów Bnińskich. Jego rodzina należała do najbogatszych w Wielkopolsce. Ukończył szkołę średnią w Lesznie, a potem studiował prawo i malarstwo w Monachium. Odbył służbę wojskową w armii niemieckiej w latach 1894–1898, a następnie w latach 1898–1914 odbywał praktyki rolnicze w Będlewie i Dakowach Mokrych. W latach 1903–1914 był posłem do Reichstagu. W okresie 1904-1910 był prezesem Klubu Wioślarskiego z roku 1904 w Poznaniu.
                            
                            21 grudnia 1913 roku zastrzelił zdradzającą go żonę Felicję z Potockich (córkę hr. Bolesława Eligiusza Potockiego z Będlewa i Józefy z Mycielskich) oraz jej siostrzeńca i kochanka – hr. Alfreda Miączyńskiego (syna Władysława Miączyńskiego i Heleny z Potockich – siostry przyrodniej Felicji). Chociaż sąd go uniewinnił (działał w obronie honoru), stosowany był wobec niego w Wielkopolsce bojkot towarzyski.
                            
                            W 1909 roku posiadał wsie rycerskie: Chobienice, Godziszewo, Grońsko i Nieborze w powiecie babimojskim rejencji poznańskiej w Wielkim Księstwie Poznańskim[2].
                            
                            Maciej Mielżyński w 1909 roku zaczął interesować się sprawami górnośląskimi, politycznie związał się z endecją. Kupił też wydawnictwo Karola Miarki seniora w Mikołowie. I wojnę światową spędził w szeregach armii niemieckiej. W 1920 roku wstąpił do Wojska Polskiego w stopniu majora. W styczniu 1921 został oddelegowany na Górny Śląsk (już jako podpułkownik kawalerii). Początkowo zastępca dowódcy, a od kwietnia 1921 roku dowódca tajnej organizacji wojskowej Dowództwo Obrony Plebiscytu (DOP). W chwili wybuchu III powstania śląskiego DOP został przekształcony w Naczelną Komendę Wojsk Powstańczych, a Mielżyński stanął na czele III powstania śląskiego. O`
                        }   
                    ]                    
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