import React from 'react';
import './Korfanty.scss';
import Pagination from '../../Components/Pagination/Pagination';
import Background from '../../res/images/bg/korfantybg.png';
import Page from '../../Components/Page/Page';
import Small from '../../res/images/small/korfantysmall.png';

const content = {
    headline: `„Mości panowie, nie chcemy ani piędzi ziemi niemieckiej. Żądamy jedynie, w myśl postanowień punktu trzynastego programu Wilsona, własnej, jednej, złożonej z ziem trzech zaborów Polski”`,
    subheadline: `mowa posła Wojciecha Korfantego w Reichstagu, 25 października 1918`,
    bg: Background,
    bgAuthor: 'Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Sylwetka",
            type: "text",
            content: `<p><strong>Niekwestionowany autorytet i przywódca ludności polskiej na Śląsku</strong>. Urodził się <strong>20 kwietnia 1873 roku</strong> w <strong>Siemianowicach Śląskich</strong> w rodzinie górniczej. Czytać nauczyła go matka na "Żywotach świętych" Piotra Skargi, ale przy lekturze "Pana Tadeusza" posługiwać się musiał jeszcze słownikiem polsko-niemieckim. Bardzo zdolny i niezwykle inteligentny, wykształcony w niemieckich szkołach, w pewnym momencie przestawił się na "polskość".</p>

            <p>W 1903 roku zdobył mandat poselski do Reichstagu. Był to pierwszy polski mandat z Górnego Śląska. Utrzymał go do 1918 roku. W ostatniej swej mowie, wygłoszonej 25 października 1918 żądał włączenia do Polski ziem zaboru pruskiego wraz ze <strong>Śląskiem, Warmią, Mazurami i Gdańskiem</strong>. Był członkiem Naczelnej Rady Ludowej, która stanowiła namiastkę lokalnego rządu podczas <strong>Powstania Wielkopolskiego</strong>.</p> 
            
            <p>Był przeciwnikiem wybuchu I Powstania Śląskiego. Próbował wyperswadować przywódcom <strong>Polskiej Organizacji Wojskowej Górnego Śląska</strong>, że los regionu leży w rękach mocarstw, które zwyciężyły w I wojnie światowej. W myśl tej idei został <strong>komisarzem plebiscytowym na Górnym Śląsku</strong>, stając się jednym z czołowych przywódców walki o polskość tej ziemi.</p> 
            
            <p>Nie był przeciwnikiem zrywów, uważał jednak, że muszą one mieć miejsce w sprzyjających okolicznościach i widział je jako manifestację propolskich dążeń mieszkańców Śląska. Nic dziwnego, że to on stał na czele <strong>II i III Powstania Śląskiego</strong> i zabiegał o korzystny dla Polski werdykt aliantów.
            Korfanty był przeciwnikiem Józefa Piłsudskiego, którego postrzegał jako niebezpiecznego radykała. Po przewrocie majowym w 1926 roku Wojciech Korfanty był więziony w Brześciu wraz z innymi członkami Centrolewu. W obawie przed represjami wyjechał z Polski do stolicy Czechosłowacji. Do kraju nie mógł wrócić nawet w 1938 roku na pogrzeb swego syna Witolda. Powrócił dopiero w kwietniu 1939 roku. Został jednak aresztowany i - mimo protestów - osadzony na Pawiaku, gdzie przesiedział trzy miesiące.</p>
            <p>Zmarł dwa tygodnie przez wybuchem II wojny światowej, 17 sierpnia 1939.</p>
            `
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