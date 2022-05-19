import React from "react";
import "./gameButton.css";

const clickGameButton = () => console.log("Button clicked!");

function GameButton(props) {
  return (
    <button
      className={`button ${props.color}`}
      id={props.color}
      onClick={clickGameButton}
    ></button>
  );
}

export default GameButton;
