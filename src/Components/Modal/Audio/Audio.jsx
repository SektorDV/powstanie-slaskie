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
const settings = {
  dots: true,
  rows: 4,
  slidesPerRow: 1,
  arrows: false,
  customPaging: i => (
    <div
      style={{
        width: '0.4rem',
        height: '0.4rem',
        backgroundColor: '#899eaa',
        borderRadius: '50%',
        margin: '0.4rem 0',
        position: 'relative',
        zIndex: '2',
        transition: '0.5s',
      }}
>    
      
    </div>
  )
  
    };



  return (
    <div className="ps__modalwindow__content">
      <div className="ps__modalwindow__content__audiolist" style={{
        display: props.content[0].content.content.length > 4 ? 'block':'flex', 
        marginTop: props.content[0].content.content.length > 4 ? '5%':'2%'}}>
        { props.content[0].content.content.length > 4? 
          <Slider {...settings}>
            {props.content[0].content.content.map((e, index) => {
            return (<AudioPlayer 
            content={props.content[0].content.content[index]}
            i = {index}
            style={{width: "20px"}}
            sendIndex = {sendIndex}
            playingIndex = {playingIndex}
            ></AudioPlayer>)
          })}
          </Slider>
        
        :
          props.content[0].content.content.map((e, index) => {
            return (<AudioPlayer 
            content={props.content[0].content.content[index]}
            i = {index}
            sendIndex = {sendIndex}
            playingIndex = {playingIndex}
            ></AudioPlayer>);
        })
        }
          
       
      </div>
    </div>
  );
      }

export default Audio;
