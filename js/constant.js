import { initRenderer } from "./rerender.js";

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

// let gridCanvas =

const canvas = document.getElementById("Canvas");
export const gridCanvas = document.getElementById("GridCanvas");

export function setCanvasSize(canvas, gridCanvas) {
  const cssWidth = canvas.clientWidth || 900;
  const cssHeight = Math.round(cssWidth * 0.6);
  canvas.width = Math.floor(cssWidth / Grid_Size) * Grid_Size;
  canvas.height = Math.floor(cssHeight / Grid_Size) * Grid_Size;
  gridCanvas.width = Math.floor(cssWidth / Grid_Size) * Grid_Size;
  gridCanvas.height = Math.floor(cssHeight / Grid_Size) * Grid_Size;
}
// window.addEventListener("resize", () => {
//   setCanvasSize(canvas, gridCanvas);
// });
setCanvasSize(canvas, gridCanvas);

// const Width = canvas.width;
// const Height = canvas.height;
// const gridWidth = gridCanvas.width;
// const gridHeight = gridCanvas.height;

if (gridCanvas.width <= 350 && gridCanvas.height <= 200) {
  Grid_Size = 15;
}

// console.log(Grid_Size);

export function getCanvasWidth() {
  return canvas.width;
}

export function getCanvasHeight() {
  return canvas.height;
}

export function getGridCanvasWidth() {
  return gridCanvas.width;
}

export function getGridCanvasHeight() {
  return gridCanvas.height;
}

// console.log(Width);
// console.log(Height);

// BUG FIX: use Math.floor so Rows/Cols are always whole numbers.
// const Rows = Math.floor(Height / Grid_Size);
// const Cols = Math.floor(Width / Grid_Size);

export function getRows() {
  return gridCanvas.height / Grid_Size;
}

export function getCols() {
  return gridCanvas.width / Grid_Size;
}

export const Colors = [
  "#FF3B30", // Apple Red
  //"#FFD60A", // Banana Yellow
  //"#FF2D95", // Pink Berry
  //"#FF9500", // Orange
  //"#AF52DE", // Purple Grape
  "#00E5FF", // Cyan Crystal
  "#64DD17", //
];
