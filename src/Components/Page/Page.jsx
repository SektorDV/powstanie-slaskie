import React, { useState, useEffect, useRef } from "react";
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
  const [imgStyle, setImgStyle] = useState({ X: 0, Y: 0 });
  const [x, updatePositionX] = useState();
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const menuRef =[];
  let imgRef = React.createRef();

  useEffect(() => {
    parallax(x, setImgStyle);
  }, [x]);

  useEffect(()=>{
    setTop(menuRef[0].getBoundingClientRect().top)
    setLeft(`calc(${imgRef.current.getBoundingClientRect().width}px - 2.5rem)`)
  
  }, []);

  return (
    <div
      className="ps__page__main"
      onMouseMove={e => updatePositionX(e.clientX)}
    >
      <div
<<<<<<< HEAD
        className={`ps__page__left ${props.content.titleLeft ? '' : 'right-align' }`}
        ref = {imgRef}
=======
        className={`ps__page__left ${
          props.content.titleLeft ? "" : "right-align"
        }`}
>>>>>>> 0ec9037564019c52f44b0a6879765a1a1fdb9ba9
        style={{
          backgroundImage: `url(${props.content.bg})`,
          backgroundPositionX: -142 + imgStyle.X + "px",
          backgroundPositionY: 0 + imgStyle.Y + "px"
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
<<<<<<< HEAD
        <div className="ps__page__right__top">
          <div className="ps__page__right__top__left">
            <div className="ps__page__right__top__left__menu">
              <div class="menuSelected" style={
                {top: `calc(${top}px - 2.6rem)`, left: left, zIndex: 5, transition:'all 1s ease'}
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
                      
                      }
                      else {

                        props.sendDataToModal(e.content.img||null, e.content.author||null, e.content.content||null, e.type, e.content.modalTabs||null)
                        props.showModal();
                      }
                      
                    }}
                    style={menuSelection === index ? { color: "black" } : null}
                  >
                    {e.label}
                  </div>
                );
              })}
=======
        <div className="ps__page__right__menu">
          <div className="ps__page__right__menu__top">
            {props.content.menuItems.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (e.type === "text") setMenuSelection(index);
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
                  style={menuSelection === index ? { color: "black" } : null}
                >
                  {e.label}
                </div>
              );
            })}
          </div>

          <div className="ps__page__right__menu__icons">
            <div className="ps__page__right__menu__icons__label">
              <span>POSŁUCHAJ I ZOBACZ</span>
>>>>>>> 0ec9037564019c52f44b0a6879765a1a1fdb9ba9
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
