import React from "react";
import "./gameButton.css";

function GameButton(props) {
  const clickColorButton = () => {
    props.clickGameButton(props.color);
  };

  return (
    <button
      className={`button ${props.color} ${props.selected ? "active" : ""}`}
      id={props.color}
      onClick={clickColorButton}
      disabled={props.disable}
    ></button>
  );
}

export default GameButton;
