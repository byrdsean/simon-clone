import "./App.css";

const clickGameButton = () => console.log("Button clicked!");

function App() {
  return (
    <div id="gameboard">
      <div id="simon-game">
        <div id="button-group">
          <button
            className="button green"
            id="green"
            onClick={clickGameButton}
          ></button>
          <button className="button red" id="red"></button>
          <button className="button yellow" id="yellow"></button>
          <button className="button blue" id="blue"></button>
        </div>
        <div id="game-controls">
          <button id="start-stop" onClick={clickGameButton}>
            Start/Stop
          </button>
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
                  />
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
                  <input
                    type="radio"
                    name="difficultyGroup"
                    id="hard"
                    value="hard"
                  />
                  <label htmlFor="easy">Hard</label>
                </li>
              </ul>
            </div>
          </div>
          <div id="score">
            <div className="control-label">Score</div>
            <div className="control-group">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
