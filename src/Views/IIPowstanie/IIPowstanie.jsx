import React from 'react';
import './IIPowstanie.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/iipowstaniebg.png';
import Small from '../../res/images/small/iipowstaniesmall.png';

const content = {
    headline: `„Rozwój sytuacji na polskim froncie wschodnim i w samej Polsce pozwala spodziewać się niezbyt silnego oporu Polaków na Górnym Śląsku”`,
    subheadline: `ocena sytuacji na Górnym Śląsku przygotowana przez Reichswehrę w połowie 1920 roku (cytat za Ryszard Kaczmarek, „Powstania Śląskie”)`,
    bg: Background,
    bgAuthor: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
    smallImg: Small,
    menuItems: [
      {
        label: "I Powstanie Śląskie",
        type: "text",
        content: [
            <p>
            W lutym 1920 roku, zgodnie z postanowieniami traktatu wersalskiego, na
            śląsku rozlokowały się wojska brytyjskie, francuskie i włoskie pod komendą
            <strong>
                Międzysojusznicza Komisja Rządząca i Plebiscytowa na Górnym Śląsku
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
      
    ]
  };

const IIPowstanie = () => {
    return(
        <Page content={content} />
    )
}

export default IIPowstanie;