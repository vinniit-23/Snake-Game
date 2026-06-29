// constant.js

export const Grid_Size = 10;

export const STATES = {
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  GAMEOVER: "gameover",
};

export const INITIAL_SPEED = 250;
export const MIN_SPEED = 60;
export const SPEED_INCREMENT = 20;
export const LEVEL_UP_FOOD = 5;

export const Width = 1000;
export const Height = 600;

export const Rows = Height / Grid_Size; // 60
export const Cols = Width / Grid_Size; //100

export const Colors = ["Red", "white", "yellow", "green", "blue"];
