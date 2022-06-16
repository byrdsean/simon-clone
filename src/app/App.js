//https://eight-bites.blog/en/2021/05/setinterval-setstate/

import "./App.css";
import GameButton from "../gameButton/gameButton";
import GameControls from "../gameControls/gameControls";
import { useEffect, useState } from "react";

const colors = ["green", "red", "yellow", "blue"];

function App() {
  const [startFlag, setStartFlag] = useState(false);
  const [score, setScore] = useState(0);

  const [colorsPerLevel, setColorsPerLevel] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [updatingColorsPerLevel, setUpdatingColorsPerLevel] = useState(false);
  const [hightlightDuration, setHightlightDuration] = useState(1000);

  const updateColorList = () => {
    //Add a new color to the list of colors per level
    let nextColor = colors[Math.floor(Math.random() * colors.length)];
    setColorsPerLevel([...colorsPerLevel, nextColor]);
  };

  const startGame = () => {
    updateColorList();
  };

  const endGame = () => {
    // stopColorListUpdate();
  };

  const start_stop = () => {
    let newFlagValue = !startFlag;
    setStartFlag(newFlagValue);
    if (newFlagValue) {
      startGame();
    } else {
      endGame();
    }
  };

  //useEffect methods
  useEffect(() => {}, [startFlag]);

  useEffect(() => {
    let timeoutHandle = null;
    if (selectedColor !== null && 0 < selectedColor.length) {
      let duration = Math.floor(hightlightDuration / 2.0);
      timeoutHandle = setTimeout(() => {
        setSelectedColor("");
      }, duration);
    }

    return () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [selectedColor]);

  useEffect(() => {
    let intervalHandle = null;
    if (0 < colorsPerLevel.length) {
      setUpdatingColorsPerLevel(true);
      let i = 0;
      intervalHandle = setInterval(() => {
        if (i === colorsPerLevel.length && intervalHandle) {
          console.log("Ending...");
          setSelectedColor("");
          setUpdatingColorsPerLevel(false);
          clearInterval(intervalHandle);
        } else {
          let displayColor = colorsPerLevel[i++];
          console.log(displayColor);
          setSelectedColor(displayColor);
        }
      }, hightlightDuration);
    }

    //Make sure to clear interval
    return () => {
      if (intervalHandle) {
        setUpdatingColorsPerLevel(false);
        clearInterval(intervalHandle);
      }
    };
  }, [colorsPerLevel]);

  return (
    <div id="gameboard">
      <div id="simon-game">
        <div id="button-group">
          {colorsPerLevel.join(", ")}
          {colors.map((aColor) => (
            <GameButton
              key={aColor}
              color={aColor}
              selected={aColor === selectedColor}
              disable={updatingColorsPerLevel}
            />
          ))}
        </div>
        <GameControls
          start_stop={start_stop}
          startFlag={startFlag}
          score={score}
        />
      </div>
    </div>
  );
}

export default App;
