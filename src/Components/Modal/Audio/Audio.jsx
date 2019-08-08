import React, { useState, useEffect } from "react";
import "./Audio.scss";

const Audio = props => {
  const [playingAudio, setPlayingAudio] = useState(null);
  const [durations, setDurations] = useState([]);
  const [maxTime, setMaxTime] = useState([]);
  const [timeInterval, setTimeInterval] = useState();
  

  const audioRef = [];

  useEffect(() => {
    audioRef.forEach(x => {
      audioRef.indexOf(x) !== playingAudio ? x.pause() : x.play();
    });
  });


  useEffect(() => {
    let currentTimeArray = [];
    if (durations.length == 0) {
      audioRef.forEach((x, i) => {
        currentTimeArray[i] = "0:00";
      });
      setDurations(currentTimeArray);
    }
  }, [durations, audioRef]);

  useEffect(() => {
    let maxTimeTempArray = [];
    audioRef.forEach((x, i) => {
      maxTimeTempArray[i] = x.duration;
    });
    setMaxTime(maxTimeTempArray);
  }, [maxTime, audioRef]);
  

 

  return (
    <div className="ps__modalwindow__content">
      <div className="ps__modalwindow__content__audiolist">
        {props.content[0].content.content.map((e, index) => {
          return (
            <div className="audio-player" key={index}>
              <div className="audio-player-top">
                <div
                  className="audio-player-description-and-play style="
                  onClick={() => {
                    clearInterval(timeInterval);
                    setPlayingAudio(index);
                    console.log('w środku onclicka:', audioRef);
                    
                    const newInterval = setInterval(()=>{
                      let newTimeArray = durations;
                      newTimeArray.splice(index, 1);
                      newTimeArray.splice(index, 0, "1:00");
                      setDurations(newTimeArray);
                       console.log('w środku intervala:', audioRef);
                       console.log(durations);

                    }, 1000);

                    setTimeInterval(newInterval);
                    if (index == playingAudio) {
                      audioRef[index].pause();
                      setPlayingAudio(null);
                      clearInterval(newInterval);
                    }
                  }}
                  style={{
                    backgroundColor: playingAudio == index ? "red" : null
                  }}
                >
                  <audio
                    preload="metadata"
                    ref={ref => (audioRef[index] = ref)}
                    src={`//static.prsa.pl/${e.source}.mp3`}
                  />
                </div>
                <div className="audio-player-top-right">
                  <h1>{e.title}</h1>
                  <p>{e.text}</p>
                </div>
              </div>
              <div className="audio-player-bottom">
                <div className="audio-timeline">
                  <div className="audio-timeline-active" />
                  <span className="audio_currentTime">{durations[index]}</span>
                  <span className="audio_duration">
                    {Math.floor(maxTime[index] / 60) +
                      ":" +
                      (Math.floor(maxTime[index] % 60) > 9 ? "" : "0") +
                      Math.floor(maxTime[index] % 60) || "0:00"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Audio;
