// rerender.js

import { Grid_Size, setCanvasSize } from "./constant.js";
// import { Width, Height } from "./constant.js";
export const canvas = document.getElementById("Canvas");
export const ctx = canvas.getContext("2d");
export const gridCanvas = document.getElementById("GridCanvas");
export const gridCtx = gridCanvas.getContext("2d");

const gameOver = new Audio(
  "../Audios/game-over-deep-male-voice-clip-352695.mp3",
);

export function clearCanvas() {
  // ctx.fillStyle = "#021407";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawFood(x, y, foodColor) {
  // ctx.fillStyle = "#FF0040";
  ctx.fillStyle = foodColor;
  // ctx.shadowColor = "#FF4040";
  // ctx.shadowBlur = 14;
  // ctx.fillRect(x, y, Grid_Size, Grid_Size);
  // ctx.beginPath();

  // ctx.roundRect(
  //   x * Grid_Size + 1,
  //   y * Grid_Size + 1,
  //   Grid_Size - 2,
  //   Grid_Size - 2,
  //   2,
  // );

  // ctx.fill();

  ctx.fillRect(
    x * Grid_Size + 1,
    y * Grid_Size + 1,
    Grid_Size - 2,
    Grid_Size - 2,
  );
  // ctx.shadowBlur = 0;
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
  // ctx.shadowBlur = 2;
  for (let index = 0; index < snakeLength.length; index++) {
    const { x, y } = snakeLength[index];
    if (index === 0) {
      ctx.fillStyle = "#7CFF9A";
    } else {
      ctx.fillStyle = "#00FF5A";
    }
    ctx.fillRect(
      x * Grid_Size + padding,
      y * Grid_Size + padding,
      Grid_Size - padding * 2,
      Grid_Size - padding * 2,
    );
    // drawRoundedRect(
    //   x * Grid_Size + 1,
    //   y * Grid_Size + 1,
    //   Grid_Size - 2,
    //   Grid_Size - 2,
    //   2,
    // );
  }
  // ctx.shadowBlur = 0;
}

// export function drawScore(score) {
//   ctx.fillStyle = "#39FF14";
//   ctx.font = "24px Times New Roman ";
//   ctx.fillText(`Score : ${score}`, 900, Height - 50, Width - 50);
// }

export function drawGameOver() {
  gameOver.play();
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
  gridCtx.strokeStyle = color;
  gridCtx.lineWidth = 1;

  // Draw vertical lines
  gridCtx.beginPath();
  for (let x = 0; x <= gridCanvas.width; x += cellWidth) {
    gridCtx.moveTo(x, 0);
    gridCtx.lineTo(x, gridCanvas.height);
  }

  // Draw horizontal lines
  for (let y = 0; y <= gridCanvas.height; y += cellHeight) {
    // ctx.beginPath();
    gridCtx.moveTo(0, y);
    gridCtx.lineTo(gridCanvas.width, y);
  }
  gridCtx.stroke();
}

// window.addEventListener("resize", () => {
//   setCanvasSize(canvas, gridCanvas);
//   // initRenderer();
//   drawGrid(Grid_Size, Grid_Size, "rgba(0,255,90,.04)");

//   // if (gridCanvas.width <= 350 && gridCanvas.height <= 200) {
//   //   Grid_Size = 15;
//   // }
// });

export function initRenderer() {
  drawGrid(Grid_Size, Grid_Size, "rgba(0,255,90,.04)");
}
