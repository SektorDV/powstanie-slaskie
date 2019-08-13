import React from 'react';
import './Plebiscyt.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/plebiscytbg.png';
import Small from '../../res/images/small/plebiscytsmall.png';
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";



const content={
    headline: `„Głos przodków, Ojczyzny i serc Waszych polskich oraz interes własny i Waszych potomków nakazuje Wam głosować za Polską”`,
    subheadline: `Wojciech Korfanty, polski komisarz plebiscytowy, cytat za plebiscytowym wydaniem magazynu „Kocynder”`,
    bg: Background,
    bgAuthor: 'Działacze plebiscytowi / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Plebiscyt",
            type: "text",
            content: [<p>
                Na mocy ustaleń <strong>traktatu wersalskiego</strong> na Górnym Śląsku
                miał odbyć się <strong>plebiscyt</strong>, który miał zadecydować o
                podziale spornego obszaru między Polskę i Niemcy.
            </p>,
            <p>
            Kontrolę nad obszarem plebiscytowym miała sprawować    <strong>Międzysojusznicza Komisja Rządząca Plebiscytowa</strong> z siedzibą
                w Opolu, w skład której wchodzili przedstawiciele Francji, Wielkiej
                Brytanii i Włoch. Porządku pilnować miały wojska państw alianckich i
                policja plebiscytowa APO złożona z Polaków i Niemców.
            </p>,
            <p>
            Polską ludność Śląska reprezentował    <strong>Polski Komisariat Plebiscytowy w Bytomiu</strong> z siedzibą w
            hotelu „<strong>Lomnitz</strong>”, kierowany przez komisarza    <strong>Wojciecha Korfantego</strong>. Niemieckim Komisariatem
            Plebiscytowym z siedzibą w Katowicach kierował z kolei    <strong>dr Kurt Urbanek</strong>. Organizacji plebiscytu towarzyszyła ostra
                kampania propagandowa i agitacja obu stron.
            </p>,
            <p>
            Plebiscyt odbył się 20 marca 1921 roku. Jego wyniki były    <strong>niekorzystne dla Polski</strong>. Spośród 1190 tys. głosujących, za
                Polską opowiedziało się 479 tys. (40,2 proc.), zaś za Niemcami - 707 tys.
                osób (59,4 proc.).
            </p>,
            <p>
                Po plebiscycie zaproponowano, by do Polski trafiły tylko powiaty pszczyński
                i rybnicki oraz część katowickiego i tarnogórskiego. Ta decyzja spowodowała
                niezadowolenie ludności polskiej Śląska oraz władz Rzeczpospolitej. Była
                ona główną przyczyną wybuchu <strong>III Powstania Śląskiego</strong>.
            </p>]
        }
    ],
    multimediaItems: [
        {
            type: "video",
            content: {
              img: AudioImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
              content: [
                {
                  title: "Nagranie numer 1",
                  text:
                    "- Ze względu na znaczenie przemysłowe regionu, plebiscyt na Górnym Ślasku był najważniejszy spośród referendów zaplanowanych w traktacie wersalskim. Obie strony zmobilizowały olbrzyie siły, by ten plebiscyt wygrać. Posługiwano się ostrą propagandą na wiecach, w prasie i na plakatach - podkreślał Jan Planta, historyk z Muzeum Powstań Śląskich w Świętochłowicach.",
                  source: "a5147625-296f-4f70-ab05-6426e5b701dd"
                },
                
              ]
            }
          },
          {
            type: "map",
            //layout: <ReferendumMap bg={Mapbg} author='Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe'/>,
            //img: Mapbg
          },
        {
            type: "audio",
            content: {
              img: AudioImg,
              author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
              content: [
                {
                  title: 'Marki leżały na ulicach' ,
                  text:
                  `- Wiarę ludzi w powrót do Polski unaoczniał fakt stosunku do waluty. Polskie marki trzymano w domu ukryte, z nadzieją, że wkrótce się przydadzą. Niemcy rozrzucali swoje pieniądze po ulicy, ale nikt w ich wypłacalność nie wierzył - wspominał Teodor Mańczyk, działacz plebiscytowy na Górnym Śląsku, uczestnik III Powstania Śląskiego. (PR, 25.05.1962)`,                 
                  source: "352c1f1e-686c-4b69-9692-32779461fe03"
                },
                {
                    title: "Granaty pod nogi agitatorów",
                    text:
                    '- Ludzie byli zastraszani. Niemieckie bojówki nie cofały się przed niczym. Rzucano granaty pod nogi agitatorów –wspominał działacz plebiscytowy Teodor Mańczyk. (PR, 13.11.1958)',
                    source: "fa52cf63-ba9a-414f-acfe-c2e4db99b94f"
                  },
                  {
                    title: "Nie zdawał człowiek na łzy matki",
                    text:
                    '- Poszliśmy w powstanie. Pamiętam taki moment, kiedy mieliśmy zabrać na noszach jednego powstańca z utrąconą nogą, a ten gada: „Pieruna, dajcie mi, a zabija tych pięciu pierunów i dopiero umrę” – relacja uczestnika II Powstania Śląskiego. (PR, 4.08.1975)',
                    source: "2708a050-7a1f-4d81-9aa9-5d3cc2976f97"
                  },
                  {
                    title: "Przyszli spalić komisariat",
                    text:
                    '- Dzień przed plebiscytem pod budynkiem Polskiego Komisariatu Plebiscytowego zebrało się ok. 4000 ludzi. Chcieli wedrzeć się do środka i wykraść dokumenty. Podpalili szopę, która znajdowała się za budynkiem komisariatu - mówił Jan Wawrzynek, działacz plebiscytowy. (PR, 28.04.1971)',
                    source: "37806b93-3691-4c74-b578-3dea138043c5"
                  },
                
                
              ]
            }
          },
    ]
}

const Plebiscyt = () => {
    return(
        <Page content={content} />
    )
}

export default Plebiscyt;