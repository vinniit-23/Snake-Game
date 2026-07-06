// collision.js

import { getCols, getRows, } from "./constant.js";




export function checkWall(head) {
  if (head.x < 0 || head.x >= getCols() || head.y < 0 || head.y >= getRows()) {
    // console.log("Snake Collided with wall ");
    // console.log(
    //   "if anything went wrong on wall collision part then check wallCollision function",
    // );
    return true;
  }
  return false;
}

export function checkSelf(head, snakeLength) {
  for (let index = 1; index < snakeLength.length; index++) {
    const element = snakeLength[index];
    if (element.x === head.x && element.y === head.y) {
      // console.log("Snake Collided with itself ");
      // console.log(
      //   "if anything went wrong on self collision part then check selfCollision function",
      // );
      return true;
    }
  }
  return false;
}

export function checkFood(head, snakeFood) {
  if (head.x === snakeFood.x && head.y === snakeFood.y) {
    // console.log("Snake Collided with food ");
    // console.log(
    //   "if anything went wrong on food collision part then check foodCollision function",
    // );
    return true;
  }
  return false;
}

export function checkCollision(head, snakeLength) {
  if (checkWall(head) || checkSelf(head, snakeLength)) {
    return true;
  }
  return false;
}
