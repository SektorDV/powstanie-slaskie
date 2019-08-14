import React from 'react';
import './IIPowstanie.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/iipowstaniebg.png';
import Small from '../../res/images/small/iipowstaniesmall.png';
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";
import Mapbg from '../../res/images/bg/2nduprisingmapbg.png';
import SecondUprisingMap from '../../Components/Modal/Map/2ndUprisingMap/2ndUprisingMap';

const content = {
    headline: `„Rozwój sytuacji na polskim froncie wschodnim i w samej Polsce pozwala spodziewać się niezbyt silnego oporu Polaków na Górnym Śląsku”.`,
    subheadline: `Ocena sytuacji na Górnym Śląsku przygotowana przez Reichswehrę w połowie 1920 roku (cytat za Ryszard Kaczmarek, „Powstania Śląskie”)`,
    bg: Background,
    bgAuthor: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
    smallImg: Small,
    menuItems: [
      {
        label: "II Powstanie Śląskie",
        type: "text",
        content: [
            <p>
            W lutym 1920 roku, zgodnie z postanowieniami traktatu wersalskiego, na
            śląsku rozlokowały się wojska brytyjskie, francuskie i włoskie pod komendą 
            <strong>
            &nbsp;Międzysojuszniczej Komisji Rządzącej i Plebiscytowej na Górnym Śląsku
            </strong>
            . Alianci mieli czuwać nad prawidłowym przebiegiem plebiscytu, który z
            kolei miał zadecydować o podziale Górnego Śląska.
        </p>,
        <p>
        Mimo obecności sił alianckich, niemiecka policja bezpieczeństwa    <strong>Sicherhietspolizei (Sipo) </strong>terroryzowała polskich działaczy
            na terytorium Górnego Śląska. Czarę goryczy przelał brutalny mord na
            lekarzu <strong>Andrzeju Mielęckim</strong>.
        </p>,
        <p>
            Powstanie wybuchło w nocy z <strong>19 na 20 sierpnia 1920 roku</strong> i
        trwało pięć dni. Na jego czele ponownie stanął Alfons    <strong>Zgrzebniok</strong>. Początkowo przeciwny powstaniu komisarz
            plebiscytowy Wojciech Korfanty zdecydował się wydać odezwę do ludności
            polskiej z wezwaniem do samoobrony i strajku powszechnego.
        </p>,
        <p>
            Równolegle walki wybuchły w powiatach pszczyńskim, rybnickim, katowickim,
            lublinieckim, tarnogórskim, toszecko-gliwickim i zabrskim. Walki toczyły
            się głównie na obszarze wsi i małych miasteczek. Powstańcy blokowali duże
            ośrodki miejskie, w których rozlokowane były wojska alianckie i większe
            siły niemieckie.
        </p>,
        <p>
            Niemcy byli zaskoczeni siłą zrywu, spodziewali się bowiem, że wobec klęsk
            Polski <strong>w wojnie polsko-bolszewickiej</strong> polscy Ślązacy nie
            będą dążyć do połączenia z Rzeczpospolitą, której los wydawał się bardzo
            niepewny (wieści o zwycięskiej dla Polaków bitwie warszawskiej nie były
            jeszcze na Śląsku potwierdzone).
        </p>,
        <p>
            Powstanie było demonstracją siły ze strony polskiej. Jego sukcesem było
        rozwiązanie znienawidzonej Sipo i powołanie w jej miejsce    <strong>Apo (Abstimmungspolizei)</strong> – policji plebiscytowej, w której
            składzie na zasadzie parytetu znaleźli się Polacy i Niemcy.
        </p>
        ]
      },
     
    ],
    multimediaItems: [
        {
            type: "audio",
            content: {
              img: AudioImg,
              author: "Narodowe Centrum Cyfrowe",
              content: [
                {
                  title: 'W Katowicach czuć było podenerwowanie' ,
                  text:
                  `- Niemcy zabili dra Andrzeja Mielęckiego. Ustalono, że pojadę składu granatów. Pojechała ze mną jedna z czterech lwowianek, które przyjechały tutaj na prace plebiscytowe, Bożenna Sołtysówna – wspominał uczestnik II Powstania Śląskiego. (PR, 4.08.1975)`,                 
                  source: "ef21703b-9be9-42c9-a409-7c98f83f7521"
                },
                {
                    title: "W boju z SIPO ",
                    text:
                    '- Potyczka pod Śmiechowicami toczyła się cały dzień. Było nas zaledwie dwudziestu chłopa – wspominał uczestnik II Powstania Śląskiego. (PR, 4.08.1975)',
                    source: "fa52cf63-ba9a-414f-acfe-c2e4db99b94f"
                  },
                  {
                    title: "Nie zdawał człowiek na łzy matki",
                    text:
                    '- Poszliśmy w powstanie. Pamiętam taki moment, kiedy mieliśmy zabrać na noszach jednego powstańca z utrąconą nogą, a ten gada: „Pieruna, dajcie mi, a zabija tych pięciu pierunów i dopiero umrę” – relacja uczestnika II Powstania Śląskiego. (PR, 4.08.1975)',
                    source: "79623e04-ec38-4bdb-a11f-acc7f3201bfa"
                  },
                
                
              ]
            }
          },
          {
            type: "video",
            content: {
              img: AudioImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
              content: [
                {
                  title: "Nagranie numer 1",
                  text:
                    "- II Powstanie Śląskie było demonstracją siły. Miało pokazać, że Ślązacy są gotowi walczyć, byli lepiej uzbrojeni i gotowi do podjęcia działań. Garnizony policji niemieckiej były cernowane, czyli otaczane przez powstańców, a ich załogi rozbrajano – wyjaśniał Jan Planta, historyk z Muzeum Powstań Śląskich w Świętochłowicach.",
                  source: "48e6774f-44fb-457b-a7d5-85b9525621f8"
                },
                
              ]
            }
          },
          {
            type: "map",
            layout: <SecondUprisingMap bg={Mapbg} />,
            img: Mapbg
        }
    ]
  };

const IIPowstanie = () => {
    return(
        <Page content={content} />
    )
}

export default IIPowstanie;