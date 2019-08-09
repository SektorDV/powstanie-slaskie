import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import MaterialIcon from "material-icons-react";
import Persons from './Persons/Persons';
import Video from './Video/Video';
import Audio from './Audio/Audio';
import Map from './Map/Map';
import Statistics from './Statistics/Statistics';

const Modal = props => {
  const [modalOpacity, setModalOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setModalOpacity(1);
    }, 1)
  }, []);

  return (
    <div className="ps__modalwindow" style={{ transition: "opacity 0.3s", opacity: modalOpacity }}>
      <div className="ps__modalclose" style={{ backgroundColor:  props.type === 'map' ? '#cac4b1' : '', color: props.type === 'map' ? 'black' : '' }}>
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
      {props.type==="data" ? <Statistics content={props.content} tabs={props.modalTabs} /> : null}
      {props.type==="audio" ? <Audio content={props.content}/> : null}
      {props.type==="map" ? <Map content={props.content}/> : null}
      {props.type!=="data" && props.type!=="map" ? <div
        className="ps__modalwindow__right"
        style={{
          backgroundImage: `url(${props.bgImg})`,
          width: '60rem',
          height: '100%'
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
    type: state.modalType,
    modalTabs: state.modalTabs
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
