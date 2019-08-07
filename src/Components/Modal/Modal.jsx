import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import MaterialIcon from "material-icons-react";
import Persons from './Persons/Persons';
import Video from './Video/Video';
<<<<<<< HEAD
import Audio from './Audio/Audio';
=======
import Statistics from './Statistics/Statistics';
>>>>>>> 660d50b20e26dc40af34624018f836d2d2bd033a

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
      <div className="ps__modalwindow__bgauthor">
        {props.imgAuthor}
      </div>
      {props.type==="persons" ? <Persons content={props.content} /> : null}
      {props.type==="video" ? <Video content={props.content}/> : null}
<<<<<<< HEAD
      {props.type==="audio" ? <Audio content={props.content}/> : null}
=======
      {props.type==="data" ? <Statistics content={props.content} /> : null}
>>>>>>> 660d50b20e26dc40af34624018f836d2d2bd033a
          
      {props.type!=="data" ? <div
        className="ps__modalwindow__right"
        style={{
          backgroundImage: `url(${props.bgImg})`,
          width: 1000,
          height: 1000
        }}
      /> : null}
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
    imgAuthor: state.modalImgAuthor,
    content: state.modalContent,
    type: state.modalType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
