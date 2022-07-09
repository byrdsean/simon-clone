import React from "react";
import "./gamePrompt.css";

function GamePrompt(props) {
  if (!props.startFlag) {
    return (
      <div id="playerTurn" className="startToPlay">
        <div>Press Start To Play!</div>
      </div>
    );
  }
  return (
    <div
      id="playerTurn"
      className={props.updatingColorsPerLevel ? "game" : "user"}
    >
      <div>{props.updatingColorsPerLevel ? "Game's Turn." : "Your Turn!"}</div>
    </div>
  );
}

export default GamePrompt;
