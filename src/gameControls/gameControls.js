import React from "react";
import Score from "./score/score";
import Difficulty from "./difficulty/difficulty";
import StartStop from "./start-stop/start-stop";
import "./gameControls.css";

function GameControls({ start_stop, startFlag, score } = this.props) {
  return (
    <div id="game-controls">
      <StartStop start_stop={start_stop} startFlag={startFlag} />
      <Difficulty />
      <Score score={score} />
    </div>
  );
}

export default GameControls;
