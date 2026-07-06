import { Grid_Size } from "../constant.js";

// let dx = +Grid_Size;
// let dy = 0;
let dx = 1;
let dy = 0;

export function getDirections() {
  return { dx, dy };
}

export function resetDirections() {
  // dx = Grid_Size;
  // dy = 0;
  dx = 1;
  dy = 0;
}

export function setDirection(Dx, Dy) {
  dx = Dx;
  dy = Dy;

  console.log(dx);
  console.log(dy);
}
