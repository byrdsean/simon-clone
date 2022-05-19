import "./App.css";
import GameButton from "../gameButton/gameButton";
import GameControls from "../gameControls/gameControls";

const colors = ["green", "red", "yellow", "blue"];

function App() {
  return (
    <div id="gameboard">
      <div id="simon-game">
        <div id="button-group">
          {colors.map((aColor) => (
            <GameButton key={aColor} color={aColor} />
          ))}
        </div>
        <GameControls />
      </div>
    </div>
  );
}

export default App;
