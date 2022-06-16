//https://eight-bites.blog/en/2021/05/setinterval-setstate/

import "./App.css";
import GameButton from "../gameButton/gameButton";
import GameControls from "../gameControls/gameControls";
import { useEffect, useState } from "react";

const baseHighlightDuration = 1000;
const colors = ["green", "red", "yellow", "blue"];
const difficulty = {
  easy: 1,
  medium: 0.5,
  hard: 0.25,
};

function App() {
  const [startFlag, setStartFlag] = useState(false);
  const [score, setScore] = useState(0);

  //List of colors for each level
  const [colorsPerLevel, setColorsPerLevel] = useState([]);

  //Currently selected color when game highlights buttons to user
  const [selectedColor, setSelectedColor] = useState("");

  //Flag to know the game is updating the colors for a level
  const [updatingColorsPerLevel, setUpdatingColorsPerLevel] = useState(false);

  //Length of time to highlight a button
  const [hightlightDuration, setHightlightDuration] = useState(
    baseHighlightDuration
  );

  //Index of the current color to check against user input
  const [checkColorIndex, setCheckColorIndex] = useState(0);
  //--------------------------------------------------

  const setDifficulty = (setting) => {
    let newDifficulty = difficulty.hasOwnProperty(setting) ? setting : "easy";
    setHightlightDuration(baseHighlightDuration * difficulty[newDifficulty]);
  };

  const clickGameButton = (color) => {
    if (!updatingColorsPerLevel) {
      console.log(`${color} Button clicked!`);

      //When the user clicks a button, verify it against "colorsPerLevel".
      //Increment score each time user correctly matches button in a sequence.
      //If user successfully inputs correct button sequence, new colors are updated.
      //Else, game ends.
      if (color === colorsPerLevel[checkColorIndex]) {
        setScore((state) => state + 1);
        setCheckColorIndex((state) => state + 1);
      } else {
        endGame();
      }
    }
  };

  useEffect(() => {
    if (0 < checkColorIndex && colorsPerLevel.length <= checkColorIndex) {
      //Wait the length of "hightlightDuration" before updating color list
      setTimeout(() => {
        //User successfully matched all colors for this level.
        //Update the color list, and reset the index to check the color
        setCheckColorIndex(0);
        updateColorList();
      }, hightlightDuration);
    }
  }, [checkColorIndex]);

  const updateColorList = () => {
    //Add a new color to the list of colors per level
    let nextColor = colors[Math.floor(Math.random() * colors.length)];
    setColorsPerLevel([...colorsPerLevel, nextColor]);
  };

  const startGame = () => {
    updateColorList();
  };

  const endGame = () => {
    console.log("GAME OVER!");

    //Reset the state values
    setStartFlag(false);
    setColorsPerLevel([]);
    setSelectedColor("");
    setUpdatingColorsPerLevel(false);
    setCheckColorIndex(0);
    setScore(0);
    setHightlightDuration(baseHighlightDuration);
  };

  const start_stop = () => {
    setStartFlag((state) => !state);
  };
  //--------------------------------------------------

  //Start / End the game
  useEffect(() => {
    if (startFlag) {
      startGame();
    } else {
      endGame();
    }
  }, [startFlag]);

  //When the game selects a button, de-select the button after a duration.
  //This is to give the effect of a button click to the user.
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

  //Highlight each button corresponding to the colors for this level.
  //Once complete, set flag to know if is the user's turn
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
  //--------------------------------------------------

  return (
    <div id="gameboard">
      <div id="simon-game">
        <div id="button-group">
          <p>{colorsPerLevel.join(", ")}</p>
          <p>{`Current turn: ${!updatingColorsPerLevel ? "User" : "Game"}`}</p>
          {colors.map((aColor) => (
            <GameButton
              key={aColor}
              color={aColor}
              selected={aColor === selectedColor}
              disable={updatingColorsPerLevel}
              clickGameButton={clickGameButton}
            />
          ))}
        </div>
        <GameControls
          start_stop={start_stop}
          startFlag={startFlag}
          score={score}
          setDifficulty={setDifficulty}
          disable={updatingColorsPerLevel}
        />
      </div>
    </div>
  );
}

export default App;
