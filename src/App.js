import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 10,
      clip: "",
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", (e) => {
      const key = e.key.toUpperCase();
      if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(key)) {
        this.handleKeypress(key);
      }
    });
  }

  handleVolumeChange(e) {
    this.setState({
      volume: e.target.value,
    });
  }
  handleKeypress(key) {
    const audio = document.getElementById(key);
    audio.volume = this.state.volume / 100;
    audio.currentTime = 0;
    audio.play();
    this.setState({
      clip: audio.parentElement.id,
    });
    audio.parentElement.classList.add('triggered');
    audio.parentElement.classList.remove('triggered');
    void audio.parentElement.offsetWidth;
    audio.parentElement.classList.add('triggered');
  }

  render() {
    return (
      <div className="container bg-dark text-bg-dark text-center">
        <h1>Drum Machine</h1>
        <div className="divider" />
        <div id="drum-machine" className="row bg-secondary p-3">
          <div id="drums" className="col-8">
            <div className="row">
              <div className="col-4">
                <div
                  id="heater1"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("Q")}
                >
                  Q
                  <audio
                    id="Q"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="heater2"
                  className="drum-pad  border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("W")}
                >
                  W
                  <audio
                    id="W"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="heater3"
                  className="drum-pad  border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("E")}
                >
                  E
                  <audio
                    id="E"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  ></audio>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div
                  id="heater4"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("A")}
                >
                  A
                  <audio
                    id="A"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="clap"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("S")}
                >
                  S
                  <audio
                    id="S"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="open-hh"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("D")}
                >
                  D
                  <audio
                    id="D"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  ></audio>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div
                  id="kick-n-hat"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("Z")}
                >
                  Z
                  <audio
                    id="Z"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="kick"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("X")}
                >
                  X
                  <audio
                    id="X"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  ></audio>
                </div>
              </div>
              <div className="col-4">
                <div
                  id="closed-hh"
                  className="drum-pad border border-primary d-flex align-items-center justify-content-evenly"
                  onClick={() => this.handleKeypress("C")}
                >
                  C
                  <audio
                    id="C"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  ></audio>
                </div>
              </div>
            </div>
          </div>

          <div
            id="controls"
            className="col-4 d-flex align-items-center justify-content-evenly flex-column"
          >
            
            <div id="display" className="row p-3 bg-black">
              {this.state.clip}
            </div>
            <div id="volume" className="row range">
              <label htmlFor="volume-range">Volume</label>
              <input
                type="range"
                className="form-range"
                id="volume-range"
                value={this.state.volume}
                onChange={this.handleVolumeChange}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
