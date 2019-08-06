import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import MaterialIcon from "material-icons-react";
import Persons from './Persons/Persons';
import Video from './Video/Video';

const Modal = props => {
  const [modalOpacity, setModalOpacity] = useState(0);
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
      {props.type==="persons" ? <Persons content={props.content} /> : null}
      {props.type==="video" ? <Video content={props.content}/> : null}
          
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
    content: state.modalContent,
    type: state.modalType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
