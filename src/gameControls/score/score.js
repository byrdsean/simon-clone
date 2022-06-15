import React from "react";
import "./score.css";

function Score({ score } = this.props) {
  return (
    <div id="score">
      <div className="control-label">Score</div>
      <div className="control-group">{score}</div>
    </div>
  );
}

export default Score;
