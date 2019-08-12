import React, { useState, useEffect } from "react";
import "./Audio.scss";
import AudioPlayer from '../../AudioPlayer/AudioPlayer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Audio = (props) => {

 const [playingIndex, setPlayingIndex] = useState(null);
 
 const sendIndex = (playingIndex) => {
    setPlayingIndex(playingIndex)
} 

  return (
    <div className="ps__modalwindow__content">
      <div className="ps__modalwindow__content__audiolist" style={{justifyContent: props.content[0].content.content.length > 1 ? null:'center'}}>

        {props.content[0].content.content.map((e, index) => {
          return (<AudioPlayer 
            content={props.content[0].content.content[index]}
            i = {index}
            sendIndex = {sendIndex}
            playingIndex = {playingIndex}
            ></AudioPlayer>);
        })}
      </div>
    </div>
  );
};

export default Audio;
