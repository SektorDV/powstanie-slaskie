import React from 'react';
import './Plebiscyt.scss';
import Page from '../../Components/Page/Page';
import Background from '../../res/images/bg/plebiscytbg.png';
import Small from '../../res/images/small/plebiscytsmall.png';


const content={
    headline: `„Głos przodków, Ojczyzny i serc Waszych polskich oraz interes własny i Waszych potomków nakazuje Wam głosować za Polską”`,
    subheadline: `Wojciech Korfanty, polski komisarz plebiscytowy, cytat za plebiscytowym wydaniem magazynu „Kocynder”`,
    bg: Background,
    bgAuthor: 'Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe',
    smallImg: Small,
    menuItems: [
        {
            label: "Efekty i skutki powstań",
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
            type: "video"
        },
        {
            type: "map"
        }
    ]
}

const Plebiscyt = () => {
    return(
        <Page content={content} />
    )
}

export default Plebiscyt;