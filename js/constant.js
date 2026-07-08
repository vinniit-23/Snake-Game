// constant.js
export let Grid_Size = 20;
// console.log(Grid_Size);

export const STATES = {
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  GAMEOVER: "gameover",
};

export const INITIAL_SPEED = 200;
export const MIN_SPEED = 60;
export const SPEED_INCREMENT = 20;
export const LEVEL_UP_FOOD = 5;

const canvas = document.getElementById("Canvas");

function setCanvasSize() {
  const cssWidth = canvas.clientWidth || 900;
  const cssHeight = Math.round(cssWidth * 0.6);
  canvas.width = Math.floor(cssWidth / Grid_Size) * Grid_Size;
  canvas.height = Math.floor(cssHeight / Grid_Size) * Grid_Size;
}
setCanvasSize();

const Width = canvas.width;
const Height = canvas.height;

if (canvas.width <= 350 && canvas.height <= 200) {
  Grid_Size = 15;
}

// console.log(Grid_Size);

export function getCanvasWidth() {
  return canvas.width;
}

export function getCanvasHeight() {
  return canvas.height;
}

// console.log(Width);
// console.log(Height);

// BUG FIX: use Math.floor so Rows/Cols are always whole numbers.
const Rows = Math.floor(Height / Grid_Size);
const Cols = Math.floor(Width / Grid_Size);

export function getRows() {
  return canvas.height / Grid_Size;
}

export function getCols() {
  return canvas.width / Grid_Size;
}

export const Colors = ["Red", "white", "yellow", "green", "blue"];
