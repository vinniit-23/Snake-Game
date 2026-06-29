

let snake = [];


export function createSnake() {
  snake = [
    { x: 50, y: 50 },
    { x: 40, y: 50 },
    { x: 30, y: 50 },
  ];
}

export function moveSnake(dx, dy) {
  const head = snake[0];

  const newHead = {
    x: head.x + dx,
    y: head.y + dy,
  };

  snake.unshift(newHead);

  snake.pop();
}

export function growSnake(dx, dy) {
  const head = snake[0];

  const newHead = {
    x: head.x + dx,
    y: head.y + dy,
  };

  snake.unshift(newHead);
}

export function resetSnake() {
  createSnake();
}

export function getSnake() {
  return snake;
}

export function getHead() {
  return snake[0];
}
