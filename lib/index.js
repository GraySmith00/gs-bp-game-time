const Game = require('./Game');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const newGame = new Game(canvas.height, canvas.width, ctx);

newGame.loadPlayers();

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 32 && newGame.level === 0) {
    document.querySelector('.player1wins').innerHTML = newGame.players[0].score;
    document.querySelector('.player2wins').innerHTML = newGame.players[1].score;
    newGame.start();
    document.querySelector('.winner-block').innerHTML = newGame.winner;
    newGame.animate(ctx);
    requestAnimationFrame(gameLoop);
  } else if (e.keyCode === 32 && newGame.level > 0) {
    newGame.newLevel();
    newGame.animate(ctx);
    requestAnimationFrame(gameLoop);
  }
});

const frameRate = function() {
  let rate;

  switch (newGame.level) {
  case 0:
    rate = 120;
    break;
  case 1:
    rate = 60;
    break;
  default:
    rate = 30;
  }
  return rate;
};

function gameLoop() {
  window.setTimeout(() => {
    if (newGame.levelOver) {
      document.querySelector('.player1wins').innerHTML =
        newGame.players[0].score;
      document.querySelector('.player2wins').innerHTML =
        newGame.players[1].score;
      newGame.isGameOver(newGame.players);
      document.querySelector('.winner-block').innerHTML = newGame.winner;
      return;
    } else {
      console.log(frameRate());
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newGame.animate(ctx);
    }
    requestAnimationFrame(gameLoop);
  }, frameRate());
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
