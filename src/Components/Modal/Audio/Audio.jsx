import React, {useState, useEffect, useRef} from 'react'
import Textfield from "../../Textfield/Textfield";
import './Audio.scss';

const Audio = props => {
  const [playingAudio, setPlayingAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [durations, setDurations] = useState([]);
  const [maxTime, setMaxTime] = useState([]);

  const audioRef = [];
  let currentTimeArray = [];
//   let timeInterval;


    useEffect(()=>{audioRef.forEach((x)=>{
        audioRef.indexOf(x)!== playingAudio? x.pause() : x.play() 
    })});

    useEffect(()=>{
        for (let x of props.content[0].content.content) {
            currentTimeArray.push('0:00')
        }
        setDurations(currentTimeArray);
    },[])

    useEffect(()=>{
        let maxTimeTempArray = [];
        audioRef.forEach((x,i)=>{
            maxTimeTempArray[i] = x.duration;
        })
        setMaxTime(maxTimeTempArray);
    })


      return(
        <div className="ps__modalwindow__content">
        <div className="ps__modalwindow__content__audiolist">
          {props.content[0].content.content.map((e, index) => {
            return (
                <div className="audio-player" key={index}>
                <div className="audio-player-top">
                  <div className="audio-player-description-and-play style=" 
                        onClick={()=>{
                            
                            setPlayingAudio(index);
                            setIsPlaying(true);
                            // clearInterval(timeInterval);
                            // timeInterval = setInterval((audioRef)=>{
                            //     currentTimeArray[index] = audioRef[index];
                            //     setDurations(currentTimeArray);
                            //     console.log(audioRef);
                            // },1000)
                            if (isPlaying && index == playingAudio)  {
                                audioRef[index].pause();
                                setIsPlaying(false);
                                setPlayingAudio(null);
                            } 
                        }
                    }
                        style={{backgroundColor: playingAudio == index? 'red': null}}
                        >
                        
                    
                    <audio preload="metadata" ref={ref => audioRef[index] = ref} src={`//static.prsa.pl/${e.source}.mp3`}>
                    </audio>
                  </div>
                  <div className="audio-player-top-right">
                    <h1>
                      {e.title}
                    </h1>
                    <p>
                        {e.text}
                    </p>
                  </div>
                </div>
                <div className="audio-player-bottom">
                  <div className="audio-timeline">
                    <div className="audio-timeline-active">

                    </div>
                    <span className="audio_currentTime">
                      {durations[index]}
                    </span>
                    <span className="audio_duration">
                      {Math.floor(maxTime[index] / 60) +":"+(Math.floor(maxTime[index] % 60) > 9 ? "" : "0") +Math.floor(maxTime[index] % 60)|| '0:00'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    )
}

export default Audio;

