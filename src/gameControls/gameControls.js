import React from "react";
import Score from "./score/score";
import Difficulty from "./difficulty/difficulty";
import StartStop from "./start-stop/start-stop";
import "./gameControls.css";

function GameControls() {
  return (
    <div id="game-controls">
      <StartStop />
      <Difficulty />
      <Score />
    </div>
  );
}

export default GameControls;
