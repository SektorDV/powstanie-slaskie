import React from 'react';
import './Korfanty.scss';
import Background from '../../res/images/bg/korfantybg.png';
import Page from '../../Components/Page/Page';
import Small from '../../res/images/small/korfantysmall.png';


const content = {
    headline: `„Mości panowie, nie chcemy ani piędzi ziemi niemieckiej. Żądamy jedynie, w myśl postanowień punktu trzynastego programu Wilsona, własnej, jednej, złożonej z ziem trzech zaborów Polski”.`,
    subheadline: `Fragment mowy posła Wojciecha Korfantego w Reichstagu, 25 października 1918`,
    bg: Background,
    bgAuthor: 'Wojciech Korfanty / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Sylwetka",
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
            type: "audio"
        },
        {
            type: "video"
        }
    ]
}

const Korfanty = () => {
    return(
        <Page content={content}></Page>
    )
}

export default Korfanty;