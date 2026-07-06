

let snake = [];


export function createSnake() {
  snake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
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
