import React, { useEffect } from "react";
import "./difficulty.css";

function Difficulty(props) {
  const setNewDifficultySetting = (e) => {
    props.setDifficulty(e.target.value);
  };

  useEffect(() => {
    document.getElementById("easy").click();
  }, []);

  return (
    <div id="difficulty">
      <div className="control-label">Difficulty</div>
      <div className="control-group">
        <ul>
          <li>
            <input
              type="radio"
              name="difficultyGroup"
              id="easy"
              value="easy"
              onClick={setNewDifficultySetting}
              disabled={props.disable}
            />
            <label htmlFor="easy">Easy</label>
          </li>
          <li>
            <input
              type="radio"
              name="difficultyGroup"
              id="medium"
              value="medium"
              onClick={setNewDifficultySetting}
              disabled={props.disable}
            />
            <label htmlFor="medium">Medium</label>
          </li>
          <li>
            <input
              type="radio"
              name="difficultyGroup"
              id="hard"
              value="hard"
              onClick={setNewDifficultySetting}
              disabled={props.disable}
            />
            <label htmlFor="easy">Hard</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Difficulty;
