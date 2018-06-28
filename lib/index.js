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
  let pOneCycle = newGame.players[0].lightCycle;
  console.log(pOneCycle);
  switch (e.keyCode) {
    case 38:
      // UP
      if (pOneCycle.direction != 'Down'){
        pOneCycle.direction = 'Up';
      }
      break;
    case 40:
      // DOWN
      if (pOneCycle.direction != 'Up'){
        pOneCycle.direction = 'Down';
      }
      break;
    case 37:
      // LEFT
      if (pOneCycle.direction != 'Right'){
        pOneCycle.direction = 'Left';
      }
      break;
    case 39:
      // RIGHT
      if (pOneCycle.direction != 'Left'){
        pOneCycle.direction = 'Right';
      }
      break;
  }
}
