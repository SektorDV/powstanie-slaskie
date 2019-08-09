import React from "react";
import "./IPowstanie.scss";
import Page from "../../Components/Page/Page";
import Background from "../../res/images/bg/ipowstanie.png";
import Small from "../../res/images/small/ipowstaniesmall.png";
import PersonsImg from "../../res/images/bg/ipowstaniepostacie.png";
import alfonsImg from "../../res/img/alfons.png";
import jozefImg from "../../res/img/Józef.png";
import maksymilianImg from "../../res/img/maksymilian.png";
import AudioImg from "../../res/images/bg/ipowstanieaudio.png";
import Mapbg from '../../res/images/bg/1stuprisingmapbg.png';
import FirstUprisingMap from '../../Components/Modal/Map/1stUprisingMap/1stUprisingMap';

const content = {
  headline: `„Jedyny sposób naszej wygranej widzę w zastosowaniu brutalnej represji względem wszystkiego, co polskie”.`,
  subheadline: `Otto Horsing, niemiecki sekretarz stanu na prowincję Śląsk`,
  bg: Background,
  bgAuthor: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
  smallImg: Small,
  menuItems: [
    {
      label: "I Powstanie Śląskie",
      type: "text",
      content: [
        <p>
          Pogarszająca się sytuacja ekonomiczna, spowodowana niewydolnością
          gospodarki niemieckiej po I wojnie światowej, wieści o przetaczającej
          się przez Niemcy <strong>rewolucji</strong>, terror wprowadzony przez
          władze w regionie, połączony z informacją o zwycięstwie{" "}
          <strong>Powstania Wielkopolskiego</strong> rozbudził wśród polskich
          mieszkańców Górnego Śląska chęć przyłączenia regionu do Polski.
        </p>,
        <p>
          Bezpośrednim impulsem dla rozpoczęcia powstania była{" "}
          <strong>masakra robotników w Mysłowicach</strong>. 15 sierpnia oddział
          niemieckiego{" "}
          <strong>Grenzschutzu (niemieckiej „Straży Granicznej”) </strong>
          otworzył <strong> </strong>ogień do ludzi, którzy zgromadzili się na
          terenie mysłowickiej kopalni, domagając się zaległych wypłat. Zginęło
          siedmiu górników, dwie kobiety i 13-letni chłopiec.
        </p>,
        <p>
          Decyzja o wybuchu I Powstania Śląskiego została podjęta na spotkaniu
          dowódców POW, którzy w obawie przed aresztowaniami udali się na
          emigrację do <strong>Piotrowic</strong> w ówczesnej Czechosłowacji.
          Główną rolę podczas spotkania odgrywał{" "}
          <strong>Maksymilian Iksal</strong>, który jednak nie zdecydował się
          wziąć na siebie odpowiedzialności dowodzenia całym powstaniem.
        </p>,
        <p>
          Wobec aresztowania <strong>Józefa Grzegorzka</strong>, dowódcy
          Polskiej Organizacji Wojskowej Górnego Śląska tuż przed wybuchem
          powstania, na czele oddziałów powstańczych stanął{" "}
          <strong>Alfons Zgrzebniok</strong>.
        </p>,
        <p>
          Zryw trwał zaledwie tydzień. Zabrakło koordynacji działań
          powstańczych, właściwego uzbrojenia oraz wsparcia odrodzonej <strong>Rzeczpospolitej, która borykała się w tamtym czasie z najazdem
            bolszewickim
          </strong>
          . Alfons Zgrzebniok wydał rozkaz zaprzestania walk 26 sierpnia 1919. I powstanie śląskie zakończyło się klęską powstańców. 
        </p>
      ]
    },
    {
      label: "Przywódcy powstania",
      type: "persons",
      content: {
        img: PersonsImg,
        author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
        content: [
          {
            name: "Alfons Zgrzebniok",
            img: `${alfonsImg}`,
            text: `Był dowódcą wojskowym I i II Powstania Śląskiego. W czasie I wojny światowej służył w armii niemieckiej na froncie zachodnim, był trzykrotnie ranny. Po wojnie został współorganizatorem POW Górnego Śląska i jej komendantem głównym. Przed wybuchem powstań był jednym z najbardziej poszukiwanych ludzi na Górnym Śląsku.  W czasie III Powstania śląskiego był szefem oddziału personalnego Naczelnej Komendy Wojsk Powstańczych i doradcą wojskowym przy sztabie 1. Dywizji Wojsk Powstańczych. W 1923 roku założył Związek Powstańców Śląskich.`
          },
          {
            name: "Józef Grzegorzek",
            img: `${jozefImg}`,
            text: `Był współorganizatorem POW Górnego Śląska i jej pierwszym komendantem głównym. Nie brał udziału w I Powstaniu Śląskim - tuż przed wybuchem zrywu został aresztowany przez Niemców. Dopiero 25 września 1919 roku udało mu się zbiec z obozu jenieckiego. Brał udział w III powstaniu śląskim, w trakcie którego był członkiem Komitetu Wykonawczego Naczelnej Komendy Wojsk Powstańczych. Był sekretarzem Naczelnej Rady Ludowej na Górnym Śląsku. Choć nie brał udziału w I Powstaniu, jako pierwszy spisał jego dzieje – w swoim opracowaniu krytykował decyzję środowiska Maksymiliana Iksala o rozpoczęciu I Powstania jako nieodpowiedzialną.`
          },
          {
            name: "Maksymilian Iksal",
            img: `${maksymilianImg}`,
            text: `Dowódca POW Górnego Śląska w powiecie rybnickim. Zagrożony niemieckim aresztowaniem, udał się w 1919 roku do obozu dla uchodźców w Piotrowicach (miasto znajdowało się wówczas na terenie spornym między Rzeczpospolitą i Czechosłowacją, od 1920 roku należało do Czechosłowacji). Tam stanął na czele komitetu złożonego z komendantów powiatowych POW Górnego Śląska. 14 sierpnia 1919 wydał rozkaz do rozpoczęcia powstania (był to de facto zamach stanu – Iksal nie miał uprawnień do podjęcia takiej decyzji), nie objął jednak dowództwa naczelnego wojsk powstańczych.`
          }
        ]
      }
    },
    {
        type: "stats",
        content: {
          img: PersonsImg,
          author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
          content: []
        }
      }
  ],
  multimediaItems: [
    {
      type: "audio",
      content: {
        img: AudioImg,
        author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
        content: [
          {
            title: "Nagranie numer 1",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            source: "ffc24e9b-a48d-47f1-807b-dd1df898af8f"
          },
          {
            title: "Nagranie numer 2",
            text:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            source: "55e443bf-782f-4113-8c01-dfca02ca5116"
          },
          {
            title: "Nagranie numer 3",
            text:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            source: "2e14cc64-4ac4-40b4-a588-ce7ff637eb83"
          },
          {
            title: "Nagranie numer 4",
            text:
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            source: "383b7b9d-8313-442d-bca1-5030d8f2a166"
          },
          {
            title: "Nagranie numer 5",
            text:
              "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            source: "2a1e3fa6-340f-46f4-b787-70aa9c4e90d3"
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            source: "3f4b1066-79c1-473c-a14c-388410466b40"
          },
          {
            title: "Nagranie numer 2",
            text:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            source: "b5ba3b88-9ed8-44bf-9146-7546b78ff959"
          }
        ]
      }
    },
    {
      type: "map",
      layout: <FirstUprisingMap bg={Mapbg} />,
      img: Mapbg
    }
  ]
};

const IPowstanie = () => {
  return <Page content={content} />;
};

export default IPowstanie;
