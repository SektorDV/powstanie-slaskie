import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import MaterialIcon from "material-icons-react";
import Textfield from "../Textfield/Textfield";

const Modal = props => {
  const [modalOpacity, setModalOpacity] = useState(0);
  const [menuSelection, setMenuSelection] = useState(0);
  useEffect(() => {
    setModalOpacity(1);
  }, []);

  return (
    <div className="ps__modalwindow" style={{ opacity: modalOpacity }}>
      <div className="ps__modalclose">
        <MaterialIcon
          onClick={() => {
            setModalOpacity(0);
            setTimeout(() => {
              props.switchOffModal();
            }, 300);
          }}
          icon="clear"
        />
      </div>
      <div className="ps__modalwindow__left">
        <div className="ps__modalwindow__left__personslist">
          {props.content.map((e, index) => {
            return (
              <div
                key={index}
                onClick={() => setMenuSelection(index)}
                className="ps__modalwindow__left__personslist__personcontainer"
                name={props.content[index].name}
              >
                <div
                  className="ps__modalwindow__left__personslist__personcontainer__bg"
                  style={{
                    backgroundColor:
                      menuSelection === index ? "#f25a4b" : "#27262a",
                  }}
                />
                <img
                  src={e.img}
                  alt={e.name}
                  className={menuSelection === index ? 'selected' : null}
                />
              </div>
            );
          })}
        </div>
        <div className="ps__modalwindow__left__textcontainer">
          <div className="arrow" style={{opacity: menuSelection===0?1:0}}></div>
          <div className="arrow" style={{top: '45%', opacity: menuSelection===1?1:0}}></div>
          <div className="arrow" style={{top: '79%', opacity: menuSelection===2?1:0}}></div>
          <h2>{props.content[menuSelection].name}</h2>
          <div className="ps__modalwindow__left__textcontainer__dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <Textfield content={props.content[menuSelection].text} />
        </div>
      </div>
      <div
        className="ps__modalwindow__right"
        style={{
          backgroundImage: `url(${props.bgImg})`,
          width: 1000,
          height: 1000
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    switchOffModal: () => {
      dispatch({ type: "SWITCH_OFF_MODAL" });
    }
  };
};

const mapStateToProps = state => {
  return {
    bgImg: state.modalImgSrc,
    content: state.modalContent
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
