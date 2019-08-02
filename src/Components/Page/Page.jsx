import React, { useState, useEffect } from "react";
import "./Page.scss";
import Scrollbar from "react-scrollbars-custom";
import Buttons from '../Buttons/Buttons';
import Scrolldownicon from '../../res/images/icons/scrolldown.png';

const Page = props => {
  const content = [];

  const audioContent = [];
  props.content.multimediaItems.forEach(el => el.type === "audio" ? audioContent.push(el) : false);

  const videoContent = [];
  props.content.multimediaItems.forEach(el => el.type === "video" ? videoContent.push(el) : false);

  const mapContent = [];
  props.content.multimediaItems.forEach(el => el.type === "map" ? mapContent.push(el) : false);

  props.content.menuItems.forEach(e => {
    if (e.content != "") content.push(e.content);
  });

  const [menuSelection, setMenuSelection] = useState(0);
  const [textScroll, setTextScroll] = useState();
  const [textHeight, setTextHeight] = useState();
  const [textWindowHeight, setTextWindowHeight] = useState();
  const [scrollInterval, setScrollInterval] = useState();
  const [showScroller, setShowScroller] = useState(false);

  const enableScroll = () => {
    setScrollInterval(
      setInterval(() => {
        setTextScroll(prevTextScroll => prevTextScroll+1)
      }, 10)
    )
  }
  const disableScroll = () => {
    clearInterval(scrollInterval)
  }

  useEffect(() => {
    (textHeight > textWindowHeight) ? setShowScroller(true) : setShowScroller(false);
  })

  return (
    <div className="ps__page__main">
      <div
        className={`ps__page__left ${props.content.titleLeft ? '' : 'right-align' }`}
        style={{
          backgroundImage: `url(${props.content.bg})`,
        }}
      >
        <div className="ps__page__left__title">
          <div className="ps__page__left__title__headline">
            <h2>{props.content.headline}</h2>
          </div>
          <hr />
          <div className="ps__page__left__title__subheadline">
            <p>{props.content.subheadline}</p>
          </div>
        </div>
        <div className="ps__page__left__photoAuthor">
          {props.content.bgAuthor}
        </div>
      </div>
      <div className="ps__page__right">
        <div className="ps__page__right__top">
          <div className="ps__page__right__top__left">
            <div className="ps__page__right__top__left__menu">
              {props.content.menuItems.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (e.type === "text") setMenuSelection(index);
                    }}
                    style={menuSelection === index ? { color: "black" } : null}
                  >
                    {e.label}
                  </div>
                );
              })}
            </div>
            <div className="ps__page__right__top__left__icons">
              <div className="ps__page__right__top__left__icons__label"><span>POSŁUCHAJ I ZOBACZ</span></div>
              <Buttons audio={props.content.audio} audio={audioContent.length > 0} video={videoContent.length > 0} map={mapContent.length > 0} />
            </div>
          </div>
          <div
            className="ps__page__right__top__right"
            style={{ backgroundImage: `url(${props.content.smallImg})` }}
          />
        </div>
        <div className="ps__page__right__bottom">
          <div
            className={`textfield 
            ${textScroll > 0 ? "fadetop" : ""} 
            ${textScroll < textHeight - textWindowHeight ? "fadebottom" : ""}
            `}
          >
            <Scrollbar
              scrollTop={textScroll}
              style={{ width: "90%" }}
              onUpdate={el => {
                setTextScroll(el.scrollTop);
                setTextHeight(el.scrollHeight);
                setTextWindowHeight(el.clientHeight);
              }}
            >
              {content[menuSelection]}
            </Scrollbar>
          </div>
        </div>
        {showScroller ? <div className="ps__page__right__scroller">
             <img src={Scrolldownicon} alt="" onMouseEnter={() => enableScroll()} onMouseLeave={() => disableScroll()} /><span>PRZEWIJAJ TREŚĆ</span>
        </div> : null}
        
      </div>
    </div>
  );
};

export default Page;
