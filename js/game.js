// game.js
import { checkCollision, checkFood } from "./collision.js";
import {
  Grid_Size,
  STATES,
  INITIAL_SPEED,
  MIN_SPEED,
  SPEED_INCREMENT,
  LEVEL_UP_FOOD,
} from "./constant.js";
import { generateFood, getFood, randomFoodColor } from "./food.js";
import { getDirections, resetDirections } from "./input/direction.js";
import {
  clearCanvas,
  drawFood,
  drawGameOver,
  drawSnake,
  drawGrid,
} from "./rerender.js";
import {
  createSnake,
  getSnake,
  growSnake,
  moveSnake,
  getHead,
} from "./snake.js";
import { drawLevel, drawScore, updateHighScore } from "./ui.js";

export let Score = 0;
createSnake();
let snakeLength = getSnake();
export let gameState = STATES.IDLE;
let speed = INITIAL_SPEED;
let foodColor = randomFoodColor();
let snakeFood = snakeLength.length > 0 ? getFood(snakeLength) : null;
let myInterval = null;

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

export function start() {
  // console.log(snakeLength);
  // console.log("start game function is running");
  // gameState = STATES.RUNNING;
  setGameState(STATES.RUNNING);
  myInterval = setInterval(gameLoop, speed);
}

export function updateSpeed() {
  let level = Math.floor(Score / LEVEL_UP_FOOD) + 1;
  drawLevel(level);
  speed = Math.max(MIN_SPEED, INITIAL_SPEED - level * SPEED_INCREMENT);

  clearInterval(myInterval);
  myInterval = setInterval(gameLoop, speed);
}

export function pause() {
  // gameState = STATES.PAUSED;
  setGameState(STATES.PAUSED);

  clearInterval(myInterval);
}

export function resume() {
  // gameState = STATES.RUNNING;
  setGameState(STATES.RUNNING);

  myInterval = setInterval(gameLoop, speed);
}

export function restart() {
  clearInterval(myInterval);

  resetDirections();

  createSnake();
  snakeLength = getSnake();

  Score = 0;
  drawScore(0);
  drawLevel(0);

  foodColor = randomFoodColor();
  snakeFood = getFood(snakeLength);

  // gameState = STATES.RUNNING;

  start();
  // myInterval = setInterval(gameLoop, 200);
}

console.log("Snake food x " + snakeFood.x + " y " + snakeFood.y);
console.log("food color" + foodColor);

export function gameLoop() {
  clearCanvas();
  drawGrid(Grid_Size, Grid_Size, "rgba(0,255,90,.04)");
  let direction = getDirections();
  moveSnake(direction.dx, direction.dy);
  const head = getHead();
  if (checkCollision(head, snakeLength)) {
    clearInterval(myInterval);
    // gameState = STATES.GAMEOVER;
    setGameState(STATES.GAMEOVER);
    clearCanvas();
    drawGrid(Grid_Size, Grid_Size, "rgba(0, 255, 0, 0.07)");
    drawGameOver();
    return;
  }
  if (checkFood(head, snakeFood)) {
    snakeFood = getFood(snakeLength);
    foodColor = randomFoodColor();
    // console.log(
    //   "Inside checkFood Snake food x " + snakeFood.x + " y " + snakeFood.y,
    // );
    // console.log("Inside checkFood food color" + foodColor);
    growSnake(direction.dx, direction.dy);
    // drawFood(snakeFood.x, snakeFood.y, foodColor);
    Score += 1;
    drawScore(Score);
    updateHighScore(Score);
    updateSpeed();
  }
  // else {
  // snakeLength.pop();
  // }
  // else {
  drawSnake(snakeLength);
  // console.log("Snake food x " + snakeFood.x + " y " + snakeFood.y);
  // console.log("food color" + foodColor);
  drawFood(snakeFood.x, snakeFood.y, foodColor);

  // }
}
