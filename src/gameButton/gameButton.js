import React from "react";
import "./gameButton.css";

function GameButton(props) {
  const clickGameButton = () => console.log(`${props.color} Button clicked!`);

  return (
    <button
      className={`button ${props.color} ${props.selected ? "active" : ""}`}
      id={props.color}
      onClick={clickGameButton}
      disabled={props.disable}
    ></button>
  );
}

export default GameButton;
