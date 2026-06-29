document.addEventListener("DOMContentLoaded", () => {
  const Canvas = document.getElementById("SnakeCanvas");
  const ctx = Canvas.getContext("2d");

  Canvas.width = 400;
  Canvas.height = 600;

  //   ctx.fillRect(10, 10, 150, 100);

  //   ctx.beginPath();
  //   ctx.moveTo(100, 150);
  //   ctx.lineTo(145, 175);
  //   ctx.lineTo(145, 125);
  // //   ctx.lineTo(175, 150);
  //   ctx.closePath();
  //   ctx.stroke();
  //   ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.arc(200, 300, 100, 0, Math.PI * 2, true);
  ctx.moveTo(170, 250);
  ctx.arc(160, 250, 10, 0, Math.PI * 2, true);
  ctx.moveTo(250, 250);
  ctx.arc(240, 250, 10, 0, Math.PI * 2, true);
  ctx.moveTo(250, 300);
  ctx.arc(200, 300, 50, 0, Math.PI, false);
  // ctx.fill();
  ctx.stroke();

  // ctx.beginPath();
  // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  // ctx.moveTo(110, 75);
  // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  // ctx.moveTo(65, 65);
  // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  // ctx.moveTo(95, 65);
  // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  // ctx.stroke();

  function generateSnake() {
    let xAxis, yAxis;
    xAxis = Math.floor(Math.random() * (cols - 2)) * gridSize;
    yAxis = Math.floor(Math.random() * (rows - 2)) * gridSize;
    return { x: xAxis, y: yAxis };
  }
  let snakeHead = generateSnake();
  // // console.log(generatedSnake);
  // console.log(snakeLength.push(snakeHead));
  // console.log(snakeLength);
  // console.log(snakeLength[0].x);
  // console.log(snakeLength[0].y);
  snakeLength.push(snakeHead);
  let snakeBody = { x: snakeLength[0].x + gridSize, y: snakeLength[0].y };
  console.log(snakeLength.push(snakeBody));
  let snaketail = { x: snakeLength[1].x + gridSize, y: snakeLength[1].y };
  console.log(snakeLength.push(snaketail));
  ctx.fillStyle = "#171123";

  // function checkCollision(snakeLengthArray) {

  //   let x = snakeLengthArray[0].x;
  //   let y = snakeLengthArray[0].y;
  //   if (x <= 0 || x >= canvas.width || y <= 0 || y >= canvas.height) {
  //     alert("Restart the game");
  //   }
  //   // for (let index = 0; index < snakeLengthArray.length; index++) {
  //   //   const element = snakeLengthArray[index];
  //   //   if (element.x === x && element.y === y) {
  //   //     alert("Restart the game");
  //   //   }
  //   // }
  // }

  // function foodCollision(snakeLengthArray) {
  //   if (
  //     snakeFood.x === snakeLengthArray[0].x &&
  //     snakeFood.y === snakeLengthArray[0].y
  //   ) {
  //     // let snakeTail = snakeLengthArray[snakeLengthArray.length - 1];
  //     let snakeTail = snakeLengthArray.length - 1;
  //     console.log(snakeTail);

  //     // let newsnakeTail = { x: snakeTail.x + gridSize, y: snakeTail.y };
  //     // snakeLengthArray.push(newsnakeTail);
  //     // console.log(snakeLengthArray);
  //   }
  // }

  // function snakeMovement(snakeLengthArray) {
  //   let snakeHead = snakeLengthArray[0];
  //   let newHead;
  //   if (snakeHead.x <= canvas.width && snakeHead.y <= canvas.height) {
  //     // foodCollision(snakeLengthArray);
  //     // checkCollision(snakeLengthArray);
  //     checkCollision();
  //     newHead = { x: snakeHead.x + gridSize, y: snakeHead.y };
  //     // console.log(snakeLengthArray);
  //     // foodEaten(snakeLengthArray);
  //     return newHead;
  //   }
  //   // else {
  //   //   checkCollision(snakeLengthArray);
  //   //   return (newHead = { x: 0, y: snakeHead.y });
  //   // }
  // }
});




// game.js
import { checkCollision, checkFood } from "./collision.js";
import { generateFood, randomFoodColor } from "./food.js";
import { getDirections } from "./input.js";
import {
  clearCanvas,
  drawFood,
  drawGameOver,
  drawScore,
  drawSnake,
} from "./rerender.js";
import { createSnake, getSnake, growSnake, moveSnake,getHead } from "./snake.js";

export let Score = 0;
let snakeLength = getSnake();
let gameState;
let speed;
let foodColor = randomFoodColor();

let snakeFood = generateFood(snakeLength);

const GameButton = document.getElementById("Game-Button");

startGame.addEventListener("click", start);

function start() {
  myInterval = setInterval(gameLoop, 500);
}

function pause() {}

function resume() {}

function restart() {
  createSnake();
  Score = 0;
  gameLoop();
}

export function gameLoop() {
  let direction = getDirections();
  clearCanvas();
  createSnake();
  const head = getHead();
  let newHead = { x: head.x + direction.dx, y: head.y + direction.dy };
  if (checkCollision(head, snakeLength)) {
    drawGameOver();
  } else {
    drawSnake(snakeLength);
    drawScore(Score);
    moveSnake(direction.dx, direction.dy);
    if (checkFood(head, snakeFood)) {
      drawFood(snakeFood.x, snakeFood.y, foodColor);
      growSnake(direction.dx, direction.dy);
    } else {
      snakeLength.pop();
    }
  }
}


// main.js
function updateButtons() {
  switch (gameState) {
    case STATES.IDLE:
      GameButton.innerText = "Start Game";
      stopGameButton.innerText = "Stop Game";
      break;

    case STATES.RUNNING:
      GameButton.innerText = "Start Game";
      stopGameButton.innerText = "Stop Game";
      break;

    case STATES.PAUSED:
      GameButton.innerText = "Start Game";
      stopGameButton.innerText = "Resume";
      break;

    case STATES.GAMEOVER:
      GameButton.innerText = "Restart";
      stopGameButton.innerText = "Stop Game";
      break;
  }
}

onStateChangeListner(updateButtons);

// constant.js
export const STATES = {
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  GAMEOVER: "gameover",
};


//game.js
let onStateChange = null; //updateButton

export function onStateChangeListner(callback) {
  onStateChange = callback; // callback = updateButton
}

function setGameState(state) {
  gameState = state;

  if (onStateChange) {
    // onStateChange holds function and a function is always truthy
    onStateChange(); // calling onstatechange function which holds updatebutton function so it means when my state change it will call updateButton function which will eventually changes the text inside the button.
  }
}


