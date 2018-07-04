/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");

var Game = function () {
  function Game(height, width, ctx) {
    _classCallCheck(this, Game);

    this.players = [];
    this.height = height;
    this.width = width;
    this.SCL = 10;
    this.ctx = ctx;
    this.gameOver = false;
    this.levelOver = false;
    this.level = 0;
    this.winner = '';
    this.ready = true;
  }

  _createClass(Game, [{
    key: 'loadPlayers',
    value: function loadPlayers() {
      var SCL = this.SCL;

      var playerOne = new Player(70, 230, SCL, '#1B33F5', 'Right');
      var playerTwo = new Player(420, 230, SCL, '#DC4BF7', 'Left');

      this.players.push(playerOne);
      this.players.push(playerTwo);
    }
  }, {
    key: 'isGameOver',
    value: function isGameOver(playersArr) {
      if (playersArr[0].score > 2 || playersArr[1].score > 2) {
        this.gameOver = true;
        this.declareWinner(playersArr);
        this.level = 0;
        this.players = [];
        this.loadPlayers();
      }
    }
  }, {
    key: 'declareWinner',
    value: function declareWinner(playersArr) {
      if (playersArr[0].score > 2) {
        this.winner = 'Player 1 Victory!';
      } else if (playersArr[1].score > 2) {
        this.winner = 'Player 2 Victory!';
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.levelOver = false;
      this.gameOver = false;
      this.winner = '';
      this.players[0].direction = 'Right';
      this.players[1].direction = 'Left';
    }
  }, {
    key: 'newLevel',
    value: function newLevel() {
      this.levelOver = false;
      this.players[0].setInitialTail();
      this.players[1].setInitialTail();
      this.players[0].x = 70;
      this.players[0].y = 230;
      this.players[1].x = 420;
      this.players[1].y = 230;
      this.players[0].direction = 'Right';
      this.players[1].direction = 'Left';
    }
  }, {
    key: 'animate',
    value: function animate(ctx) {
      var playerOne = this.players[0];

      playerOne.draw(ctx);
      playerOne.move();

      var playerTwo = this.players[1];

      playerTwo.draw(ctx);
      playerTwo.move();

      this.selfCrash(playerOne, playerTwo);
      this.selfCrash(playerTwo, playerOne);

      this.wallCrash(playerOne, playerTwo);
      this.wallCrash(playerTwo, playerOne);

      this.crashIntoOtherPlayer(playerOne, playerTwo);
      this.crashIntoOtherPlayer(playerTwo, playerOne);
    }
  }, {
    key: 'selfCrash',
    value: function selfCrash(player1, player2) {
      var _this = this;

      player1.tails.slice(1).forEach(function (tail) {
        if (player1.tails[0].isCollidingWith(tail)) {
          player2.score++;
          _this.level++;
          _this.levelOver = true;
        }
      });
    }
  }, {
    key: 'wallCrash',
    value: function wallCrash(player1, player2) {
      var canvasObj = {
        x: 0,
        y: 0,
        height: 500,
        width: 500
      };

      if (!player1.tails[0].isCollidingWith(canvasObj)) {
        player2.score++;
        this.level++;
        this.levelOver = true;
      }
    }
  }, {
    key: 'crashIntoOtherPlayer',
    value: function crashIntoOtherPlayer(playerOne, playerTwo) {
      var _this2 = this;

      playerTwo.tails.slice(1).forEach(function (tail) {
        if (playerOne.tails[0].isCollidingWith(tail)) {
          playerTwo.score++;
          _this2.level++;
          _this2.levelOver = true;
        }
      });
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return !(this.x + this.width <= object.x || this.y + this.height <= object.y || this.x >= object.x + object.width || this.y >= object.y + object.height);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return GamePiece;
}();

module.exports = GamePiece;

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tail = __webpack_require__(/*! ./Tail */ "./lib/Tail.js");

var Player = function () {
  function Player(x, y, SCL, color, direction) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.color = color;
    this.SCL = SCL;
    this.direction = direction;
    this.score = 0;
    this.setInitialTail();
  }

  _createClass(Player, [{
    key: 'setInitialTail',
    value: function setInitialTail() {
      var x = this.x,
          y = this.y,
          SCL = this.SCL,
          color = this.color;


      this.tails = [new Tail(x, y, SCL, SCL, color)];
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var tails = this.tails;


      tails.map(function (tail) {
        tail.draw(ctx);
      });
    }
  }, {
    key: 'move',
    value: function move() {
      var SCL = this.SCL,
          color = this.color,
          direction = this.direction;
      var _tails$ = this.tails[0],
          x = _tails$.x,
          y = _tails$.y;


      if (direction === 'Right') {
        this.tails.unshift(new Tail(x + SCL, y, SCL, SCL, color));
      } else if (direction === 'Left') {
        this.tails.unshift(new Tail(x - SCL, y, SCL, SCL, color));
      } else if (direction === 'Up') {
        this.tails.unshift(new Tail(x, y - SCL, SCL, SCL, color));
      } else if (direction === 'Down') {
        this.tails.unshift(new Tail(x, y + SCL, SCL, SCL, color));
      }
    }
  }]);

  return Player;
}();

module.exports = Player;

// const LightCycle = require('./LightCycle');

// class Player {
//   constructor(startX, startY, score, SCL, color, direction) {
//     this.startX = startX;
//     this.startY = startY;
//     this.score = score;
//     this.SCL = SCL;
//     this.color = color;
//     this.direction = direction;
//     this.lightCycle = new LightCycle(startX, startY, SCL, color, direction);
//   }
// }

// module.exports = Player;

/***/ }),

/***/ "./lib/Tail.js":
/*!*********************!*\
  !*** ./lib/Tail.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

var Tail = function (_GamePiece) {
  _inherits(Tail, _GamePiece);

  function Tail(x, y, height, width, color) {
    _classCallCheck(this, Tail);

    return _possibleConstructorReturn(this, (Tail.__proto__ || Object.getPrototypeOf(Tail)).call(this, x, y, height, width, color));
  }

  return Tail;
}(GamePiece);

module.exports = Tail;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var newGame = new Game(canvas.height, canvas.width, ctx);

newGame.loadPlayers();

document.addEventListener('keydown', function (e) {
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
    setTimeout(function () {
      newGame.ready = true;
    }, 500);
  } else {
    changeClass('tron3', 'tron5');
    setTimeout(function () {
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
  var audio = document.querySelector('audio[data-key="32"]');

  audio.loop = true;
  audio.play();
}

function stopSong() {
  var audio = document.querySelector('audio[data-key="32"]');

  audio.pause();
}

function frameRate() {
  var rate = void 0;

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
  window.setTimeout(function () {
    if (newGame.levelOver) {
      gameOverDisplay();
      displayScore();
      newGame.isGameOver(newGame.players);
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
  var pOneCycle = newGame.players[0];
  var pTwoCycle = newGame.players[1];

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

// 38,40,37,39
// 87,83, 65,68

document.addEventListener('keydown', addKeyHover);
document.addEventListener('keyup', removeKeyHover);

function addKeyHover(e) {
  var dirKey = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  if (dirKey) {
    dirKey.classList.add('key-hover');
  }
}

function removeKeyHover(e) {
  var dirKey = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  if (dirKey) {
    dirKey.classList.remove('key-hover');
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UYWlsLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiR2FtZSIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwicGxheWVycyIsIlNDTCIsImdhbWVPdmVyIiwibGV2ZWxPdmVyIiwibGV2ZWwiLCJ3aW5uZXIiLCJyZWFkeSIsInBsYXllck9uZSIsInBsYXllclR3byIsInB1c2giLCJwbGF5ZXJzQXJyIiwic2NvcmUiLCJkZWNsYXJlV2lubmVyIiwibG9hZFBsYXllcnMiLCJkaXJlY3Rpb24iLCJzZXRJbml0aWFsVGFpbCIsIngiLCJ5IiwiZHJhdyIsIm1vdmUiLCJzZWxmQ3Jhc2giLCJ3YWxsQ3Jhc2giLCJjcmFzaEludG9PdGhlclBsYXllciIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFpbHMiLCJzbGljZSIsImZvckVhY2giLCJpc0NvbGxpZGluZ1dpdGgiLCJ0YWlsIiwiY2FudmFzT2JqIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWVQaWVjZSIsImNvbG9yIiwib2JqZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJUYWlsIiwibWFwIiwidW5zaGlmdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibmV3R2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0YXJ0TmV3R2FtZSIsInN0YXJ0TmV3TGV2ZWwiLCJrZXlEb3duSGFuZGxlciIsImNoYW5nZUNsYXNzIiwiZGlzcGxheVNjb3JlIiwic3RhcnQiLCJwbGF5U29uZyIsImRpc3BsYXlXaW5uZXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJuZXdMZXZlbCIsImdhbWVPdmVyRGlzcGxheSIsInNldFRpbWVvdXQiLCJjbGVhclJlY3QiLCJjbGFzczEiLCJjbGFzczIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhdWRpbyIsInF1ZXJ5U2VsZWN0b3IiLCJsb29wIiwicGxheSIsInN0b3BTb25nIiwicGF1c2UiLCJmcmFtZVJhdGUiLCJyYXRlIiwid2luZG93IiwiaXNHYW1lT3ZlciIsImlubmVySFRNTCIsInBPbmVDeWNsZSIsInBUd29DeWNsZSIsImFkZEtleUhvdmVyIiwicmVtb3ZlS2V5SG92ZXIiLCJkaXJLZXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpQ0FBUixDQUFmOztJQUVNQyxJO0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCQyxHQUEz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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY3R4KSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuU0NMID0gMTA7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMubGV2ZWxPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy53aW5uZXIgPSAnJztcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIGxvYWRQbGF5ZXJzKCkge1xuICAgIGNvbnN0IHsgU0NMIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoNzAsIDIzMCwgU0NMLCAnIzFCMzNGNScsICdSaWdodCcpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoNDIwLCAyMzAsIFNDTCwgJyNEQzRCRjcnLCAnTGVmdCcpO1xuXG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyT25lKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICB9XG5cbiAgaXNHYW1lT3ZlcihwbGF5ZXJzQXJyKSB7XG4gICAgaWYgKHBsYXllcnNBcnJbMF0uc2NvcmUgPiAyIHx8IHBsYXllcnNBcnJbMV0uc2NvcmUgPiAyKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVjbGFyZVdpbm5lcihwbGF5ZXJzQXJyKTtcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgICB0aGlzLmxvYWRQbGF5ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZGVjbGFyZVdpbm5lcihwbGF5ZXJzQXJyKSB7XG4gICAgaWYgKHBsYXllcnNBcnJbMF0uc2NvcmUgPiAyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IGBQbGF5ZXIgMSBWaWN0b3J5IWA7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJzQXJyWzFdLnNjb3JlID4gMikge1xuICAgICAgdGhpcy53aW5uZXIgPSBgUGxheWVyIDIgVmljdG9yeSFgO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMubGV2ZWxPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMud2lubmVyID0gJyc7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLmRpcmVjdGlvbiA9ICdSaWdodCc7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgfVxuXG4gIG5ld0xldmVsKCkge1xuICAgIHRoaXMubGV2ZWxPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLnNldEluaXRpYWxUYWlsKCk7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLnNldEluaXRpYWxUYWlsKCk7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLnggPSA3MDtcbiAgICB0aGlzLnBsYXllcnNbMF0ueSA9IDIzMDtcbiAgICB0aGlzLnBsYXllcnNbMV0ueCA9IDQyMDtcbiAgICB0aGlzLnBsYXllcnNbMV0ueSA9IDIzMDtcbiAgICB0aGlzLnBsYXllcnNbMF0uZGlyZWN0aW9uID0gJ1JpZ2h0JztcbiAgICB0aGlzLnBsYXllcnNbMV0uZGlyZWN0aW9uID0gJ0xlZnQnO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSB0aGlzLnBsYXllcnNbMF07XG5cbiAgICBwbGF5ZXJPbmUuZHJhdyhjdHgpO1xuICAgIHBsYXllck9uZS5tb3ZlKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJUd28gPSB0aGlzLnBsYXllcnNbMV07XG5cbiAgICBwbGF5ZXJUd28uZHJhdyhjdHgpO1xuICAgIHBsYXllclR3by5tb3ZlKCk7XG5cbiAgICB0aGlzLnNlbGZDcmFzaChwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgdGhpcy5zZWxmQ3Jhc2gocGxheWVyVHdvLCBwbGF5ZXJPbmUpO1xuXG4gICAgdGhpcy53YWxsQ3Jhc2gocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIHRoaXMud2FsbENyYXNoKHBsYXllclR3bywgcGxheWVyT25lKTtcblxuICAgIHRoaXMuY3Jhc2hJbnRvT3RoZXJQbGF5ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIHRoaXMuY3Jhc2hJbnRvT3RoZXJQbGF5ZXIocGxheWVyVHdvLCBwbGF5ZXJPbmUpO1xuICB9XG5cbiAgc2VsZkNyYXNoKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBwbGF5ZXIxLnRhaWxzLnNsaWNlKDEpLmZvckVhY2godGFpbCA9PiB7XG4gICAgICBpZiAocGxheWVyMS50YWlsc1swXS5pc0NvbGxpZGluZ1dpdGgodGFpbCkpIHtcbiAgICAgICAgcGxheWVyMi5zY29yZSsrO1xuICAgICAgICB0aGlzLmxldmVsKys7XG4gICAgICAgIHRoaXMubGV2ZWxPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHdhbGxDcmFzaChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgY29uc3QgY2FudmFzT2JqID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHdpZHRoOiA1MDBcbiAgICB9O1xuXG4gICAgaWYgKCFwbGF5ZXIxLnRhaWxzWzBdLmlzQ29sbGlkaW5nV2l0aChjYW52YXNPYmopKSB7XG4gICAgICBwbGF5ZXIyLnNjb3JlKys7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgICB0aGlzLmxldmVsT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY3Jhc2hJbnRvT3RoZXJQbGF5ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICBwbGF5ZXJUd28udGFpbHMuc2xpY2UoMSkuZm9yRWFjaCh0YWlsID0+IHtcbiAgICAgIGlmIChwbGF5ZXJPbmUudGFpbHNbMF0uaXNDb2xsaWRpbmdXaXRoKHRhaWwpKSB7XG4gICAgICAgIHBsYXllclR3by5zY29yZSsrO1xuICAgICAgICB0aGlzLmxldmVsKys7XG4gICAgICAgIHRoaXMubGV2ZWxPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA8PSBvYmplY3QueCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPD0gb2JqZWN0LnkgfHxcbiAgICAgIHRoaXMueCA+PSBvYmplY3QueCArIG9iamVjdC53aWR0aCB8fFxuICAgICAgdGhpcy55ID49IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodFxuICAgICk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVBpZWNlO1xuIiwiY29uc3QgVGFpbCA9IHJlcXVpcmUoJy4vVGFpbCcpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBTQ0wsIGNvbG9yLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuU0NMID0gU0NMO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc2V0SW5pdGlhbFRhaWwoKTtcbiAgfVxuXG4gIHNldEluaXRpYWxUYWlsKCkge1xuICAgIGNvbnN0IHsgeCwgeSwgU0NMLCBjb2xvciB9ID0gdGhpcztcblxuICAgIHRoaXMudGFpbHMgPSBbbmV3IFRhaWwoeCwgeSwgU0NMLCBTQ0wsIGNvbG9yKV07XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgdGFpbHMgfSA9IHRoaXM7XG5cbiAgICB0YWlscy5tYXAodGFpbCA9PiB7XG4gICAgICB0YWlsLmRyYXcoY3R4KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgY29uc3QgeyBTQ0wsIGNvbG9yLCBkaXJlY3Rpb24gfSA9IHRoaXM7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRhaWxzWzBdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ1JpZ2h0Jykge1xuICAgICAgdGhpcy50YWlscy51bnNoaWZ0KG5ldyBUYWlsKHggKyBTQ0wsIHksIFNDTCwgU0NMLCBjb2xvcikpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnTGVmdCcpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4IC0gU0NMLCB5LCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ1VwJykge1xuICAgICAgdGhpcy50YWlscy51bnNoaWZ0KG5ldyBUYWlsKHgsIHkgLSBTQ0wsIFNDTCwgU0NMLCBjb2xvcikpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnRG93bicpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4LCB5ICsgU0NMLCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG5cbi8vIGNvbnN0IExpZ2h0Q3ljbGUgPSByZXF1aXJlKCcuL0xpZ2h0Q3ljbGUnKTtcblxuLy8gY2xhc3MgUGxheWVyIHtcbi8vICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIHNjb3JlLCBTQ0wsIGNvbG9yLCBkaXJlY3Rpb24pIHtcbi8vICAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WDtcbi8vICAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WTtcbi8vICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4vLyAgICAgdGhpcy5TQ0wgPSBTQ0w7XG4vLyAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuLy8gICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuLy8gICAgIHRoaXMubGlnaHRDeWNsZSA9IG5ldyBMaWdodEN5Y2xlKHN0YXJ0WCwgc3RhcnRZLCBTQ0wsIGNvbG9yLCBkaXJlY3Rpb24pO1xuLy8gICB9XG4vLyB9XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuY2xhc3MgVGFpbCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGFpbDtcbiIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUnKTtcblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZShjYW52YXMuaGVpZ2h0LCBjYW52YXMud2lkdGgsIGN0eCk7XG5cbm5ld0dhbWUubG9hZFBsYXllcnMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMzIgJiYgbmV3R2FtZS5sZXZlbCA9PT0gMCAmJiBuZXdHYW1lLnJlYWR5KSB7XG4gICAgc3RhcnROZXdHYW1lKCk7XG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiBuZXdHYW1lLmxldmVsID4gMCAmJiBuZXdHYW1lLnJlYWR5KSB7XG4gICAgc3RhcnROZXdMZXZlbCgpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIHN0YXJ0TmV3R2FtZSgpIHtcbiAgbmV3R2FtZS5yZWFkeSA9IGZhbHNlO1xuICBjaGFuZ2VDbGFzcygnaW50cm9CYWNrZ3JvdW5kJywgJ3Ryb24zJyk7XG4gIGRpc3BsYXlTY29yZSgpO1xuICBuZXdHYW1lLnN0YXJ0KCk7XG4gIHBsYXlTb25nKCk7XG4gIGRpc3BsYXlXaW5uZXIoKTtcbiAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TmV3TGV2ZWwoKSB7XG4gIG5ld0dhbWUucmVhZHkgPSBmYWxzZTtcbiAgY2hhbmdlQ2xhc3MoJ3Ryb240JywgJ3Ryb24zJyk7XG4gIG5ld0dhbWUubmV3TGV2ZWwoKTtcbiAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyRGlzcGxheSgpIHtcbiAgaWYgKG5ld0dhbWUucGxheWVyc1swXS5zY29yZSA8IDMgJiYgbmV3R2FtZS5wbGF5ZXJzWzFdLnNjb3JlIDwgMykge1xuICAgIGNoYW5nZUNsYXNzKCd0cm9uMycsICd0cm9uNCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbmV3R2FtZS5yZWFkeSA9IHRydWU7XG4gICAgfSwgNTAwKTtcbiAgfSBlbHNlIHtcbiAgICBjaGFuZ2VDbGFzcygndHJvbjMnLCAndHJvbjUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNoYW5nZUNsYXNzKCd0cm9uNScsICdpbnRyb0JhY2tncm91bmQnKTtcbiAgICAgIG5ld0dhbWUucmVhZHkgPSB0cnVlO1xuICAgIH0sIDIwMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzKGNsYXNzMSwgY2xhc3MyKSB7XG4gIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzMSk7XG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG59XG5cbmZ1bmN0aW9uIHBsYXlTb25nKCkge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiMzJcIl1gKTtcblxuICBhdWRpby5sb29wID0gdHJ1ZTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzdG9wU29uZygpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIjMyXCJdYCk7XG5cbiAgYXVkaW8ucGF1c2UoKTtcbn1cblxuZnVuY3Rpb24gZnJhbWVSYXRlKCkge1xuICBsZXQgcmF0ZTtcblxuICBzd2l0Y2ggKG5ld0dhbWUubGV2ZWwpIHtcbiAgY2FzZSAwOlxuICAgIHJhdGUgPSA5MDtcbiAgICBicmVhaztcbiAgY2FzZSAxOlxuICAgIHJhdGUgPSA2MDtcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICByYXRlID0gMzA7XG4gIH1cbiAgcmV0dXJuIHJhdGU7XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKG5ld0dhbWUubGV2ZWxPdmVyKSB7XG4gICAgICBnYW1lT3ZlckRpc3BsYXkoKTtcbiAgICAgIGRpc3BsYXlTY29yZSgpO1xuICAgICAgbmV3R2FtZS5pc0dhbWVPdmVyKG5ld0dhbWUucGxheWVycyk7XG4gICAgICBpZiAobmV3R2FtZS5nYW1lT3Zlcikge1xuICAgICAgICBzdG9wU29uZygpO1xuICAgICAgfVxuICAgICAgZGlzcGxheVdpbm5lcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBuZXdHYW1lLmFuaW1hdGUoY3R4KTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfSwgZnJhbWVSYXRlKCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2NvcmUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxd2lucycpLmlubmVySFRNTCA9IG5ld0dhbWUucGxheWVyc1swXS5zY29yZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjJ3aW5zJykuaW5uZXJIVE1MID0gbmV3R2FtZS5wbGF5ZXJzWzFdLnNjb3JlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWJsb2NrJykuaW5uZXJIVE1MID0gbmV3R2FtZS53aW5uZXI7XG59XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgbGV0IHBPbmVDeWNsZSA9IG5ld0dhbWUucGxheWVyc1swXTtcbiAgbGV0IHBUd29DeWNsZSA9IG5ld0dhbWUucGxheWVyc1sxXTtcblxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICBjYXNlIDM4OiAvLyBVUFxuICAgIGlmIChwVHdvQ3ljbGUuZGlyZWN0aW9uICE9ICdEb3duJykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdVcCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDQwOiAvLyBET1dOXG4gICAgaWYgKHBUd29DeWNsZS5kaXJlY3Rpb24gIT0gJ1VwJykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdEb3duJztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgMzc6IC8vIExFRlRcbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnUmlnaHQnKSB7XG4gICAgICBwVHdvQ3ljbGUuZGlyZWN0aW9uID0gJ0xlZnQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSAzOTogLy8gUklHSFRcbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnTGVmdCcpIHtcbiAgICAgIHBUd29DeWNsZS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA4NzogLy8gVVBcbiAgICBpZiAocE9uZUN5Y2xlLmRpcmVjdGlvbiAhPSAnRG93bicpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnVXAnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA4MzogLy8gRE9XTlxuICAgIGlmIChwT25lQ3ljbGUuZGlyZWN0aW9uICE9ICdVcCcpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnRG93bic7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDY1OiAvLyBMRUZUXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ1JpZ2h0Jykge1xuICAgICAgcE9uZUN5Y2xlLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgNjg6IC8vIFJJR0hUXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ0xlZnQnKSB7XG4gICAgICBwT25lQ3ljbGUuZGlyZWN0aW9uID0gJ1JpZ2h0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gMzgsNDAsMzcsMzlcbi8vIDg3LDgzLCA2NSw2OFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYWRkS2V5SG92ZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCByZW1vdmVLZXlIb3Zlcik7XG5cbmZ1bmN0aW9uIGFkZEtleUhvdmVyKGUpIHtcbiAgY29uc3QgZGlyS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmtleVtkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuXG4gIGlmIChkaXJLZXkpIHtcbiAgICBkaXJLZXkuY2xhc3NMaXN0LmFkZCgna2V5LWhvdmVyJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlS2V5SG92ZXIoZSkge1xuICBjb25zdCBkaXJLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5W2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG5cbiAgaWYgKGRpcktleSkge1xuICAgIGRpcktleS5jbGFzc0xpc3QucmVtb3ZlKCdrZXktaG92ZXInKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==