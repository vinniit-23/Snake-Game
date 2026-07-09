// main.js
// import { pause } from "./game";
import { STATES } from "./constant.js";
import "./input/input.js";
import "./input/dpad.js";
import "./input/swipe.js";
import {
  gameState,
  start,
  pause,
  resume,
  restart,
  onStateChangeListner,
} from "./game.js";
import { initRenderer } from "./rerender.js";

const GameButton = document.getElementById("Game-Button");
const stopGameButton = document.getElementById("Stop-Game-Button");
const dPad = document.querySelector("#d-pad");
const startAudio = new Audio("../Audios/game-start-6104.mp3");
const pauseAudio = new Audio("../Audios/boop-101710.mp3");
const resumeAudio = new Audio("../Audios/game-pause-sfx-417444.mp3")

// if(window)

function updateButtons() {
  switch (gameState) {
    case STATES.IDLE:
      GameButton.innerText = "Start";
      stopGameButton.innerText = "Stop";
      break;

    case STATES.RUNNING:
      GameButton.innerText = "Start";
      stopGameButton.innerText = "Stop";
      break;

    case STATES.PAUSED:
      GameButton.innerText = "Start";
      stopGameButton.innerText = "Resume";
      break;

    case STATES.GAMEOVER:
      GameButton.innerText = "Restart";
      stopGameButton.innerText = "Stop";
      break;
  }
}

onStateChangeListner(updateButtons);

initRenderer();

GameButton.addEventListener("click", () => {
  if (gameState !== STATES.IDLE && gameState !== STATES.GAMEOVER) return;
  if (gameState === STATES.IDLE) {
    startAudio.play();

    start();
    // updateButtons();
  } else if (gameState === STATES.GAMEOVER) {
    restart();
    // updateButtons();
  }
});

stopGameButton.addEventListener("click", () => {
  // if(gameState ==="Running")
  if (gameState === STATES.PAUSED) {
    stopGameButton.innerText = "Resume";
    resumeAudio.play();
    resume();
    // updateButtons();
  } else if (gameState === STATES.RUNNING) {
    stopGameButton.innerText = "Stop Game";
    pauseAudio.play();
    pause();
    // updateButtons();
  }
});
