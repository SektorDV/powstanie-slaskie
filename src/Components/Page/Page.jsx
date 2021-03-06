import React, { useState, useEffect } from "react";
import "./Page.scss";
import Buttons from "../Buttons/Buttons";
import Textfield from "../Textfield/Textfield";
import { connect, dispatch } from "react-redux";
import { parallax } from "../../functions/parallax";

const Page = props => {
  const content = [];

  const audioContent = [];
  props.content.multimediaItems.forEach(el =>
    el.type === "audio" ? audioContent.push(el) : false
  );

  const videoContent = [];
  props.content.multimediaItems.forEach(el =>
    el.type === "video" ? videoContent.push(el) : false
  );

  const mapContent = [];
  props.content.multimediaItems.forEach(el =>
    el.type === "map" ? mapContent.push(el) : false
  );

  props.content.menuItems.forEach(e => {
    if (e.content != "") content.push(e.content);
  });
  const [menuSelection, setMenuSelection] = useState(0);
  const [imgStyle, setImgStyle] = useState({ X: 0 });
  const [x, updatePositionX] = useState();
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [menuHeight, setMenuHeight] = useState()
  const menuRef =[];
  let imgRef = React.createRef();

  useEffect(() => {
    parallax(x, setImgStyle);
  }, [x]);

  useEffect(()=>{
    setTop(menuRef[0].getBoundingClientRect().top)
    setLeft(`calc(${imgRef.current.getBoundingClientRect().width}px - 2%)`)
    setMenuHeight(menuRef[0].getBoundingClientRect().height)

  
  }, []);
  return (
    <div
      className="ps__page__main"
      onMouseMove={e => updatePositionX(e.clientX)}
    >
      <div
                ref = {imgRef}

        className={`ps__page__left ${
          props.content.titleLeft ? "" : "right-align"
        }`}
        style={{
          backgroundImage: `url(${props.content.bg})`,
          backgroundPositionX: props.content.menuItems[0].label == 'Wojciech Korfanty'? 1 + imgStyle.X + "rem" : -7.1 + imgStyle.X + "rem",
          backgroundPositionY: props.content.menuItems[0].label == "Problem śląska po i wojnie światowej"? '-3rem' : null,

          backgroundSize: props.content.menuItems[0].label == 'Wojciech Korfanty'? '60rem' : '70rem',
          backgroundRepeatX: props.content.menuItems[0].label == 'Wojciech Korfanty'? 'repeat' : 'no-repeat',
          backgroundRepeatY: 'no-repeat'
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
        <div className="ps__page__right__menu">
          <div className="ps__page__right__menu__top">
          <div class="menuSelected" style={
                {top: `calc(${top+menuHeight/2}px - 2.66rem)` , left: left, zIndex: 5, transition:'all 1s ease'}
                }>

                  <div className="menuSelected--half" style={{width: '50%', height: '100%', backgroundColor: '#f25a4b'}}>

                  </div>
                </div>
            {props.content.menuItems.map((e, index) => {
              return (
                <div
                ref={ref => (menuRef[index] = ref)}
                key={index}
                onClick={() => {
                  if (e.type === "text"){setMenuSelection(index);
                  setTop(menuRef[index].getBoundingClientRect().top);
                  setMenuHeight(menuRef[index].getBoundingClientRect().height)
                  
                  }
                    else {
                      props.sendDataToModal(
                        e.content.img || null,
                        e.content.author || null,
                        e.content.content || null,
                        e.type,
                        e.content.modalTabs || null
                      );
                      props.showModal();
                    }
                  }}
                  style={menuSelection === index ? { color: "#292929" } : null}
                >
                  {e.label}
                </div>
              );
            })}
          </div>

          <div className="ps__page__right__menu__icons">
            <div className={audioContent.length > 0 && videoContent.length == 0 && mapContent.length == 0?'ps__page__right__menu__icons__label shorter':'ps__page__right__menu__icons__label'}>
          {audioContent.length > 0 && (videoContent.length > 0 || mapContent.length > 0)?<span>POSŁUCHAJ I ZOBACZ</span>:null }
          {audioContent.length > 0 && videoContent.length == 0 && mapContent.length == 0?<span>POSŁUCHAJ</span>:null }
          {audioContent.length == 0 && (videoContent.length > 0 || mapContent.length > 0)?<span>ZOBACZ</span>:null }


                  
            
            </div>
            <Buttons
              audio={audioContent.length > 0}
              audioContent={audioContent}
              video={videoContent.length > 0}
              videoContent={videoContent}
              map={mapContent.length > 0}
              mapContent={mapContent}
            />
          </div>
        </div>

        <div
          className="ps__page__right__imgSmall"
          style={{ backgroundImage: `url(${props.content.smallImg})` }}
        />
        <div className="ps__page__right__bottom">
          <Textfield content={content[menuSelection]} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sendDataToModal: (img, imgAuthor, content, type, modalTabs) => {
      dispatch({
        type: "SET_MODAL_DATA",
        payload: {
          img: img,
          imgAuthor: imgAuthor,
          content: content,
          type: type,
          modalTabs: modalTabs
        }
      });
    },
    showModal: () => dispatch({ type: "SWITCH_ON_MODAL" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Page);