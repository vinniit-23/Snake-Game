// input.js
import { Grid_Size } from "../constant.js";
import { getDirections, setDirection } from "./direction.js";

// export function keyboardInput() {
window.addEventListener(
  "keydown",
  (event) => {
    event.preventDefault();
    // direction = event.key;
    const { dx, dy } = getDirections();
    if (event.key === "ArrowUp" && dy !== +1) {
      // && dy !== +Grid_Size) {
      // dx = 0;
      // dy = -Grid_Size;
      // console.log(dx);
      // console.log(dy);
      // setDirection(0, -Grid_Size);
      setDirection(0, -1);
    } else if (event.key === "ArrowDown" && dy !== -1) {
      // && dy !== -Grid_Size) {
      // dx = 0;
      // dy = +Grid_Size;
      // console.log(dx);
      // console.log(dy);
      // setDirection(0, +Grid_Size);
      setDirection(0, +1);
    } else if (
      event.key === "ArrowLeft" &&
      // && dx !== +Grid_Size) {
      dx !== +1
    ) {
      // dx = -Grid_Size;
      // dy = 0;
      // console.log(dx);
      // console.log(dy);
      // setDirection(-Grid_Size, 0);
      setDirection(-1, 0);
    } else if (
      event.key === "ArrowRight" &&
      // && dx !== -Grid_Size) {
      dx !== -1
    ) {
      // dx = +Grid_Size;
      // dy = 0;
      // console.log(dx);
      // console.log(dy);
      // setDirection(+Grid_Size, 0);
      setDirection(+1, 0);
    }
  },
  { passive: false },
);
// }
