// input.js
import { Grid_Size } from "./constant.js";

let dx = +Grid_Size;
let dy = 0;

export function getDirections() {
  return { dx, dy };
}

export function resetDirections() {
    dx = Grid_Size;
    dy = 0;
}

// export function keyboardInput() {
window.addEventListener("keydown", (event) => {
  // direction = event.key;

  if (event.key === "ArrowUp" && dy !== +Grid_Size) {
    dx = 0;
    dy = -Grid_Size;
    // console.log(dx);
    // console.log(dy);
  } else if (event.key === "ArrowDown" && dy !== -Grid_Size) {
    dx = 0;
    dy = +Grid_Size;
    // console.log(dx);
    // console.log(dy);
  } else if (event.key === "ArrowLeft" && dx !== +Grid_Size) {
    dx = -Grid_Size;
    dy = 0;
    // console.log(dx);
    // console.log(dy);
  } else if (event.key === "ArrowRight" && dx !== -Grid_Size) {
    dx = +Grid_Size;
    dy = 0;
    // console.log(dx);
    // console.log(dy);
  }
});
// }
