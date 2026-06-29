// rerender.js

import { Grid_Size } from "./constant.js";

export const canvas = document.getElementById("Canvas");
export const ctx = canvas.getContext("2d");

export const Height = canvas.height;
export const Width = canvas.width;

export function clearCanvas() {
  ctx.fillStyle = "#006992";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawFood(x, y, foodColor) {
  ctx.fillStyle = foodColor;
  ctx.fillRect(x, y, Grid_Size, Grid_Size);
}

export function drawSnake(snakeLength) {
  ctx.fillStyle = "black";
  for (let index = 0; index < snakeLength.length; index++) {
    const { x, y } = snakeLength[index];
    ctx.fillRect(x, y, Grid_Size, Grid_Size);
  }
}

export function drawScore(score) {
  ctx.fillStyle = "white";
  ctx.font = "24px Times New Roman ";
  ctx.fillText(`Score : ${score}`, 900, 50, 50);
}

export function drawGameOver() {
  ctx.fillStyle = "Black";
  ctx.font = "24px Times New Roman ";
  ctx.fillText(`Game Over!`, 400, 300, 400);
}
