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

  const parseCurrentTime = (val, time) => {
    return `${(
      parseInt(val.replace(":", ".")) +
      Math.floor(time / 60) +
      (time % 60) / 100
    ).toFixed(2)}`.replace(".", ":");
  };

  return (
    <div className="ps__modalwindow__content">
      <div className="ps__modalwindow__content__audiolist">
        {props.content[0].content.content.map((e, index) => {
          return (
            <div className="audio-player" key={index}>
              <div className="audio-player-top">
                <div
                  className="audio-player-description-and-play"
                  onClick={() => {
                    clearInterval(timeInterval);
                    setPlayingAudio(index);
                    let time = Math.floor(audioRef[index].currentTime);
                    let addedTime = 0;
                    const newInterval = setInterval(() => {
                      let newTimeArray = durations;
                      addedTime++;

                      let finalTime = time + addedTime;

                      newTimeArray.splice(index, 1);
                      newTimeArray.splice(
                        index,
                        0,
                        parseCurrentTime(durations[index], finalTime)
                      );

                      setDurations(newTimeArray);
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
                  <div className="audio-timeline-active">
                    <div
                      style={{
                        height: "100%",
                        backgroundColor: "red",
                        width: `${
                          durations[index] !== undefined
                            ? (
                                Number(
                                  durations[index].replace(":", ".") * 100
                                ) / maxTime[index]
                              ).toFixed(2) *
                                100 +
                              "%"
                            : "0%"
                        }`
                      }}
                    />
                    {}
                  </div>
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
