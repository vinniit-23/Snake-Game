// constant.js
export const Grid_Size = 20;

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
  // BUG FIX: snap both dimensions down to the nearest multiple of
  // Grid_Size. Previously the canvas could end up with a width/height
  // that wasn't an exact multiple of the grid, which made Rows/Cols
  // fractional and could let food spawn partially off-grid or make
  // the wall boundary land mid-cell.
  canvas.width = Math.floor(cssWidth / Grid_Size) * Grid_Size;
  canvas.height = Math.floor(cssHeight / Grid_Size) * Grid_Size;
}
setCanvasSize();

const Width = canvas.width;
const Height = canvas.height;

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
