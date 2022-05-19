import React from "react";
import "./difficulty.css";

function Difficulty() {
  return (
    <div id="difficulty">
      <div className="control-label">Difficulty</div>
      <div className="control-group">
        <ul>
          <li>
            <input type="radio" name="difficultyGroup" id="easy" value="easy" />
            <label htmlFor="easy">Easy</label>
          </li>
          <li>
            <input
              type="radio"
              name="difficultyGroup"
              id="medium"
              value="medium"
            />
            <label htmlFor="medium">Medium</label>
          </li>
          <li>
            <input type="radio" name="difficultyGroup" id="hard" value="hard" />
            <label htmlFor="easy">Hard</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Difficulty;
