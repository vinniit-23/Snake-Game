// food.js
import { Grid_Size,Rows,Cols,Colors } from "./constant.js";

export function generateFood() {
  if (
    typeof Cols === "undefined" ||
    typeof Rows === "undefined" ||
    typeof Grid_Size === "undefined"
  ) {
    console.error("Grid constants not defined!");
    return { xAxis: 0, yAxis: 0 };
  }
  let xAxis = Math.floor(Math.random() * Cols) * Grid_Size;
  let yAxis = Math.floor(Math.random() * Rows) * Grid_Size;

  // Step 3: Return only valid position
  return { xAxis, yAxis };
}

export function getFood(snakeLength) {
  let y = generateFood().yAxis;
  let x = generateFood().xAxis;
  let isValid = false;
  // console.log(x);
  // console.log(y);
  // console.log(Rows);
  // console.log(Cols);
  // console.log(Grid_Size);
  // console.log(snakeLength);
  // if (
  //   typeof Cols === "undefined" ||
  //   typeof Rows === "undefined" ||
  //   typeof Grid_Size === "undefined"
  // ) {
  //   console.error("Grid constants not defined!");
  //   return { xAxis: 0, yAxis: 0 };
  // }

  while (!isValid) {
    // Step 1: Generate random position
    y = generateFood().yAxis;
    x = generateFood().xAxis;
    isValid = true;

    // Step 2: Check against entire snake
    for (let i = 0; i < snakeLength.length; i++) {
      const element = snakeLength[i];

      if (element.x === x && element.y === y) {
        isValid = false; // overlap found
        break;
      }
    }
  }
  return { x, y };
}

export function randomFoodColor() {
  return Colors[Math.floor(Math.random() * Colors.length)];
}

// let fruitColor = randomFoodColor();

// export function drawFood(snakeFood) {
//   ctx.fillStyle = fruitColor[Colors];
//   ctx.fillRect(snakeFood.x, snakeFood.y, Grid_Size, Grid_Size);
// }
