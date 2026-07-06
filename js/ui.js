// ui.js
const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("level");
const highScoreElement = document.getElementById("high-score");
let highScore = Number(localStorage.getItem("highScore")) || 0;

highScoreElement.innerText = highScore.toString().padStart(3, "0");

export function drawScore(score) {
  scoreElement.innerText = score.toString().padStart(3, "0");
}

export function drawLevel(level) {
  levelElement.innerText = level.toString().padStart(2, "0");
}

export function updateHighScore(score) {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreElement.innerText = highScore.toString().padStart(3, "0");
  }
}

// export function drawHighScore(highScore) {
// }
