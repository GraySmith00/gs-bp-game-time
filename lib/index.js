const Game = require('./Game');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const newGame = new Game(canvas.height, canvas.width, ctx);
newGame.loadPlayers();

document.addEventListener('keydown', function(e) {
  console.log(newGame.level);
  if (e.keyCode === 32 && newGame.level === 0) {
    console.log('hey ');
    newGame.start();
    requestAnimationFrame(gameLoop);
  } else if (e.keyCode === 32 && newGame.level > 0) {
    newGame.newLevel();
    requestAnimationFrame(gameLoop);
  }
});

function gameLoop() {
  window.setTimeout(() => {
    if (newGame.levelOver) {
      console.log('Level over cuz');
      return;
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newGame.animate(ctx);
    }
    requestAnimationFrame(gameLoop);
  }, 60);
}

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
  let pOneCycle = newGame.players[0].lightCycle;
  let pTwoCycle = newGame.players[1].lightCycle;
  switch (e.keyCode) {
    case 38:
      // UP
      if (pTwoCycle.direction != 'Down') {
        pTwoCycle.direction = 'Up';
      }
      break;
    case 40:
      // DOWN
      if (pTwoCycle.direction != 'Up') {
        pTwoCycle.direction = 'Down';
      }
      break;
    case 37:
      // LEFT
      if (pTwoCycle.direction != 'Right') {
        pTwoCycle.direction = 'Left';
      }
      break;
    case 39:
      // RIGHT
      if (pTwoCycle.direction != 'Left') {
        pTwoCycle.direction = 'Right';
      }
      break;
    case 87:
      // UP
      if (pOneCycle.direction != 'Down') {
        pOneCycle.direction = 'Up';
      }
      break;
    case 83:
      // DOWN
      if (pOneCycle.direction != 'Up') {
        pOneCycle.direction = 'Down';
      }
      break;
    case 65:
      // LEFT
      if (pOneCycle.direction != 'Right') {
        pOneCycle.direction = 'Left';
      }
      break;
    case 68:
      // RIGHT
      if (pOneCycle.direction != 'Left') {
        pOneCycle.direction = 'Right';
      }
      break;
  }
}

// const canvasObj = {
//   x: 0,
//   y: 0,
//   height: canvas.height,
//   width: canvas.width
// };

// newGame.players[0].lightCycle.tails.map(tail => {
//   if (tail.isCollidingWith(canvasObj)) {
//     console.log('woooooahh there brother!');
//   }
// });
