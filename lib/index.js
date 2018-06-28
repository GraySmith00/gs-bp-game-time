const Game = require('./Game');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

let isGameOver = false;

// const SCL = 10;

const newGame = new Game(canvas.height, canvas.width, ctx);
newGame.start();

function gameLoop() {
  window.setTimeout(() => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isGameOver) {
      // console.log('no');
    } else {
      newGame.animate(ctx);
    }
    requestAnimationFrame(gameLoop);
  }, 60);
}
requestAnimationFrame(gameLoop);

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 38:
      // UP
      if (playerOne.direction != 'Down'){
        playerOne.direction = 'Up';
      break;
      }
    case 40:
      // DOWN
      if (playerOne.direction != 'Up'){
      playerOne.direction = 'Down';
      break;
      }
    case 37:
      // LEFT
      if (playerOne.direction != 'Right'){
        playerOne.direction = 'Left';
        break;
        }
    case 39:
      // RIGHT
      if (playerOne.direction != 'Left'){
        playerOne.direction = 'Right';
        break;
        }
  }
}
