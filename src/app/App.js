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
          <div id="control-panel">
            <button id="startStop">Start/Stop</button>
            <div id="difficulty">Medium</div>
            <div id="score">Score: 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
