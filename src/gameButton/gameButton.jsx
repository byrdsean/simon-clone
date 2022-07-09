import React from "react";
import "./gameButton.css";

function GameButton(props) {
  const clickColorButton = () => {
    props.clickGameButton(props.color);
  };

  return (
    <button
      className={`button ${props.color} ${props.selected ? "active" : ""} ${
        !props.gameStart ? "opaque" : ""
      }`}
      id={props.color}
      onClick={clickColorButton}
      disabled={props.disable || !props.gameStart}
    ></button>
  );
}

export default GameButton;
