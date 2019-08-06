import React, { useState } from "react";
import Scrollbar from "react-scrollbars-custom";
import './Textfield.scss';

const Textfield = props => {
  const [textScroll, setTextScroll] = useState();
  const [textHeight, setTextHeight] = useState();
  const [textWindowHeight, setTextWindowHeight] = useState();
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
    </div>
  );
};

export default Textfield;
