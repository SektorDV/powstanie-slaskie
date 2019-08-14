import React from 'react';
import './IIIPowstanie.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/iiipowstanie.jpg';
import Small from '../../res/images/small/iiipowstaniesmall.png';
import ThirdUprisingMap from '../../Components/Modal/Map/3rdUprisingMap/3rdUprisingMap';
import PersonsImg from "../../res/images/bg/iiipowstaniepostacie.png";
import Mapbg from '../../res/images/bg/3rduprisingmapbg.png';
import maciejImg from "../../res/img/Maciej.png";
import kazimierzImg from "../../res/img/Kazimierz.png";
import wojciechImg from "../../res/img/Wojciech.png";
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";
import VideoImg from "../../res/images/bg/IIIpowstanie_modal_video.png";



const content={
    headline: `„Zwycięstwo osiągniemy za wszelka cenę i nie ma takiego mocarza na świecie, który by mógł nas okuć ponownie w kajdany germańskie”. `,
    subheadline: `Z odezwy Wojciecha Korfantego do rodaków, 3 maja 1921`,
    bg: Background,
    bgAuthor: 'Uczestnicy III Powstania Śląskiego / Narodowe Archiwum Cyfrowe',
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
              author: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe",
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
        type: "audio",
        content: {
          img: AudioImg,
          author: "Narodowe Archiwum Cyfrowe",
          content: [
            {
              title: 'Dywersja Grupy Wawelberga' ,
              text:
              `- Naszym zadaniem było otwarcie śluz i spuszczenie wody po wysadzeniu mostów. Mieliśmy zablokować drogę Niemcom - Stefan Gocman, członek dywersyjnej Grupy Wawelberga, której zadaniem było wysadzenie mostów na Górnym Śląsku przed rozpoczęciem powstania. (PR, 25.05.1962)`,                 
              source: "42914a4e-94dc-4fc8-ac23-405f3e189ce2"
            },
            {
                title: "Akcja „Mosty”",
                text:
                '- O godzinie 2 w nocy wszystkie mosty idą w powietrze – to jest sygnał rozpoczęcia powstania. Skończyłem oficerską szkołę we Francji, tam uczono mnie, że pierwsze zwycięstwo decyduje o morale żołnierza, dlatego postanowiłem ruszyć z moimi żołnierzami do natarcia – wspominał Teodor Mańczyk, uczestnik III Powstania Śląskiego. (PR, 25.05.1962)',
                source: "cf08b364-0e0c-49eb-92c0-05163e7770f8"
              },
              {
                title: "Powstańcza armia",
                text:
                '- Jedyne, co nas odznaczało, to była biało-czerwona opaska na lewym rękawie. Oficerowie nosili biało-niebieską opaskę. Poza tym nosiło się własne ubrania. Jak mi się spodnie rozpruły przy przeskakiwaniu przez płot, to znalazłem sklep z odzieżą i, zostawiwszy kwitek, że po powstaniu zapłacę, zarekwirowałem nową parę – mówił Teodor Mańczyk, uczestnik III Powstania Śląskiego (PR, 25.05.1962)',
                source: "a5cf7e18-6ac0-45b9-8288-14199cee208f"
              },
              {
                title: "„Broni mieliśmy mało”",
                text:
                '- Zaczęliśmy kupować broń od niemieckich policjantów i dezerterów z wojska. Rozbrajało się bojówki niemieckie, a czasami też policję plebiscytową. Taka policja składała się po równo z Polaków i Niemców. Polacy szli z nami, a Niemców zostawialiśmy bez broni – mówił Teodor Mańczyk, uczestnik III Powstania Śląskiego. (PR, 25.05.1962)',
                source: "7eb74f91-6403-49ce-888a-91aa522ad7e2"
              },
              {
                title: 'Krwawe potyczki' ,
                text:
                `- Obrzuciliśmy granatami karczmę, w której byli niemieccy żandarmi. Wywiesili białą flagę. Kiedy weszliśmy do środka, żeby ich pojmać, otworzyli do nas ogień z karabinów. Ośmiu powstańców padło - mówił uczestnik III Powstania Franciszek Zagórniak. (PR, 28.04.1971)`,                 
                source: "41cf47f4-0bdc-4046-969f-585f5603b95f"
              },
              {
                  title: "W załodze samochodu pancernego",
                  text:
                  '- Przyszło mi w udziale walczyć w specjalnym oddziale szturmowym, który był zorganizowany przez ówczesnego porucznika marynarki wojennej Roberta Oszka. Oddział był mały, liczył 67 ludzi. Walczyliśmy na samochodzie pancernym, który sam sobie skonstruowaliśmy. Odgrywał wielką rolę, bo poruszaliśmy się szybko tam, gdzie byliśmy potrzebni – wspominał uczestnik III Powstania Śląskiego. (PR, 3.02.1978)',
                  source: "47c56e38-b8ae-4061-b0c8-6b15af5b7664"
                },
                {
                  title: "Z Bytomia na Górę św. Anny ",
                  text:
                  '- Zgrupowanie zaczęło się od zebrania w karczmie, od przedstawienia odnoszącego się do powstania kościuszkowskiego. Poszliśmy stamtąd na Górę Św. Anny – wspominał uczestnik powstania. (PR, 22.06.1976) ',
                  source: "2f1410d2-441e-4fb4-9dab-1f2a67b48425"
                },
                {
                  title: "„Pierunie strzelej!”",
                  text:
                  'Ustawiliśmy gniazdo karabinu maszynowego w Markowicach. Niedługo pojawił się oddział. „Pierunie strzelej!” wołali do mnie. A ja na to: „Dopiero jak podejdą na 100 metrów”. Okazało się, że to nie byli Niemcy, tylko Włosi, którzy ubezpieczali plebiscyt.  Francuzi byli za nami, Włosi za Niemcami. Chcieli nas rozbroić, więc puściłem serię, żeby ich przegonić – wspominał powstaniec śląski Jan Wawrzynek. (PR, 25.05.1962)',
                  source: "570491c9-f232-4adf-9809-f72b64010d52"
                },
                {
                  title: "Broń zdobywana na aliantach",
                  text:
                  '- Rozbroiliśmy Włochów z wojsk obrony plebiscytu. Przebraliśmy się w ich mundury i podeszliśmy prosto pod gniazdo karabinów maszynowych. Dzięki przebraniu mogliśmy rozbroić Niemców – mówił uczestnik III Powstania Śląskiego. (PR, 22.06.1976)',
                  source: "5e3dd17a-879c-4a39-ab5d-322733a94e94"
                },
                {
                  title: "Ranny walczył dalej" ,
                  text:
                  '- Nasz oddział szturmowy marynarzy pod dowództwem kpt. Roberta Oszka walczył w rejonie Góry Św. Anny w samochodzie pancernym. Podczas trzeciego zdobywania Licheni Oszka podniósł klapę wozu wychylił się i został ranny, mimo to walczył dalej. Opatrzyliśmy go dopiero po walce – wspominał marynarz biorący udział w bitwie o Górę Św. Anny. (PR, 22.06.1976)',
                  source: "9de14520-64b3-47d4-aa77-b85d620779af"
                },
                {
                  title: "Potyczka pociągów pancernych",
                  text:
                  '- Ruszyliśmy pociągiem pancernym w kierunku Gliwic. Z naprzeciwka nadjechał parowóz niemiecki. Rozpoczęła się dramatyczna strzelanina. Do zaprzestania walki zmusił Niemców ostrzał z posterunku francuskiego - opowiadał powstaniec Hubert Urla. (PR, 28.04.1971)',
                  source: "7a59812a-3cd6-49da-8349-dda3c92fbad1"
                },
                {
                  title: "Walka o kluczowy punkt",
                  text:
                  '- Kędzierzyn był kluczowy dla powodzenia całego powstania. Tutaj znajdował się węzeł drogowy i kolejowy. Tutaj też były duże magazyny z żywnością. W walkach wykorzystaliśmy pociąg pancerny, który „zdezerterował” z Polski – mówił Jerzy Łapiński, który walczył w rejonie Kędzierzyna. (PR, 25.05.1962)',
                  source: "2f1359ce-725c-4961-859a-32b7d4688566"
                },
                {
                  title: "Ochotnicy ze Lwowa" ,
                  text:
                  '- Kilkudziesięciu lwowskich elewów zbiegło na Śląsk, by dołączyć do powstańców. Sześciu z nich zginęło. Wśród nich był Karol Chodkiewicz – ostatni potomek po mieczu hetmana Karola Chodkiewicza, jednego z najwybitniejszych wodzów przedrozbiorowych Rzeczpospolitej – Witold Szolginia. (PR, 31.12.1995-12-31)',
                  source: "e04e2ff1-118d-4dd9-9581-3efc93c18072"
                },
                {
                  title: "Najgorsze oblicze wojny",
                  text:
                  '- Myśmy widzieli po wioskach ukrzyżowanych powstańców. Wisieli na parkanach, na płotach. Niektórzy mieli wykłute serca, inni poprzebijane genitalia, jeszcze inni – gwoździe za paznokciami - wspominał terror wojny domowej powstaniec-ochotnik z Polski Leon Węgrowski. (PR, 28.04.1971)',
                  source: "d29a0d12-52eb-44de-8a70-efa249f8da41"
                },
              
              
            
            
          ]
        }
      },
        {
            type: "video",
            content: {
              img: VideoImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe",
              content: [
                {
                  title: "Nagranie numer 1",
                  text:
                    "- Decyzja o wybuchu III Powstania Śląskiego była skonsultowana z Warszawą. Problem stanowiła kadra dowódcza. Niewielu Ślązaków posiadało stopnie oficerskie. Korfanty ściągnął dowódców z Wielkopolski. Napływały też oddziały ochotników z Polski. Ułatwiano im przedostanie się na Śląsk, organizowano wiece w jednostkach, dawano urlopy. Napływ ochotników był ogromny – to była swoista wojna hybrydowa - mówił Jan Planta, historyk z Muzeum Powstań Śląskich w Świętochłowicach.",
                  source: "6d76316f-148f-494e-9273-7e7bf8908b2d"
                },
                {
                  title: "Nagranie numer 1",
                  text:
                    "- W czasie strasznie ciężkiej i krwawej bitwy o Górę św. Anny dowodziłem pociągiem pancernym w akcji na Gogolin. Zbudowaliśmy ten pociąg z niczego, na kopalni MMA pod Wodzisławiem – wspomnienia Adama Ciołkosza, uczestnika III Powstania Śląskiego (RWE) ",
                  source: "a382c0fd-65d8-4e71-bdcb-c4c6f9f2bd12"
                },
                
                
              ]
            }
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