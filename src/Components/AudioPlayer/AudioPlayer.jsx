import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0
    };
    this.audioRef = React.createRef();
    this.timelineRef = React.createRef();
    this.sendIndex = props.sendIndex;
  }

  componentDidUpdate() {
    if (
      this.props.i !== this.props.playingIndex ||
      this.props.playingIndex == null
    ) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.play();
    }
  }

  render() {
    return (
      <div className="audio-player">
        <div className="audio-player-top">
          <div
            className="audio-player-description-and-play"
            style={{
              backgroundColor:
                this.props.i == this.props.playingIndex ? "#f25a4b" : null
            }}
            onClick={() => {
              if (this.props.i == this.props.playingIndex) {
                this.audioRef.current.pause();
                this.sendIndex(null);
              } else {
               

                this.audioRef.current.play();
                this.sendIndex(this.props.i);
              }
            }}
          >
            <audio
              onLoadedMetadata={() =>
                this.setState({ duration: this.audioRef.current.duration })
              }
              onTimeUpdate={() =>
                this.setState({
                  currentTime: this.audioRef.current.currentTime
                })
              }
              preload="metadata"
              ref={this.audioRef}
              src={`//static.prsa.pl/${this.props.content.source}.file`}
            />
          </div>
          <div className="audio-player-top-right">
            <h1>{this.props.content.title}</h1>
                <p>{this.props.content.text}</p>           
            
          </div>
        </div>
        <div className="audio-player-bottom">
          <div
            className="audio-timeline"
            ref={this.timelineRef}
            onClick={e => {
              let percent =
                ((e.clientX -
                  this.timelineRef.current.getBoundingClientRect().left) /
                  this.timelineRef.current.getBoundingClientRect().width) *
                100;
              let newTime = (this.state.duration * percent) / 100;
              this.setState({ currentTime: newTime });
              this.audioRef.current.currentTime = newTime;
            }}
          >
            <div className="audio-timeline-active" ref={this.timelineRef}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "#f25a4b",
                  width: this.state.currentTime
                    ? (this.state.currentTime / this.state.duration) * 100 + "%"
                    : "0%"
                }}
              />
            </div>
            <span className="audio_currentTime">
              {Math.floor(this.state.currentTime / 60) +
                ":" +
                (Math.floor(this.state.currentTime % 60) > 9 ? "" : "0") +
                Math.floor(this.state.currentTime % 60)}{" "}
            </span>
            <span className="audio_duration">
              {this.audioRef.current
                ? Math.floor(this.state.duration / 60) +
                  ":" +
                  (Math.floor(this.state.duration % 60) > 9 ? "" : "0") +
                  Math.floor(this.state.duration % 60)
                : "0:00"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
