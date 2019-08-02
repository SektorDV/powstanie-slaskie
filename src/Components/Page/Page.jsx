import React, { useState } from "react";
import "./Page.scss";
import Scrollbar from "react-scrollbars-custom";
import Buttons from '../Buttons/Buttons';


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
  const [textScroll, setTextScroll] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

  return (
    <div className="ps__page__main">
      <div
        className="ps__page__left"
        style={{
          backgroundImage: `url(${props.content.bg})`,
          justifyContent: props.content.titleLeft ? null : "flex-end",
          alignItems: props.content.titleLeft ? null : "flex-end"
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
            ${textScroll < textHeight ? "fadebottom" : ""}
            `}
          >
            <Scrollbar
              style={{ width: "90%" }}
              onUpdate={el => {
                setTextScroll(el.scrollTop);
                setTextHeight(el.scrollHeight - el.clientHeight);
              }}
            >
              {content[menuSelection]}
            </Scrollbar>
          </div>
        </div>
        <div className="ps__page__right__scroller" />
      </div>
    </div>
  );
};

export default Page;
