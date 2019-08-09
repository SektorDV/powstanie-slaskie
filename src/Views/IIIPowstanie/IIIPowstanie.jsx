import React from 'react';
import './IIIPowstanie.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/iiipowstanie.png';
import Small from '../../res/images/small/iiipowstaniesmall.png';
import ThirdUprisingMap from '../../Components/Modal/Map/3rdUprisingMap/3rdUprisingMap';
import PersonsImg from "../../res/images/bg/iiipowstaniepostacie.png";
import Mapbg from '../../res/images/bg/3rduprisingmapbg.png';
import maciejImg from "../../res/img/Maciej.png";
import kazimierzImg from "../../res/img/Kazimierz.png";
import wojciechImg from "../../res/img/Wojciech.png";

const content={
    headline: `„Zwycięstwo osiągniemy za wszelka cenę i nie ma takiego mocarza na świecie, który by mógł nas okuć ponownie w kajdany germańskie”. `,
    subheadline: `Z odezwy Wojciecha Korfantego do rodaków, 3 maja 1921`,
    bg: Background,
    bgAuthor: 'Uczestnicy III Powstania Śląskiego / Narodowe Centrum Cyfrowe',
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
            type: "persons",
            content: {
              img: PersonsImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
              content: [
                {
                  name: "Maciej Mielżyński",
                  img: `${maciejImg}`,
                  text: `Wielkopolski ziemianin, hrabia. W początkowej fazie walk był dowódcą wojskowym III Powstania Śląskiego. Wobec niewielkich postępów wojsk powstańczych, Mielżyński został 31 maja 1921 roku odwołany ze stanowiska. Decyzję o odwołaniu Mielżyńskiego spowodowały również trudności we współpracy między nim, a dyktatorem powstania – Wojciechem Korfantym. Korfanty nie cofnął się nawet przed wypomnieniem podwładnemu, że ten w 1913 roku zamordował swoją żonę i jej kochanka, a zarazem siostrzeńca. Sąd uniewinnił Mielżyńskiego, uzasadniając, że hrabia działał w obronie honoru. Wobec Mielżyńskiego obowiązywał jednak bojkot towarzyski w Wielkopolsce. Zmarł w 1940 roku w Wiedniu, gdzie przebywał pod nadzorem Gestapo.`
                },
                {
                  name: "Kazimierz Zenkteller",
                  img: `${kazimierzImg}`,
                  text: `Powstaniec wielkopolski i śląski. Po zdymisjonowaniu Macieja Mielżyńskiego ze stanowiska naczelnego dowódcy wojsk powstańczych zajął jego miejsce. Choć komendę nad wojskami powstańczymi sprawował krótko, to przyszło mu w udziale utrzymanie morale wojsk po ogłoszeniu zawieszenia broni i zdławienie buntu części armii powstańczej pod komendą Michała Grażyńskiego, późniejszego wojewody śląskiego z ramienia sanacji. Po III Powstaniu Śląskim wycofał się z życia politycznego. Zmarł w 1955 roku.`
                },
                {
                  name: "Wojciech Korfanty",
                  img: `${wojciechImg}`,
                  text: `Dyktator i inicjator wybuchu III Powstania Śląskiego. Był polskim komisarzem plebiscytowym. 3 maja 1921 roku ogłosił odezwę, w której wzywał do powstania. Jako dyktator powstania wziął na siebie ciężar odpowiedzialności politycznej za wynik zrywu. Na jego barkach spoczywały sprawy wojskowe i cywilne związane z administrowaniem obszarem, który zajęli uczestnicy III Powstania, do jego kompetencji należał także kontakt z Warszawą, skąd nieoficjalnie płynęła pomoc dla powstańców, oraz z aliantami, od których arbitrażu miał zależeć przyszły podział Górnego Śląska.   Tuż po zakończeniu powstania, 19 lipca 1921 roku opuścił Śląsk, wyznaczając Józefa Rymera na swojego następcę.`
                }
              ]
            }
          },
    ],
    multimediaItems: [
        {
            type: "audio"
        },
        {
            type: "video"
        },
        {
            type: "map",
            layout: <ThirdUprisingMap bg={Mapbg} />,
            img: Mapbg
        }
    ]
}

const IIIPowstanie = () => {
    return(
        <Page content={content}></Page>
    )
}

export default IIIPowstanie;