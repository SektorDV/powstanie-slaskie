import React from 'react';
import './Korfanty.scss';
import Background from '../../res/images/bg/korfantybg.png';
import Page from '../../Components/Page/Page';
import Small from '../../res/images/small/korfantysmall.png';
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";



const content = {
    headline: `„Mości panowie, nie chcemy ani piędzi ziemi niemieckiej. Żądamy jedynie, w myśl postanowień punktu trzynastego programu Wilsona, własnej, jednej, złożonej z ziem trzech zaborów Polski”.`,
    subheadline: `Fragment mowy posła Wojciecha Korfantego w Reichstagu, 25 października 1918`,
    bg: Background,
    bgAuthor: 'Wojciech Korfanty / Narodowe Archiwum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Wojciech Korfanty",
            type: "text",
            content: [<p>
            Nie był przeciwnikiem zrywów, uważał jednak, że muszą one mieć miejsce w
            sprzyjających okolicznościach i widział je jako manifestację propolskich
        dążeń mieszkańców Śląska. Nic dziwnego, że to on stał na czele    <strong> II i III Powstania Śląskiego </strong>i zabiegał o korzystny dla
            Polski werdykt aliantów.
        </p>,
        <p>
            Korfanty był przeciwnikiem <strong>Józefa Piłsudskiego</strong>, którego
        postrzegał jako niebezpiecznego radykała. Po    <strong>przewrocie majowym</strong> w 1926 roku Wojciech Korfanty był
            więziony w <strong>Brześciu</strong> wraz z innymi członkami Centrolewu. W
            obawie przed represjami wyjechał z Polski do stolicy Czechosłowacji. Do
            kraju nie mógł wrócić nawet w 1938 roku na pogrzeb swego syna Witolda.
            Powrócił dopiero w kwietniu 1939 roku. Został jednak aresztowany i - mimo
            protestów - osadzony na Pawiaku, gdzie przesiedział trzy miesiące.
        </p>,
        <p>
            <strong>Zmarł </strong>
        dwa tygodnie przez wybuchem II wojny światowej,    <strong>17 sierpnia 1939</strong>.
        </p>]
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
                  title: 'Tytan pracy ' ,
                  text:
                  `- W jego gabinecie z zewnątrz nie było klamki. Jeśli ktoś chciał się do niego dostać, musiał zgłosić się w sekretariacie, z kolei sekretariat dopiero zawiadamiał telefonicznie stryja o wizycie interesanta – wspominała Anna Beczała, bratanica Wojciecha Korfantego. (PR, brak daty)`,                 
                  source: "6879d8ce-12b8-4f0e-9187-a56ceafacf7a"
                },
                {
                    title: "Pies na Niemców ",
                    text:
                    '- Wojciech Korfanty chodził z wielką laską, którą odgrażał się, że będzie bił swoich wrogów i z ukochanym psem, wilczurem, który, jak mawiał jego właściciel, był wytresowany tak, że wyczuwał niemczyznę na kilkadziesiąt metrów – mówił prof. Pawła Wieczorkiewicza na temat Wojciecha Korfantego. (PR, 28.03.2007)',
                    source: "d69aa222-7a31-49e5-9659-029d5631add1"
                  },
                  {
                    title: "Emigrant",
                    text:
                    '- W 1935 roku udał się na emigrację do Czechosłowacji. Gdy ta de facto przestała istnieć w wyniku działań Hitlera, wyjechał do Francji, a pod koniec życia powrócił do Polski. Tutaj czekało go więzienie – wyjaśniał prof. Piotr Szlanta. (PR, 20.05.2019)',
                    source: "b291746b-0d23-48aa-8902-722afbf395f5"
                  },
                  {
                    title: "Ostatnie dni",
                    text:
                    '- Przypomina mi się wygląd stryja po śmierci. Byłam przerażona, zszokowana. On wyglądał jak mój dziadek – wspominała ostatnie dni życia Wojciecha Korfantego jego bratanica, Anna Beczała. (PR, brak daty) ',
                    source: "800badf3-c1ca-4cbd-bee3-031287ca2daf"
                  },
                  
                
                
              ]
            }
          },
          {
            type: "video",
            content: {
              img: AudioImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Archiwum Cyfrowe",
              content: [
                {
                  title: "Nagranie numer 1",
                  text:
                    "- Korfanty był mistrzem czegoś, co dziś nazwalibyśmy kreowaniem marki osobistej. Bardzo dbał o własny wizerunek. Był przystojny i postawny – miał 180 cm wzrostu. Ubierał się bardzo elegancko, kobiety za nim szalały. To wszystko pomagało mu zjednywać sobie ludzi – podkreślał Jan Planta, historyk z Muzeum Powstań Śląskich w Świętochłowicach.",
                  source: "01806c08-56eb-401b-8ca8-78209683759a"
                },
                
              ]
            }
          },
    ]
}

const Korfanty = () => {
    return(
        <Page content={content}></Page>
    )
}

export default Korfanty;