import React, { useEffect } from "react";
import "./difficulty.css";

const difficultyLevels = [
  { label: "Slow", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Fast", value: "hard" },
];

function Difficulty(props) {
  const setNewDifficultySetting = (e) => {
    props.setDifficulty(e.target.value);
  };

  useEffect(() => {
    document.getElementById("easy").click();
  }, []);

  return (
    <div id="difficulty">
      <div className="control-label">Speed</div>
      <div className="control-group">
        <ul>
          {difficultyLevels &&
            difficultyLevels.map((diff) => (
              <li>
                <input
                  type="radio"
                  name="difficultyGroup"
                  id={diff.value}
                  value={diff.value}
                  onClick={setNewDifficultySetting}
                  disabled={props.disable}
                />
                <label htmlFor={diff.value}>{diff.label}</label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Difficulty;
