import React from 'react';
import './IIIPowstanie.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/iiipowstanie.png';
import Small from '../../res/images/small/iiipowstaniesmall.png';


const content={
    headline: `"Zwycięstwo osiągniemy za wszelka cenę i nie ma takiego mocarza na świecie, który by mógł nas okuć ponownie w kajdany germańskie" `,
    subheadline: `z odezwy Wojciecha Korfantego do rodaków, 3 maja 1921`,
    bg: Background,
    bgAuthor: 'Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "III Powstanie Śląskie",
            type: "text",
            content: [<p>
            Komisja Plebiscytowa zdecydowała o przyznaniu prawie całego obszaru
            Niemcom. Na tę wieść wcześniejsze pojedyncze strajki niezadowolonych z
            trudnych warunków materialnych i bezrobocia mieszkańców regionu
            przekształciły się 2 maja w strajk generalny.
        </p>,
        <p>
            <strong>W nocy z 2 na 3 maja rozpoczęło się III powstanie</strong>
            . Na jego czele stanął znany działacz społeczny, a wcześniej komisarz
            plebiscytowy <strong>Wojciech Korfanty</strong>. Naczelnym wodzem
            odpowiedzialnym za organizację wojskową został Maciej Mielżyński, ale
            wkrótce zastąpił go Kazimierz Zenkteller.
        </p>,
        <p>
            Istotny dla przebiegu III Powstania Śląskiego był fakt, że II
            Rzeczpospolita po raz pierwszy wsparła zryw śląskich Polaków. W 1921 roku
            Wojska Powstańcze zostały zasilone przez niecałe 5 tysięcy Polaków zza
            kordonu. Wojsko Polskie przysłało też swoich doradców.
        </p>,
        <p>
            Warto nadmienić, że po niemieckiej stronie barykady proporcje były
            odwrotne. W czasie III Powstania Śląskiego polski wywiad oceniał liczbę
            uczestników po stronie niemieckiej na 40 tysięcy, z czego ¾ to byli
            ochotnicy z głębi Niemiec, walczący w ramach Freikorpsów.
        </p>,
        <p>
            Walki trwały dwa miesiące - powstańcy zdołali opanować prawie cały obszar
            plebiscytowy, później broniąc go przed siłami niemieckimi. Najpoważniejsze
            starcia miały miejsce w okolicach Góry św. Anny. <strong>
                W III powstaniu śląskim wzięło udział około 60 tys. Polaków
            </strong> - 1218 spośród nich poległo, 794 odniosło rany.
        </p>,
        <p>
            III Powstanie Śląskie zadecydowało o przyznaniu Polsce najbardziej
            uprzemysłowionej części Górnego Śląska.
        </p>]
        },
        {
            label: "Przywódcy powstania",
            type: "text",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
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

const IIIPowstanie = () => {
    return(
        <Page content={content}></Page>
    )
}

export default IIIPowstanie;