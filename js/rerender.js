// rerender.js

import { Grid_Size } from "./constant.js";
// import { Width, Height } from "./constant.js";
export const canvas = document.getElementById("Canvas");
export const ctx = canvas.getContext("2d");



export function clearCanvas() {
  ctx.fillStyle = "#021407";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawFood(x, y, foodColor) {
  ctx.fillStyle = "#FF0040";
  ctx.shadowColor = "#FF4040";
  ctx.shadowBlur = 14;
  // ctx.fillRect(x, y, Grid_Size, Grid_Size);
  ctx.beginPath();

  ctx.roundRect(
    x * Grid_Size + 1,
    y * Grid_Size + 1,
    Grid_Size - 2,
    Grid_Size - 2,
    2,
  );

  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawRoundedRect(x, y, width, height, radius) {
  ctx.beginPath();

  ctx.roundRect(x, y, width, height, radius);

  ctx.fill();
}

export function drawSnake(snakeLength) {
  const padding = 1;
  ctx.fillStyle = "#39FF14";
  ctx.shadowColor = "#00FF5A";
  ctx.shadowBlur = 8;
  for (let index = 0; index < snakeLength.length; index++) {
    const { x, y } = snakeLength[index];
    if (index === 0) {
      ctx.fillStyle = "#7CFF9A";
    } else {
      ctx.fillStyle = "#00FF5A";
    }
    // ctx.fillRect(
    //   x + padding,
    //   y + padding,
    //   Grid_Size - padding * 2,
    //   Grid_Size - padding * 2,
    // );
    drawRoundedRect(
      x * Grid_Size + 1,
      y * Grid_Size + 1,
      Grid_Size - 2,
      Grid_Size - 2,
      2,
    );
  }
  ctx.shadowBlur = 0;
}

// export function drawScore(score) {
//   ctx.fillStyle = "#39FF14";
//   ctx.font = "24px Times New Roman ";
//   ctx.fillText(`Score : ${score}`, 900, Height - 50, Width - 50);
// }

export function drawGameOver() {
  const fontSize = Math.max(16, Math.floor(canvas.width / 14));
  ctx.fillStyle = "#39FF14";
  ctx.font = `${fontSize}px "Press Start 2P"`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#00FF5A";
  ctx.shadowBlur = 10;
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
  ctx.shadowBlur = 0;
  ctx.textAlign = "start";
  ctx.textBaseline = "alphabetic";
}

export function drawGrid(cellWidth, cellHeight, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  // Draw vertical lines
  for (let x = 0; x <= canvas.width; x += cellWidth) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Draw horizontal lines
  for (let y = 0; y <= canvas.height; y += cellHeight) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

drawGrid(Grid_Size, Grid_Size, "rgba(0,255,90,.04)");
