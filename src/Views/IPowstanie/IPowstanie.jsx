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

const content = {
  headline: `"Zwycięstwo osiągniemy za wszelką cenę 
    i nie ma takiego mocarza na świecie, 
    który by mógł nas okuć ponownie 
    w kajdany germańskie" `,
  subheadline: `z odezwy Wojciecha Korfantego do rodaków, 3 maja 1921`,
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
          . Alfons Zgrzebniok wydał rozkaz zaprzestania walk 26 sierpnia 1919.
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
            text: `Maciej Ignacy Mielżyński, pseud. „Nowina-Doliwa” (ur. 13 października 1869 w Chobienicach, zm. 9 stycznia 1944 w Wiedniu) – hrabia, podpułkownik kawalerii Wojska Polskiego, polski działacz narodowy w Wielkopolsce i na Górnym Śląsku. Naczelny wódz III powstania śląskiego, współzałożyciel Stronnictwa Polskiego na Górnym Śląsku.

                            Jego ojciec, Karol Ignacy hr. Mielżyński, był ziemianinem z Chobienic w powiecie wolsztyńskim, w Wielkopolsce. Matka Emilia pochodziła z rodu hrabiów Bnińskich. Jego rodzina należała do najbogatszych w Wielkopolsce. Ukończył szkołę średnią w Lesznie, a potem studiował prawo i malarstwo w Monachium. Odbył służbę wojskową w armii niemieckiej w latach 1894–1898, a następnie w latach 1898–1914 odbywał praktyki rolnicze w Będlewie i Dakowach Mokrych. W latach 1903–1914 był posłem do Reichstagu. W okresie 1904-1910 był prezesem Klubu Wioślarskiego z roku 1904 w Poznaniu.
                            
                            21 grudnia 1913 roku zastrzelił zdradzającą go żonę Felicję z Potockich (córkę hr. Bolesława Eligiusza Potockiego z Będlewa i Józefy z Mycielskich) oraz jej siostrzeńca i kochanka – hr. Alfreda Miączyńskiego (syna Władysława Miączyńskiego i Heleny z Potockich – siostry przyrodniej Felicji). Chociaż sąd go uniewinnił (działał w obronie honoru), stosowany był wobec niego w Wielkopolsce bojkot towarzyski.
                            
                            W 1909 roku posiadał wsie rycerskie: Chobienice, Godziszewo, Grońsko i Nieborze w powiecie babimojskim rejencji poznańskiej w Wielkim Księstwie Poznańskim[2].
                            
                            Maciej Mielżyński w 1909 roku zaczął interesować się sprawami górnośląskimi, politycznie związał się z endecją. Kupił też wydawnictwo Karola Miarki seniora w Mikołowie. I wojnę światową spędził w szeregach armii niemieckiej. W 1920 roku wstąpił do Wojska Polskiego w stopniu majora. W styczniu 1921 został oddelegowany na Górny Śląsk (już jako podpułkownik kawalerii). Początkowo zastępca dowódcy, a od kwietnia 1921 roku dowódca tajnej organizacji wojskowej Dowództwo Obrony Plebiscytu (DOP). W chwili wybuchu III powstania śląskiego DOP został przekształcony w Naczelną Komendę Wojsk Powstańczych, a Mielżyński stanął na czele III powstania śląskiego.`
          },
          {
            name: "Józef Grzegorzek",
            img: `${jozefImg}`,
            text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
          },
          {
            name: "Maksymilian Iksal",
            img: `${maksymilianImg}`,
            text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`
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
          {
            title: "Nagranie numer 6",
            text:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            source: "36f97c4b-91a5-4cd4-baf3-c503f34724f5"
          }
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
      content: {
        img: AudioImg,
        author: "Powstańcy Śląscy 1919 / Narodowe Centrum Cyfrowe",
        content: []
      }
    }
  ]
};

const IPowstanie = () => {
  return <Page content={content} />;
};

export default IPowstanie;
