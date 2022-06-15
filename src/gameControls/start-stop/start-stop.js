import React from "react";
import "./start-stop.css";

function StartStop({ start_stop, startFlag } = this.props) {
  return (
    <button id="start-stop" onClick={start_stop}>
      {startFlag ? "End" : "Start"}
    </button>
  );
}

export default StartStop;
