var GamePiece = require('./GamePiece');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

let isGameOver = false;

const firstBlock = new GamePiece(50, 100, 10, 10, 'rgba(0, 255, 0, 1)', 1);
const secondBlock = new GamePiece(200, 120, 10, 10, 'rgba(255, 0, 0, 1)', -1);

const blocks = [firstBlock, secondBlock];

function animate() {
  blocks.forEach((block, i) => {
    block.draw(ctx);
    block.move();

    // check for collision
    blocks.forEach((block2, j) => {
      if (i !== j && block.isCollidingWith(block2)) {
        // do something, depends on the game
        // stop the blocks
        block.dx = 0;
        block2.dx = 0;
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

// canvas.addEventListener('click', function(e) {
//   const x = e.layerX;
//   const y = e.layerY;
//   const thirdBlock = new GamePiece(x, y, 10, 10, 'rgba(255, 0, 0, 1)', -1);
//   blocks.push(thirdBlock);
// });

document.addEventListener("keyup", keyUpHandler, false);


function keyUpHandler(e) {
  if (e.keyCode == 39) { // right arrow key
    blocks[0].dx = 1;
    blocks[0].dy = 0;
  } else if (e.keyCode == 37) { //left arrow key
    blocks[0].dx = -1;
    blocks[0].dy = 0;
  } else if (e.keyCode == 40) { //down arrow key
    blocks[0].dx = 0;
    blocks[0].dy = 1;
  } else if (e.keyCode == 38) { //down arrow key
    blocks[0].dx = 0;
    blocks[0].dy = -1;
  }
}

