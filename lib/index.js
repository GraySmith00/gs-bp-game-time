const Game = require('./Game');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const newGame = new Game(canvas.height, canvas.width, ctx);

newGame.loadPlayers();

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 32 && newGame.level === 0 && newGame.ready) {
    startNewGame();
  } else if (e.keyCode === 32 && newGame.level > 0 && newGame.ready) {
    startNewLevel();
  }
});

document.addEventListener('keydown', keyDownHandler, false);

function startNewGame() {
  newGame.ready = false;
  changeClass('introBackground', 'tron3');
  displayScore();
  newGame.start();
  playSong();
  displayWinner();
  newGame.animate(ctx);
  requestAnimationFrame(gameLoop);
}

function startNewLevel() {
  newGame.ready = false;
  changeClass('tron4', 'tron3');
  newGame.newLevel();
  newGame.animate(ctx);
  requestAnimationFrame(gameLoop);
}

function gameOverDisplay() {
  if (newGame.players[0].score < 3 && newGame.players[1].score < 3) {
    changeClass('tron3', 'tron4');
    setTimeout(() => {
      newGame.ready = true;
    }, 500);
  } else {
    changeClass('tron3', 'tron5');
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      changeClass('tron5', 'introBackground');
      newGame.ready = true;
    }, 2000);
  }
}

function changeClass(class1, class2) {
  canvas.classList.remove(class1);
  canvas.classList.add(class2);
}

function playSong() {
  const audio = document.querySelector(`audio[data-key="32"]`);

  audio.loop = true;
  audio.play();
}

function stopSong() {
  const audio = document.querySelector(`audio[data-key="32"]`);

  audio.pause();
}

function frameRate() {
  let rate;

  switch (newGame.level) {
  case 0:
    rate = 90;
    break;
  case 1:
    rate = 60;
    break;
  default:
    rate = 30;
  }
  return rate;
}

function gameLoop() {
  window.setTimeout(() => {
    if (newGame.levelOver) {
      gameOverDisplay();
      displayScore();
      newGame.isGameOver(newGame.players);
      console.log(newGame.gameOver);
      if (newGame.gameOver) {
        stopSong();
      }
      displayWinner();
      return;
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newGame.animate(ctx);
    }
    requestAnimationFrame(gameLoop);
  }, frameRate());
}

function displayScore() {
  document.querySelector('.player1wins').innerHTML = newGame.players[0].score;
  document.querySelector('.player2wins').innerHTML = newGame.players[1].score;
}

function displayWinner() {
  document.querySelector('.winner-block').innerHTML = newGame.winner;
}

function keyDownHandler(e) {
  let pOneCycle = newGame.players[0];
  let pTwoCycle = newGame.players[1];

  switch (e.keyCode) {
  case 38: // UP
    if (pTwoCycle.direction != 'Down') {
      pTwoCycle.direction = 'Up';
    }
    break;
  case 40: // DOWN
    if (pTwoCycle.direction != 'Up') {
      pTwoCycle.direction = 'Down';
    }
    break;
  case 37: // LEFT
    if (pTwoCycle.direction != 'Right') {
      pTwoCycle.direction = 'Left';
    }
    break;
  case 39: // RIGHT
    if (pTwoCycle.direction != 'Left') {
      pTwoCycle.direction = 'Right';
    }
    break;
  case 87: // UP
    if (pOneCycle.direction != 'Down') {
      pOneCycle.direction = 'Up';
    }
    break;
  case 83: // DOWN
    if (pOneCycle.direction != 'Up') {
      pOneCycle.direction = 'Down';
    }
    break;
  case 65: // LEFT
    if (pOneCycle.direction != 'Right') {
      pOneCycle.direction = 'Left';
    }
    break;
  case 68: // RIGHT
    if (pOneCycle.direction != 'Left') {
      pOneCycle.direction = 'Right';
    }
    break;
  }
}
