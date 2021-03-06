import React from "react";
import "./Buttons.scss";
import {connect, dispatch} from 'react-redux';

const Buttons = (props) => {
  return (
    <div className="ps__buttons">
      {props.video ? <div className={props.stopWorking==true?"buttons__button":"buttons__button working"}>
        <svg
           onClick={() => {
            if (props.stopWorking == undefined) {
            props.setModalData(props.videoContent, 'video', props.videoContent[0].content.img)
            props.showModal();
            }
          }}
          id="icons"
          className="buttons__video"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 38"
        >
          <defs>
            <style> {".cls-1{fill:#6a8594;}"}</style>
          </defs>
          <title>Video</title>
          <path
            className="cls-1"
            d="M47,29H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H47a1,1,0,0,1,1,1V28A1,1,0,0,1,47,29ZM2,27H46V2H2Z"
          />
          <path
            className="cls-1"
            d="M20,22a1,1,0,0,1-.49-.13A1,1,0,0,1,19,21V9a1,1,0,0,1,1.51-.86l10,6a1,1,0,0,1,0,1.72l-10,6A1,1,0,0,1,20,22Zm1-11.23v8.46L28.06,15Z"
          />
          <rect className="cls-1" x="18" y="33" width="30" height="2" />
          <path
            className="cls-1"
            d="M13,38a4,4,0,1,1,4-4A4,4,0,0,1,13,38Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,13,32Z"
          />
          <rect className="cls-1" y="33" width="8" height="2" />
        </svg>
  </div> : null }
  {props.audio ? 
      <div className={props.stopWorking==true?"buttons__button":"buttons__button working"}>
      <svg
          onClick={() => {
            if (props.stopWorking == undefined) {

            props.setModalData(props.audioContent, 'audio', props.audioContent[0].content.img)
            props.showModal();
            }
          }}
          id="icons"
          className="buttons__audio"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.99 38"
        >
          <defs>
            <style>{".cls-1{fill:#6a8594;}"}</style>
          </defs>
          <title>Audio</title>
          <path
            className="cls-1"
            d="M30.49,27.49l-1.42-1.42a10,10,0,0,0,0-14.14l1.42-1.42A12,12,0,0,1,30.49,27.49Z"
          />
          <path
            className="cls-1"
            d="M34.73,31.73l-1.42-1.42a16,16,0,0,0,0-22.62l1.42-1.42a18,18,0,0,1,0,25.46Z"
          />
          <path
            className="cls-1"
            d="M39,36l-1.41-1.41a22,22,0,0,0,0-31.12L39,2A24,24,0,0,1,39,36Z"
          />
          <path
            className="cls-1"
            d="M22.66,0l-13,10H0V28H9.66l13,10H25V0ZM2,12H9V26H2ZM23,35.74,11,26.51v-15L23,2.26Z"
          />
        </svg>
      </div> : null }
      {props.map ? 
      <div className={props.stopWorking==true?"buttons__button":"buttons__button working"}>
        <svg
          onClick={() => {
            if (props.stopWorking == undefined) {

            props.setModalData(props.mapContent, 'map', props.mapContent[0].img)
            props.showModal();
            }
          }}
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.68 38"
        >
          <defs>
            <style>{".cls-1{fill:#6a8594;}"}</style>
          </defs>
          <title>Mapa</title>
          <path
            className="cls-1"
            d="M14,37.9h.57l.07,0h0l.06,0,12.88-6.49,12.85,3,.23,0a1,1,0,0,0,1-1V4.17a1,1,0,0,0-.79-1L27.68.1h-.51l-.06,0H27l0,0h0L14.13,6.66,1.29,3.18A1,1,0,0,0,0,4.17v5.1H0V33.32a1,1,0,0,0,.76,1L14,37.89ZM19.47,6.26c.93,2.24,2.3,3.61,4,4a7.28,7.28,0,0,0,2.22.06l.76-.05V29.62l-.93.47c-1.68-1.3-2.12-3.95-2.42-6.56-.38-3.22-1.07-6.42-3.6-8a6.07,6.07,0,0,0-1.6-.7,8.3,8.3,0,0,0-.92-.19,11.05,11.05,0,0,0-1.69-.11V8.38Zm.06,26.83a5,5,0,0,0-1.09-1.4,4.55,4.55,0,0,0-2.33-1,6.25,6.25,0,0,0-.85-.08V16.55a10.9,10.9,0,0,1,1.39.08c.24,0,.46.09.67.14a3.71,3.71,0,0,1,1.05.46c1.81,1.15,2.35,3.82,2.66,6.54a22.06,22.06,0,0,0,.84,4.35,7.92,7.92,0,0,0,1.67,2.95Zm-4.27-.43.54.05a2.72,2.72,0,0,1,1.31.53,3.14,3.14,0,0,1,.59.77l-2.44,1.23Zm13.21-22a5.42,5.42,0,0,1,2.72,2.29c.06.09.11.19.17.29a3.81,3.81,0,0,0,1.36,1.62,2.71,2.71,0,0,0,1.38.37,3.39,3.39,0,0,0,1.12-.2c1.65-.58,2.82-2.24,3.22-4.54.11-.62.16-1.25.21-1.85a11.9,11.9,0,0,1,.45-2.69,1.66,1.66,0,0,1,.53-.87V21.55l0,0a.83.83,0,0,1-.74.09A5.08,5.08,0,0,1,37.62,21l-.13-.1A8,8,0,0,0,35,19.68a3.82,3.82,0,0,0-3.22.56,3.61,3.61,0,0,0-1.37,3,5.24,5.24,0,0,0,1,2.82c.18.26.37.5.56.73s.35.45.5.67a4.56,4.56,0,0,1,.71,3.09l-4.63-1.08Zm0-2.16V2.39l9,2.1a4.08,4.08,0,0,0-.34.79,13.19,13.19,0,0,0-.55,3.16c0,.59-.1,1.14-.19,1.69C36,12.39,34.88,13,34.54,13.08a1,1,0,0,1-.78,0,2.37,2.37,0,0,1-.61-.84L33,11.9A7.55,7.55,0,0,0,28.47,8.48ZM35.1,31a6.67,6.67,0,0,0-1-4.69c-.2-.29-.4-.55-.61-.81s-.33-.42-.47-.62a3.25,3.25,0,0,1-.61-1.69A1.61,1.61,0,0,1,33,21.88a1.84,1.84,0,0,1,1.51-.21,5.92,5.92,0,0,1,1.88.94l.13.09a6.13,6.13,0,0,0,1.84.94,3.11,3.11,0,0,0,1.31.09V32ZM26.42,8.22c-.31,0-.62,0-.92.06a5.31,5.31,0,0,1-1.6,0c-.72-.16-1.75-.81-2.6-2.92l5.12-2.58Zm-13.21.32v6l-.46,0a18.62,18.62,0,0,1-6.32-.32,6.9,6.9,0,0,1-3.12-2,4.6,4.6,0,0,1-1.26-3h0V5.51ZM5.85,16.25a20.08,20.08,0,0,0,7,.4l.34,0v14l-.51-.06a4.71,4.71,0,0,1-1.68-.4c-.25-.15-.93-.54-.31-2.58.34-1.13,1.06-3.5-.81-4.94-1.59-1.25-4-.8-5-.54l-1.21.35a13.94,13.94,0,0,1-1.67.46V14A9,9,0,0,0,5.85,16.25ZM2.05,25a14.92,14.92,0,0,0,2.28-.58L5.45,24a4,4,0,0,1,3.2.17c.54.43.57,1.17.1,2.74-.9,3,.18,4.32,1.24,4.94a6.36,6.36,0,0,0,2.46.66l.65.09h.11v2.91l-11.16-3Z"
          />
        </svg>
      </div> : null }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setModalData: (content, type, img) => {
      dispatch({
        type: 'SET_MODAL_DATA',
        payload: {
          content: content,
          type: type,
          img: img
        }
      })
    },
    showModal: () => dispatch({type: 'SWITCH_ON_MODAL'})
  }
}

export default connect(null, mapDispatchToProps)(Buttons);
