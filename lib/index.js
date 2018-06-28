// var GamePiece = require('./GamePiece');
const LightCycle = require('./LightCycle');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

let isGameOver = false;

const SCL = 10;

const cycleOne = new LightCycle(0, 0, SCL, 'rgba(0, 255, 0, 1)');

function animate() {
  cycleOne.draw(ctx);
  cycleOne.move();
}

function gameLoop() {
  window.setTimeout(() => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isGameOver) {
      // do some end game stuff
    } else {
      animate();
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
      cycleOne.direction = 'Up';
      break;
    case 40:
      // DOWN
      cycleOne.direction = 'Down';
      break;
    case 37:
      // LEFT
      cycleOne.direction = 'Left';
      break;
    case 39:
      // RIGHT
      cycleOne.direction = 'Right';
      break;
  }
}
