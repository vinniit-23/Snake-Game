// swipe.js

import { Grid_Size } from "../constant.js";
import { getDirections, setDirection } from "./direction.js";

let swipeDetected = false;
let startX;
let startY;
window.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log("Touch Start", e.touches[0].clientX, e.touches[0].clientY);
    swipeDetected = false;
  },
  { passive: false },
);

window.addEventListener(
  "touchmove",
  (e) => {
    if (swipeDetected) return;
    const touch = e.touches[0];
    e.preventDefault();

    const endX = touch.clientX;
    const endY = touch.clientY;

    const { dx, dy } = getDirections();

    // console.log(
    //   "Touch End",
    //   e.changedTouches[0].clientX,
    //   e.changedTouches[0].clientY,
    // );

    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const MIN_SWIPE = 30;
    // swipeDetected = true;

    if (Math.abs(deltaX) < MIN_SWIPE && Math.abs(deltaY) < MIN_SWIPE) {
      return;
    }

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      // vertical move
      // if deltaY is postive it means snake should move to down
      if (
        deltaY > 0 &&
        // && dy !== -Grid_Size) {
        dy !== -1
      ) {
        // setDirection(0, +Grid_Size);
        setDirection(0, +1);
        swipeDetected = true;

        // if deltaY is negative  it means snake should move to up
      } else if (deltaY < 0 && dy !== +1) {
        // && dy !== +Grid_Size) {
        // setDirection(0, -Grid_Size);
        setDirection(0, -1);
        swipeDetected = true;
      }
    } else {
      // horizontal move
      // if deltaX is postive it means snake should move to right
      if (deltaX > 0 && dx !== -1) {
        // && dx !== -Grid_Size) {
        // setDirection(+Grid_Size, 0);
        setDirection(+1, 0);
        swipeDetected = true;

        // if deltaX is negative  it means snake should move to left
      } else if (
        deltaX < 0 &&
        // && dx !== +Grid_Size) {
        dx !== +1
      ) {
        // setDirection(-Grid_Size, 0);
        setDirection(-1, 0);
        swipeDetected = true;
      }
    }
  },
  { passive: false },
);

window.addEventListener("touchend", (e) => {
  swipeDetected = false;

  // console.log("delta X: " + deltaX + " delta Y: " + deltaY);

  // const { dx, dy } = getDirections();

  // // Vertical Changes
  // if (Math.abs(deltaY) > Math.abs(deltaX)) {
  //   if (deltaY > 0 && dy !== -Grid_Size) {
  //     // swipe down
  //     setDirection(0, +Grid_Size);
  //   } else if (deltaY < 0 && dy !== +Grid_Size) {
  //     //   swipe up
  //     setDirection(0, -Grid_Size);
  //   }
  // } else {
  //   // Horizontal changes
  //   if (deltaX > 0 && dx !== -Grid_Size) {
  //     // swipe right
  //     setDirection(+Grid_Size, 0);
  //   } else if (deltaX < 0 && dx !== +Grid_Size) {
  //     // swipe left
  //     setDirection(-Grid_Size, 0);
  //   }
  // }
});
