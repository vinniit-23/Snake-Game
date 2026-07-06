// dpad.js
import { Grid_Size } from "../constant.js";
import { getDirections, setDirection } from "./direction.js";

const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");

let dx = 0;
let dy = 0;

up.addEventListener("click", () => {
  const { dx, dy } = getDirections();
  // if (dy !== +Grid_Size) {
  if (dy !== +1) {
    //   if (dy !== +Grid_Size) {
    //     dx = 0;
    //     dy = -Grid_Size;
    // console.log(dx);
    // console.log(dy);
    // setDirection(0, -Grid_Size);
    setDirection(0, -1);
  }
});
down.addEventListener("click", () => {
  const { dx, dy } = getDirections();
  // if (dy !== -Grid_Size) {
  if (dy !== -1) {
    // dx = 0;
    // dy = +Grid_Size;
    // console.log(dx);
    // console.log(dy);
    // setDirection(0, +Grid_Size);
    setDirection(0, +1);
  }
});
right.addEventListener("click", () => {
  const { dx, dy } = getDirections();
  // if (dx !== -Grid_Size) {
  if (dx !== -1) {
    // dx = +Grid_Size;
    // dy = 0;
    // console.log(dx);
    // console.log(dy);
    // setDirection(+Grid_Size, 0);
    setDirection(+1, 0);
  }
});
left.addEventListener("click", () => {
  const { dx, dy } = getDirections();
  // if (dx !== +Grid_Size) {
  if (dx !== +1) {
    // dx = -Grid_Size;
    // dy = 0;
    // console.log(dx);
    // console.log(dy);
    // setDirection(-Grid_Size, 0);
    setDirection(-1, 0);
  }
});
