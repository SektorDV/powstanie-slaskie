import React, { useState, useEffect } from "react";
import Scrollbar from "react-scrollbars-custom";
import './Textfield.scss';
import Scrolldownicon from '../../res/images/icons/scrolldown.png';

const Textfield = props => {
  const [textScroll, setTextScroll] = useState();
  const [textHeight, setTextHeight] = useState();
  const [textWindowHeight, setTextWindowHeight] = useState();
  const [showScroller, setShowScroller] = useState(false);
  const [scrollInterval, setScrollInterval] = useState();

  useEffect(() => {
    (textHeight > textWindowHeight) ? setShowScroller(true) : setShowScroller(false);
  })

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

  return (
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
        <div
          className="textcontent"
        >{props.content}</div>
      </Scrollbar>
      <div className="textfield__scroller">
          {showScroller ? <><img src={Scrolldownicon} alt="" onMouseEnter={() => enableScroll()} onMouseLeave={() => disableScroll()} /><span>PRZEWIJAJ TREŚĆ</span></>: null}
        </div> 
    </div>
  );
};

export default Textfield;
