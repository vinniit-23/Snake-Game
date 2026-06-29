document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  const GameButton = document.getElementById("Start-Game-Button");
  // const stopGameButton = document.getElementById("Stop-Game-Button");
  const fruitColor = ["yellow", "white", "green", "blue", "red"];
  const gridSize = 10;
  let { x, y } = generateSnake();
  let snakeLength = [
    { x: x, y: y },
    { x: x + gridSize, y: y },
    { x: x + 2 * gridSize, y: y },
  ];
  let score = 0;

  const canvasHeight = canvas.height;
  const canvasWidth = canvas.width;
  const rows = canvasHeight / gridSize; // 60
  const cols = canvasWidth / gridSize; //100
  let isGameRunning = false;
  let myInterval;
  let dx = +gridSize;
  let dy = 0;
  let direction;
  // let speed = 1000 / snakeLength.length;
  let gameState = "idle";

  function generateSnake() {
    xAxis = Math.floor(Math.random() * cols) * gridSize;
    yAxis = Math.floor(Math.random() * rows) * gridSize;
    if (
      xAxis === canvasWidth - 1 ||
      xAxis === canvasWidth - 2 ||
      xAxis === canvasWidth - 3
    ) {
      generateSnake();
    }
    return { x: xAxis, y: yAxis };
  }

  window.addEventListener("keydown", (event) => {
    direction = event.key;

    if (event.key === "ArrowUp" && dy !== +gridSize) {
      dx = 0;
      dy = -gridSize;
      // console.log(dx);
      // console.log(dy);
    } else if (event.key === "ArrowDown" && dy !== -gridSize) {
      dx = 0;
      dy = +gridSize;
      // console.log(dx);
      // console.log(dy);
    } else if (event.key === "ArrowLeft" && dx !== +gridSize) {
      dx = -gridSize;
      dy = 0;
      // console.log(dx);
      // console.log(dy);
    } else if (event.key === "ArrowRight" && dx !== -gridSize) {
      dx = +gridSize;
      dy = 0;
      // console.log(dx);
      // console.log(dy);
    }
  });

  function updateState() {
    if (gameState === "idle") {
      GameButton.innerText = "Start Game";
    } else if (gameState === "Running") {
      GameButton.innerText = "Pause Game";
    } else if (gameState === "Paused") {
      GameButton.innerText = "Resume Game";
    } else if (gameState === "Game_Over") {
      GameButton.innerText = "Restart Game";
    }
  }

  GameButton.addEventListener("click", () => {
    if (gameState === "idle") {
      // GameButton.innerText = "Start Game";
      gameState = "Running";
      updateState();
      // console.log(gameState);
      if (isGameRunning === true) {
        return;
      } else {
        isGameRunning = true;
        snakeLength = [
          { x: 50, y: 50 },
          { x: 40, y: 50 },
          { x: 30, y: 50 },
        ];
        dx = +gridSize;
        dy = 0;
        startGame();
      }
    } else if (gameState === "Running") {
      // GameButton.innerText = "Pause Game";
      gameState = "Paused";

      isGameRunning = false;
      clearInterval(myInterval);
    } else if (gameState === "Paused") {
      // GameButton.innerText = "Resume Game";
      // gameState = "Game Over";

      isGameRunning = true;
    } else if (gameState === "Game_Over") {
      // GameButton.innerText = "Restart Game";
    }
  });

  function startGame() {
    function generateFood() {
      let xAxis, yAxis;
      let isValid = false;

      while (!isValid) {
        // Step 1: Generate random position
        xAxis = Math.floor(Math.random() * cols) * gridSize;
        yAxis = Math.floor(Math.random() * rows) * gridSize;

        isValid = true;

        // Step 2: Check against entire snake
        for (let i = 0; i < snakeLength.length; i++) {
          const element = snakeLength[i];

          if (element.x === xAxis && element.y === yAxis) {
            isValid = false; // overlap found
            break;
          }
        }
      }
      // Step 3: Return only valid position
      return { x: xAxis, y: yAxis };
    }

    function wallCollision(head) {
      if (
        head.x < 0 ||
        head.x >= canvas.width ||
        head.y < 0 ||
        head.y >= canvas.height
      ) {
        console.log("Snake Collided with wall ");
        console.log(
          "if anything went wrong on wall collision part then check wallCollision function",
        );
        return true;
      }
    }

    function selfCollision(head) {
      for (let index = 1; index < snakeLength.length; index++) {
        const element = snakeLength[index];
        if (element.x === head.x && element.y === head.y) {
          console.log("Snake Collided with itself ");
          console.log(
            "if anything went wrong on self collision part then check selfCollision function",
          );
          return true;
        }
      }
    }

    function foodCollision(head, snakeFood) {
      if (head.x === snakeFood.x && head.y === snakeFood.y) {
        foodColor = Math.floor(Math.random() * fruitColor.length);
        console.log("Snake Collided with food ");
        console.log(
          "if anything went wrong on food collision part then check foodCollision function",
        );
        score++;
        return true;
      }
    }
    let snakeFood = generateFood();
    const foodColor = Math.floor(Math.random() * fruitColor.length);

    function drawFood(snakeFood) {
      ctx.fillStyle = fruitColor[foodColor];
      ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);
    }

    function checkCollision(head) {
      if (wallCollision(head)) {
        // alert("Wall Collision happened");
        // isGameRunning = false;
        // clearInterval(myInterval);
        // ctx.fillStyle = "Black";
        // ctx.font = "24px Times New Roman ";
        // ctx.fillText(`Game Over!`, 400, 300, 400);
        // snakeLength = [
        //   { x: 50, y: 50 },
        //   { x: 40, y: 50 },
        //   { x: 30, y: 50 },
        // ];
        // dx = +gridSize;
        // dy = 0;
        return true;
      }
      if (selfCollision(head)) {
        // alert("Self Collision happened");
        // isGameRunning = false;
        // clearInterval(myInterval);
        // ctx.fillStyle = "Black";
        // ctx.font = "24px Times New Roman ";
        // ctx.fillText(`Game Over!`, 400, 300, 400);
        // snakeLength = [
        //   { x: 50, y: 50 },
        //   { x: 40, y: 50 },
        //   { x: 30, y: 50 },
        // ];
        // dx = +gridSize;
        // dy = 0;
        return true;
      }
    }

    function drawSnake(snakeLengthArray) {
      ctx.fillStyle = "#171123";
      for (let index = 0; index < snakeLengthArray.length; index++) {
        ctx.fillRect(
          snakeLengthArray[index].x,
          snakeLengthArray[index].y,
          gridSize,
          gridSize,
        );
      }
    }

    function gameLoop() {
      updateState();

      ctx.fillStyle = "#006992";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const head = snakeLength[0];
      let newHead = { x: head.x + dx, y: head.y + dy };
      if (checkCollision(newHead)) {
        isGameRunning = false;
        gameState = "Game_Over";
        clearInterval(myInterval);
        ctx.fillStyle = "Black";
        ctx.font = "24px Times New Roman ";
        ctx.fillText(`Game Over!`, 400, 300, 400);
        return;
      }
      snakeLength.unshift(newHead);
      if (foodCollision(newHead, snakeFood)) {
        snakeFood = generateFood();
      } else {
        snakeLength.pop();
      }
      drawFood(snakeFood);
      drawSnake(snakeLength);
      ctx.fillStyle = "white";

      ctx.font = "24px Times New Roman ";
      ctx.fillText(`Score : ${score}`, 900, 50, 50);
      // console.log(snakeLength);
      // console.log(speed);
    }
    // const refreshInterval =
    myInterval = setInterval(gameLoop, 500);
    // return myInterval;
  }

  // stopGameButton.addEventListener("click", () => {
  //   console.log("Stop clicked");
  //   isGameRunning = false;
  //   clearInterval(myInterval);
  // });
});
