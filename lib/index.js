var GamePiece = require('./GamePiece');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

let isGameOver = false;

const snakeOne = new GamePiece(
  canvas.width * 0.15,
  canvas.height / 2,
  10,
  10,
  'rgba(0, 255, 0, 1)'
);
const snakeTwo = new GamePiece(
  canvas.width * 0.85,
  canvas.height / 2,
  10,
  10,
  'rgba(255, 0, 0, 1)'
);

const snakes = [snakeOne, snakeTwo];

function animate() {
  snakeOne.draw(ctx);
  snakeOne.move();

  snakes.forEach((snake, i) => {
    // snake.draw(ctx);
    // snake.move();

    // check for collision
    snakes.forEach((snake2, j) => {
      if (i !== j && snake.isCollidingWith(snake2)) {
        // do something, depends on the game
        // stop the snakes
        snake.dx = 0;
        snake2.dx = 0;
        isGameOver = true;
      }
    });
  });
}

function gameLoop() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (isGameOver) {
    // do some end game stuff
    // console.log('game over dawg');
  } else {
    animate();
  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 38:
      // UP
      snakeOne.direction(0, -1);
      break;
    case 40:
      // DOWN
      snakeOne.direction(0, 1);
      break;
    case 37:
      // LEFT
      snakeOne.direction(-1, 0);
      break;
    case 39:
      // RIGHT
      snakeOne.direction(1, 0);
      break;
  }
}
