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


      switch (direction) {
        case 'Right':
          this.tails.unshift(new Tail(x + SCL, y, SCL, SCL, color));
          break;
        case 'Left':
          this.tails.unshift(new Tail(x - SCL, y, SCL, SCL, color));
          break;
        case 'Up':
          this.tails.unshift(new Tail(x, y - SCL, SCL, SCL, color));
          break;
        case 'Down':
          this.tails.unshift(new Tail(x, y + SCL, SCL, SCL, color));
          break;
      }
    }
  }]);

  return Player;
}();

module.exports = Player;

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

document.addEventListener('keydown', addKeyHover);
document.addEventListener('keyup', removeKeyHover);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UYWlsLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiR2FtZSIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwicGxheWVycyIsIlNDTCIsImdhbWVPdmVyIiwibGV2ZWxPdmVyIiwibGV2ZWwiLCJ3aW5uZXIiLCJyZWFkeSIsInBsYXllck9uZSIsInBsYXllclR3byIsInB1c2giLCJwbGF5ZXJzQXJyIiwic2NvcmUiLCJkZWNsYXJlV2lubmVyIiwibG9hZFBsYXllcnMiLCJkaXJlY3Rpb24iLCJzZXRJbml0aWFsVGFpbCIsIngiLCJ5IiwiZHJhdyIsIm1vdmUiLCJzZWxmQ3Jhc2giLCJ3YWxsQ3Jhc2giLCJjcmFzaEludG9PdGhlclBsYXllciIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFpbHMiLCJzbGljZSIsImZvckVhY2giLCJpc0NvbGxpZGluZ1dpdGgiLCJ0YWlsIiwiY2FudmFzT2JqIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWVQaWVjZSIsImNvbG9yIiwib2JqZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJUYWlsIiwibWFwIiwidW5zaGlmdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibmV3R2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0YXJ0TmV3R2FtZSIsInN0YXJ0TmV3TGV2ZWwiLCJrZXlEb3duSGFuZGxlciIsImFkZEtleUhvdmVyIiwicmVtb3ZlS2V5SG92ZXIiLCJjaGFuZ2VDbGFzcyIsImRpc3BsYXlTY29yZSIsInN0YXJ0IiwicGxheVNvbmciLCJkaXNwbGF5V2lubmVyIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwibmV3TGV2ZWwiLCJnYW1lT3ZlckRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiY2xlYXJSZWN0IiwiY2xhc3MxIiwiY2xhc3MyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYXVkaW8iLCJxdWVyeVNlbGVjdG9yIiwibG9vcCIsInBsYXkiLCJzdG9wU29uZyIsInBhdXNlIiwiZnJhbWVSYXRlIiwicmF0ZSIsIndpbmRvdyIsImlzR2FtZU92ZXIiLCJpbm5lckhUTUwiLCJkaXJLZXkiLCJwT25lQ3ljbGUiLCJwVHdvQ3ljbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpQ0FBUixDQUFmOztJQUVNQyxJO0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUFBOztBQUM5QixTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtHLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRDs7OztrQ0FFYTtBQUFBLFVBQ0pMLEdBREksR0FDSSxJQURKLENBQ0pBLEdBREk7O0FBRVosVUFBTU0sWUFBWSxJQUFJYixNQUFKLENBQVcsRUFBWCxFQUFlLEdBQWYsRUFBb0JPLEdBQXBCLEVBQXlCLFNBQXpCLEVBQW9DLE9BQXBDLENBQWxCO0FBQ0EsVUFBTU8sWUFBWSxJQUFJZCxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQk8sR0FBckIsRUFBMEIsU0FBMUIsRUFBcUMsTUFBckMsQ0FBbEI7O0FBRUEsV0FBS0QsT0FBTCxDQUFhUyxJQUFiLENBQWtCRixTQUFsQjtBQUNBLFdBQUtQLE9BQUwsQ0FBYVMsSUFBYixDQUFrQkQsU0FBbEI7QUFDRDs7OytCQUVVRSxVLEVBQVk7QUFDckIsVUFBSUEsV0FBVyxDQUFYLEVBQWNDLEtBQWQsR0FBc0IsQ0FBdEIsSUFBMkJELFdBQVcsQ0FBWCxFQUFjQyxLQUFkLEdBQXNCLENBQXJELEVBQXdEO0FBQ3RELGFBQUtULFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxhQUFLVSxhQUFMLENBQW1CRixVQUFuQjtBQUNBLGFBQUtOLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBS0osT0FBTCxHQUFlLEVBQWY7QUFDQSxhQUFLYSxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhSCxVLEVBQVk7QUFDeEIsVUFBSUEsV0FBVyxDQUFYLEVBQWNDLEtBQWQsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsYUFBS04sTUFBTDtBQUNELE9BRkQsTUFFTyxJQUFJSyxXQUFXLENBQVgsRUFBY0MsS0FBZCxHQUFzQixDQUExQixFQUE2QjtBQUNsQyxhQUFLTixNQUFMO0FBQ0Q7QUFDRjs7OzRCQUVPO0FBQ04sV0FBS0YsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtELFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLRyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtMLE9BQUwsQ0FBYSxDQUFiLEVBQWdCYyxTQUFoQixHQUE0QixPQUE1QjtBQUNBLFdBQUtkLE9BQUwsQ0FBYSxDQUFiLEVBQWdCYyxTQUFoQixHQUE0QixNQUE1QjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLWCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBS0gsT0FBTCxDQUFhLENBQWIsRUFBZ0JlLGNBQWhCO0FBQ0EsV0FBS2YsT0FBTCxDQUFhLENBQWIsRUFBZ0JlLGNBQWhCO0FBQ0EsV0FBS2YsT0FBTCxDQUFhLENBQWIsRUFBZ0JnQixDQUFoQixHQUFvQixFQUFwQjtBQUNBLFdBQUtoQixPQUFMLENBQWEsQ0FBYixFQUFnQmlCLENBQWhCLEdBQW9CLEdBQXBCO0FBQ0EsV0FBS2pCLE9BQUwsQ0FBYSxDQUFiLEVBQWdCZ0IsQ0FBaEIsR0FBb0IsR0FBcEI7QUFDQSxXQUFLaEIsT0FBTCxDQUFhLENBQWIsRUFBZ0JpQixDQUFoQixHQUFvQixHQUFwQjtBQUNBLFdBQUtqQixPQUFMLENBQWEsQ0FBYixFQUFnQmMsU0FBaEIsR0FBNEIsT0FBNUI7QUFDQSxXQUFLZCxPQUFMLENBQWEsQ0FBYixFQUFnQmMsU0FBaEIsR0FBNEIsTUFBNUI7QUFDRDs7OzRCQUVPZixHLEVBQUs7QUFDWCxVQUFNUSxZQUFZLEtBQUtQLE9BQUwsQ0FBYSxDQUFiLENBQWxCOztBQUVBTyxnQkFBVVcsSUFBVixDQUFlbkIsR0FBZjtBQUNBUSxnQkFBVVksSUFBVjs7QUFFQSxVQUFNWCxZQUFZLEtBQUtSLE9BQUwsQ0FBYSxDQUFiLENBQWxCOztBQUVBUSxnQkFBVVUsSUFBVixDQUFlbkIsR0FBZjtBQUNBUyxnQkFBVVcsSUFBVjs7QUFFQSxXQUFLQyxTQUFMLENBQWViLFNBQWYsRUFBMEJDLFNBQTFCO0FBQ0EsV0FBS1ksU0FBTCxDQUFlWixTQUFmLEVBQTBCRCxTQUExQjs7QUFFQSxXQUFLYyxTQUFMLENBQWVkLFNBQWYsRUFBMEJDLFNBQTFCO0FBQ0EsV0FBS2EsU0FBTCxDQUFlYixTQUFmLEVBQTBCRCxTQUExQjs7QUFFQSxXQUFLZSxvQkFBTCxDQUEwQmYsU0FBMUIsRUFBcUNDLFNBQXJDO0FBQ0EsV0FBS2Msb0JBQUwsQ0FBMEJkLFNBQTFCLEVBQXFDRCxTQUFyQztBQUNEOzs7OEJBRVNnQixPLEVBQVNDLE8sRUFBUztBQUFBOztBQUMxQkQsY0FBUUUsS0FBUixDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxPQUF2QixDQUErQixnQkFBUTtBQUNyQyxZQUFJSixRQUFRRSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsZUFBakIsQ0FBaUNDLElBQWpDLENBQUosRUFBNEM7QUFDMUNMLGtCQUFRYixLQUFSO0FBQ0EsZ0JBQUtQLEtBQUw7QUFDQSxnQkFBS0QsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7OEJBRVNvQixPLEVBQVNDLE8sRUFBUztBQUMxQixVQUFNTSxZQUFZO0FBQ2hCZCxXQUFHLENBRGE7QUFFaEJDLFdBQUcsQ0FGYTtBQUdoQnBCLGdCQUFRLEdBSFE7QUFJaEJDLGVBQU87QUFKUyxPQUFsQjs7QUFPQSxVQUFJLENBQUN5QixRQUFRRSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsZUFBakIsQ0FBaUNFLFNBQWpDLENBQUwsRUFBa0Q7QUFDaEROLGdCQUFRYixLQUFSO0FBQ0EsYUFBS1AsS0FBTDtBQUNBLGFBQUtELFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGOzs7eUNBRW9CSSxTLEVBQVdDLFMsRUFBVztBQUFBOztBQUN6Q0EsZ0JBQVVpQixLQUFWLENBQWdCQyxLQUFoQixDQUFzQixDQUF0QixFQUF5QkMsT0FBekIsQ0FBaUMsZ0JBQVE7QUFDdkMsWUFBSXBCLFVBQVVrQixLQUFWLENBQWdCLENBQWhCLEVBQW1CRyxlQUFuQixDQUFtQ0MsSUFBbkMsQ0FBSixFQUE4QztBQUM1Q3JCLG9CQUFVRyxLQUFWO0FBQ0EsaUJBQUtQLEtBQUw7QUFDQSxpQkFBS0QsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7Ozs7QUFHSDRCLE9BQU9DLE9BQVAsR0FBaUJwQyxJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4SE1xQyxTO0FBQ0oscUJBQVlqQixDQUFaLEVBQWVDLENBQWYsRUFBa0JwQixNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNvQyxLQUFqQyxFQUF3QztBQUFBOztBQUN0QyxTQUFLbEIsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3BCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtvQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztvQ0FFZUMsTSxFQUFRO0FBQ3RCLGFBQU8sRUFDTCxLQUFLbkIsQ0FBTCxHQUFTLEtBQUtsQixLQUFkLElBQXVCcUMsT0FBT25CLENBQTlCLElBQ0EsS0FBS0MsQ0FBTCxHQUFTLEtBQUtwQixNQUFkLElBQXdCc0MsT0FBT2xCLENBRC9CLElBRUEsS0FBS0QsQ0FBTCxJQUFVbUIsT0FBT25CLENBQVAsR0FBV21CLE9BQU9yQyxLQUY1QixJQUdBLEtBQUttQixDQUFMLElBQVVrQixPQUFPbEIsQ0FBUCxHQUFXa0IsT0FBT3RDLE1BSnZCLENBQVA7QUFNRDs7O3lCQUVJRSxHLEVBQUs7QUFBQSxVQUNBaUIsQ0FEQSxHQUMrQixJQUQvQixDQUNBQSxDQURBO0FBQUEsVUFDR0MsQ0FESCxHQUMrQixJQUQvQixDQUNHQSxDQURIO0FBQUEsVUFDTXBCLE1BRE4sR0FDK0IsSUFEL0IsQ0FDTUEsTUFETjtBQUFBLFVBQ2NDLEtBRGQsR0FDK0IsSUFEL0IsQ0FDY0EsS0FEZDtBQUFBLFVBQ3FCb0MsS0FEckIsR0FDK0IsSUFEL0IsQ0FDcUJBLEtBRHJCOzs7QUFHUm5DLFVBQUlxQyxTQUFKLEdBQWdCRixLQUFoQjtBQUNBbkMsVUFBSXNDLFFBQUosQ0FBYXJCLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CbkIsS0FBbkIsRUFBMEJELE1BQTFCO0FBQ0Q7Ozs7OztBQUdIa0MsT0FBT0MsT0FBUCxHQUFpQkMsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLElBQU1LLE9BQU8sbUJBQUEzQyxDQUFRLDZCQUFSLENBQWI7O0lBRU1ELE07QUFDSixrQkFBWXNCLENBQVosRUFBZUMsQ0FBZixFQUFrQmhCLEdBQWxCLEVBQXVCaUMsS0FBdkIsRUFBOEJwQixTQUE5QixFQUF5QztBQUFBOztBQUN2QyxTQUFLRSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLaUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2pDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUthLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0gsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLSSxjQUFMO0FBQ0Q7Ozs7cUNBRWdCO0FBQUEsVUFDUEMsQ0FETyxHQUNjLElBRGQsQ0FDUEEsQ0FETztBQUFBLFVBQ0pDLENBREksR0FDYyxJQURkLENBQ0pBLENBREk7QUFBQSxVQUNEaEIsR0FEQyxHQUNjLElBRGQsQ0FDREEsR0FEQztBQUFBLFVBQ0lpQyxLQURKLEdBQ2MsSUFEZCxDQUNJQSxLQURKOzs7QUFHZixXQUFLVCxLQUFMLEdBQWEsQ0FBQyxJQUFJYSxJQUFKLENBQVN0QixDQUFULEVBQVlDLENBQVosRUFBZWhCLEdBQWYsRUFBb0JBLEdBQXBCLEVBQXlCaUMsS0FBekIsQ0FBRCxDQUFiO0FBQ0Q7Ozt5QkFFSW5DLEcsRUFBSztBQUFBLFVBQ0EwQixLQURBLEdBQ1UsSUFEVixDQUNBQSxLQURBOzs7QUFHUkEsWUFBTWMsR0FBTixDQUFVLGdCQUFRO0FBQ2hCVixhQUFLWCxJQUFMLENBQVVuQixHQUFWO0FBQ0QsT0FGRDtBQUdEOzs7MkJBRU07QUFBQSxVQUNHRSxHQURILEdBQzZCLElBRDdCLENBQ0dBLEdBREg7QUFBQSxVQUNRaUMsS0FEUixHQUM2QixJQUQ3QixDQUNRQSxLQURSO0FBQUEsVUFDZXBCLFNBRGYsR0FDNkIsSUFEN0IsQ0FDZUEsU0FEZjtBQUFBLG9CQUVZLEtBQUtXLEtBQUwsQ0FBVyxDQUFYLENBRlo7QUFBQSxVQUVHVCxDQUZILFdBRUdBLENBRkg7QUFBQSxVQUVNQyxDQUZOLFdBRU1BLENBRk47OztBQUlMLGNBQVFILFNBQVI7QUFDQSxhQUFLLE9BQUw7QUFDRSxlQUFLVyxLQUFMLENBQVdlLE9BQVgsQ0FBbUIsSUFBSUYsSUFBSixDQUFTdEIsSUFBSWYsR0FBYixFQUFrQmdCLENBQWxCLEVBQXFCaEIsR0FBckIsRUFBMEJBLEdBQTFCLEVBQStCaUMsS0FBL0IsQ0FBbkI7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFLGVBQUtULEtBQUwsQ0FBV2UsT0FBWCxDQUFtQixJQUFJRixJQUFKLENBQVN0QixJQUFJZixHQUFiLEVBQWtCZ0IsQ0FBbEIsRUFBcUJoQixHQUFyQixFQUEwQkEsR0FBMUIsRUFBK0JpQyxLQUEvQixDQUFuQjtBQUNBO0FBQ0YsYUFBSyxJQUFMO0FBQ0UsZUFBS1QsS0FBTCxDQUFXZSxPQUFYLENBQW1CLElBQUlGLElBQUosQ0FBU3RCLENBQVQsRUFBWUMsSUFBSWhCLEdBQWhCLEVBQXFCQSxHQUFyQixFQUEwQkEsR0FBMUIsRUFBK0JpQyxLQUEvQixDQUFuQjtBQUNBO0FBQ0YsYUFBSyxNQUFMO0FBQ0UsZUFBS1QsS0FBTCxDQUFXZSxPQUFYLENBQW1CLElBQUlGLElBQUosQ0FBU3RCLENBQVQsRUFBWUMsSUFBSWhCLEdBQWhCLEVBQXFCQSxHQUFyQixFQUEwQkEsR0FBMUIsRUFBK0JpQyxLQUEvQixDQUFuQjtBQUNBO0FBWkY7QUFjRDs7Ozs7O0FBR0hILE9BQU9DLE9BQVAsR0FBaUJ0QyxNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQSxJQUFNdUMsWUFBWSxtQkFBQXRDLENBQVEsdUNBQVIsQ0FBbEI7O0lBRU0yQyxJOzs7QUFDSixnQkFBWXRCLENBQVosRUFBZUMsQ0FBZixFQUFrQnBCLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ29DLEtBQWpDLEVBQXdDO0FBQUE7O0FBQUEsdUdBQ2hDbEIsQ0FEZ0MsRUFDN0JDLENBRDZCLEVBQzFCcEIsTUFEMEIsRUFDbEJDLEtBRGtCLEVBQ1hvQyxLQURXO0FBRXZDOzs7RUFIZ0JELFM7O0FBTW5CRixPQUFPQyxPQUFQLEdBQWlCTSxJQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ1JBLElBQU0xQyxPQUFPLG1CQUFBRCxDQUFRLDZCQUFSLENBQWI7O0FBRUEsSUFBSThDLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLElBQUk1QyxNQUFNMEMsT0FBT0csVUFBUCxDQUFrQixJQUFsQixDQUFWOztBQUVBLElBQU1DLFVBQVUsSUFBSWpELElBQUosQ0FBUzZDLE9BQU81QyxNQUFoQixFQUF3QjRDLE9BQU8zQyxLQUEvQixFQUFzQ0MsR0FBdEMsQ0FBaEI7O0FBRUE4QyxRQUFRaEMsV0FBUjs7QUFFQTZCLFNBQVNJLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVNDLENBQVQsRUFBWTtBQUMvQyxNQUFJQSxFQUFFQyxPQUFGLEtBQWMsRUFBZCxJQUFvQkgsUUFBUXpDLEtBQVIsS0FBa0IsQ0FBdEMsSUFBMkN5QyxRQUFRdkMsS0FBdkQsRUFBOEQ7QUFDNUQyQztBQUNELEdBRkQsTUFFTyxJQUFJRixFQUFFQyxPQUFGLEtBQWMsRUFBZCxJQUFvQkgsUUFBUXpDLEtBQVIsR0FBZ0IsQ0FBcEMsSUFBeUN5QyxRQUFRdkMsS0FBckQsRUFBNEQ7QUFDakU0QztBQUNEO0FBQ0YsQ0FORDs7QUFRQVIsU0FBU0ksZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNLLGNBQXJDLEVBQXFELEtBQXJEOztBQUVBVCxTQUFTSSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ00sV0FBckM7QUFDQVYsU0FBU0ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNPLGNBQW5DOztBQUVBLFNBQVNKLFlBQVQsR0FBd0I7QUFDdEJKLFVBQVF2QyxLQUFSLEdBQWdCLEtBQWhCO0FBQ0FnRCxjQUFZLGlCQUFaLEVBQStCLE9BQS9CO0FBQ0FDO0FBQ0FWLFVBQVFXLEtBQVI7QUFDQUM7QUFDQUM7QUFDQWIsVUFBUWMsT0FBUixDQUFnQjVELEdBQWhCO0FBQ0E2RCx3QkFBc0JDLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBU1gsYUFBVCxHQUF5QjtBQUN2QkwsVUFBUXZDLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQWdELGNBQVksT0FBWixFQUFxQixPQUFyQjtBQUNBVCxVQUFRaUIsUUFBUjtBQUNBakIsVUFBUWMsT0FBUixDQUFnQjVELEdBQWhCO0FBQ0E2RCx3QkFBc0JDLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBU0UsZUFBVCxHQUEyQjtBQUN6QixNQUFJbEIsUUFBUTdDLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJXLEtBQW5CLEdBQTJCLENBQTNCLElBQWdDa0MsUUFBUTdDLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJXLEtBQW5CLEdBQTJCLENBQS9ELEVBQWtFO0FBQ2hFMkMsZ0JBQVksT0FBWixFQUFxQixPQUFyQjtBQUNBVSxlQUFXLFlBQU07QUFDZm5CLGNBQVF2QyxLQUFSLEdBQWdCLElBQWhCO0FBQ0QsS0FGRCxFQUVHLEdBRkg7QUFHRCxHQUxELE1BS087QUFDTGdELGdCQUFZLE9BQVosRUFBcUIsT0FBckI7QUFDQVUsZUFBVyxZQUFNO0FBQ2ZqRSxVQUFJa0UsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J4QixPQUFPM0MsS0FBM0IsRUFBa0MyQyxPQUFPNUMsTUFBekM7QUFDQXlELGtCQUFZLE9BQVosRUFBcUIsaUJBQXJCO0FBQ0FULGNBQVF2QyxLQUFSLEdBQWdCLElBQWhCO0FBQ0QsS0FKRCxFQUlHLElBSkg7QUFLRDtBQUNGOztBQUVELFNBQVNnRCxXQUFULENBQXFCWSxNQUFyQixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDbkMxQixTQUFPMkIsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0JILE1BQXhCO0FBQ0F6QixTQUFPMkIsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUJILE1BQXJCO0FBQ0Q7O0FBRUQsU0FBU1YsUUFBVCxHQUFvQjtBQUNsQixNQUFNYyxRQUFRN0IsU0FBUzhCLGFBQVQsd0JBQWQ7O0FBRUFELFFBQU1FLElBQU4sR0FBYSxJQUFiO0FBQ0FGLFFBQU1HLElBQU47QUFDRDs7QUFFRCxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLE1BQU1KLFFBQVE3QixTQUFTOEIsYUFBVCx3QkFBZDs7QUFFQUQsUUFBTUssS0FBTjtBQUNEOztBQUVELFNBQVNDLFNBQVQsR0FBcUI7QUFDbkIsTUFBSUMsYUFBSjs7QUFFQSxVQUFRakMsUUFBUXpDLEtBQWhCO0FBQ0EsU0FBSyxDQUFMO0FBQ0UwRSxhQUFPLEVBQVA7QUFDQTtBQUNGLFNBQUssQ0FBTDtBQUNFQSxhQUFPLEVBQVA7QUFDQTtBQUNGO0FBQ0VBLGFBQU8sRUFBUDtBQVJGO0FBVUEsU0FBT0EsSUFBUDtBQUNEOztBQUVELFNBQVNqQixRQUFULEdBQW9CO0FBQ2xCa0IsU0FBT2YsVUFBUCxDQUFrQixZQUFNO0FBQ3RCLFFBQUluQixRQUFRMUMsU0FBWixFQUF1QjtBQUNyQjREO0FBQ0FSO0FBQ0FWLGNBQVFtQyxVQUFSLENBQW1CbkMsUUFBUTdDLE9BQTNCO0FBQ0EsVUFBSTZDLFFBQVEzQyxRQUFaLEVBQXNCO0FBQ3BCeUU7QUFDRDtBQUNEakI7QUFDQTtBQUNELEtBVEQsTUFTTztBQUNMM0QsVUFBSWtFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CeEIsT0FBTzNDLEtBQTNCLEVBQWtDMkMsT0FBTzVDLE1BQXpDO0FBQ0FnRCxjQUFRYyxPQUFSLENBQWdCNUQsR0FBaEI7QUFDRDtBQUNENkQsMEJBQXNCQyxRQUF0QjtBQUNELEdBZkQsRUFlR2dCLFdBZkg7QUFnQkQ7O0FBRUQsU0FBU3RCLFlBQVQsR0FBd0I7QUFDdEJiLFdBQVM4QixhQUFULENBQXVCLGNBQXZCLEVBQXVDUyxTQUF2QyxHQUFtRHBDLFFBQVE3QyxPQUFSLENBQWdCLENBQWhCLEVBQW1CVyxLQUF0RTtBQUNBK0IsV0FBUzhCLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNTLFNBQXZDLEdBQW1EcEMsUUFBUTdDLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJXLEtBQXRFO0FBQ0Q7O0FBRUQsU0FBUytDLGFBQVQsR0FBeUI7QUFDdkJoQixXQUFTOEIsYUFBVCxDQUF1QixlQUF2QixFQUF3Q1MsU0FBeEMsR0FBb0RwQyxRQUFReEMsTUFBNUQ7QUFDRDs7QUFFRCxTQUFTK0MsV0FBVCxDQUFxQkwsQ0FBckIsRUFBd0I7QUFDdEIsTUFBTW1DLFNBQVN4QyxTQUFTOEIsYUFBVCxxQkFBeUN6QixFQUFFQyxPQUEzQyxRQUFmOztBQUVBLE1BQUlrQyxNQUFKLEVBQVk7QUFDVkEsV0FBT2QsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsV0FBckI7QUFDRDtBQUNGOztBQUVELFNBQVNqQixjQUFULENBQXdCTixDQUF4QixFQUEyQjtBQUN6QixNQUFNbUMsU0FBU3hDLFNBQVM4QixhQUFULHFCQUF5Q3pCLEVBQUVDLE9BQTNDLFFBQWY7O0FBRUEsTUFBSWtDLE1BQUosRUFBWTtBQUNWQSxXQUFPZCxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixXQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU2xCLGNBQVQsQ0FBd0JKLENBQXhCLEVBQTJCO0FBQ3pCLE1BQUlvQyxZQUFZdEMsUUFBUTdDLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQSxNQUFJb0YsWUFBWXZDLFFBQVE3QyxPQUFSLENBQWdCLENBQWhCLENBQWhCOztBQUVBLFVBQVErQyxFQUFFQyxPQUFWO0FBQ0EsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJb0MsVUFBVXRFLFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakNzRSxrQkFBVXRFLFNBQVYsR0FBc0IsSUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJc0UsVUFBVXRFLFNBQVYsSUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JzRSxrQkFBVXRFLFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJc0UsVUFBVXRFLFNBQVYsSUFBdUIsT0FBM0IsRUFBb0M7QUFDbENzRSxrQkFBVXRFLFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJc0UsVUFBVXRFLFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakNzRSxrQkFBVXRFLFNBQVYsR0FBc0IsT0FBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJcUUsVUFBVXJFLFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakNxRSxrQkFBVXJFLFNBQVYsR0FBc0IsSUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJcUUsVUFBVXJFLFNBQVYsSUFBdUIsSUFBM0IsRUFBaUM7QUFDL0JxRSxrQkFBVXJFLFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJcUUsVUFBVXJFLFNBQVYsSUFBdUIsT0FBM0IsRUFBb0M7QUFDbENxRSxrQkFBVXJFLFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJcUUsVUFBVXJFLFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakNxRSxrQkFBVXJFLFNBQVYsR0FBc0IsT0FBdEI7QUFDRDtBQUNEO0FBeENGO0FBMENELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjdHgpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5TQ0wgPSAxMDtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLndpbm5lciA9ICcnO1xuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgbG9hZFBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBTQ0wgfSA9IHRoaXM7XG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcig3MCwgMjMwLCBTQ0wsICcjMUIzM0Y1JywgJ1JpZ2h0Jyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcig0MjAsIDIzMCwgU0NMLCAnI0RDNEJGNycsICdMZWZ0Jyk7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllclR3byk7XG4gIH1cblxuICBpc0dhbWVPdmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIgfHwgcGxheWVyc0FyclsxXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5kZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpO1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgIHRoaXMubG9hZFBsYXllcnMoKTtcbiAgICB9XG4gIH1cblxuICBkZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMud2lubmVyID0gYFBsYXllciAxIFZpY3RvcnkhYDtcbiAgICB9IGVsc2UgaWYgKHBsYXllcnNBcnJbMV0uc2NvcmUgPiAyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IGBQbGF5ZXIgMiBWaWN0b3J5IWA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSAnJztcbiAgICB0aGlzLnBsYXllcnNbMF0uZGlyZWN0aW9uID0gJ1JpZ2h0JztcbiAgICB0aGlzLnBsYXllcnNbMV0uZGlyZWN0aW9uID0gJ0xlZnQnO1xuICB9XG5cbiAgbmV3TGV2ZWwoKSB7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllcnNbMF0uc2V0SW5pdGlhbFRhaWwoKTtcbiAgICB0aGlzLnBsYXllcnNbMV0uc2V0SW5pdGlhbFRhaWwoKTtcbiAgICB0aGlzLnBsYXllcnNbMF0ueCA9IDcwO1xuICAgIHRoaXMucGxheWVyc1swXS55ID0gMjMwO1xuICAgIHRoaXMucGxheWVyc1sxXS54ID0gNDIwO1xuICAgIHRoaXMucGxheWVyc1sxXS55ID0gMjMwO1xuICAgIHRoaXMucGxheWVyc1swXS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIHRoaXMucGxheWVyc1sxXS5kaXJlY3Rpb24gPSAnTGVmdCc7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IHRoaXMucGxheWVyc1swXTtcblxuICAgIHBsYXllck9uZS5kcmF3KGN0eCk7XG4gICAgcGxheWVyT25lLm1vdmUoKTtcblxuICAgIGNvbnN0IHBsYXllclR3byA9IHRoaXMucGxheWVyc1sxXTtcblxuICAgIHBsYXllclR3by5kcmF3KGN0eCk7XG4gICAgcGxheWVyVHdvLm1vdmUoKTtcblxuICAgIHRoaXMuc2VsZkNyYXNoKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB0aGlzLnNlbGZDcmFzaChwbGF5ZXJUd28sIHBsYXllck9uZSk7XG5cbiAgICB0aGlzLndhbGxDcmFzaChwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgdGhpcy53YWxsQ3Jhc2gocGxheWVyVHdvLCBwbGF5ZXJPbmUpO1xuXG4gICAgdGhpcy5jcmFzaEludG9PdGhlclBsYXllcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgdGhpcy5jcmFzaEludG9PdGhlclBsYXllcihwbGF5ZXJUd28sIHBsYXllck9uZSk7XG4gIH1cblxuICBzZWxmQ3Jhc2gocGxheWVyMSwgcGxheWVyMikge1xuICAgIHBsYXllcjEudGFpbHMuc2xpY2UoMSkuZm9yRWFjaCh0YWlsID0+IHtcbiAgICAgIGlmIChwbGF5ZXIxLnRhaWxzWzBdLmlzQ29sbGlkaW5nV2l0aCh0YWlsKSkge1xuICAgICAgICBwbGF5ZXIyLnNjb3JlKys7XG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgdGhpcy5sZXZlbE92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgd2FsbENyYXNoKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBjb25zdCBjYW52YXNPYmogPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMFxuICAgIH07XG5cbiAgICBpZiAoIXBsYXllcjEudGFpbHNbMF0uaXNDb2xsaWRpbmdXaXRoKGNhbnZhc09iaikpIHtcbiAgICAgIHBsYXllcjIuc2NvcmUrKztcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgIHRoaXMubGV2ZWxPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjcmFzaEludG9PdGhlclBsYXllcihwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICAgIHBsYXllclR3by50YWlscy5zbGljZSgxKS5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHBsYXllck9uZS50YWlsc1swXS5pc0NvbGxpZGluZ1dpdGgodGFpbCkpIHtcbiAgICAgICAgcGxheWVyVHdvLnNjb3JlKys7XG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgdGhpcy5sZXZlbE92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDw9IG9iamVjdC54IHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8PSBvYmplY3QueSB8fFxuICAgICAgdGhpcy54ID49IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8XG4gICAgICB0aGlzLnkgPj0gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lUGllY2U7XG4iLCJjb25zdCBUYWlsID0gcmVxdWlyZSgnLi9UYWlsJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIFNDTCwgY29sb3IsIGRpcmVjdGlvbikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5TQ0wgPSBTQ0w7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5zZXRJbml0aWFsVGFpbCgpO1xuICB9XG5cbiAgc2V0SW5pdGlhbFRhaWwoKSB7XG4gICAgY29uc3QgeyB4LCB5LCBTQ0wsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgdGhpcy50YWlscyA9IFtuZXcgVGFpbCh4LCB5LCBTQ0wsIFNDTCwgY29sb3IpXTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB0YWlscyB9ID0gdGhpcztcblxuICAgIHRhaWxzLm1hcCh0YWlsID0+IHtcbiAgICAgIHRhaWwuZHJhdyhjdHgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBjb25zdCB7IFNDTCwgY29sb3IsIGRpcmVjdGlvbiB9ID0gdGhpcztcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudGFpbHNbMF07XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ1JpZ2h0JzpcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4ICsgU0NMLCB5LCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgdGhpcy50YWlscy51bnNoaWZ0KG5ldyBUYWlsKHggLSBTQ0wsIHksIFNDTCwgU0NMLCBjb2xvcikpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnVXAnOlxuICAgICAgdGhpcy50YWlscy51bnNoaWZ0KG5ldyBUYWlsKHgsIHkgLSBTQ0wsIFNDTCwgU0NMLCBjb2xvcikpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRG93bic6XG4gICAgICB0aGlzLnRhaWxzLnVuc2hpZnQobmV3IFRhaWwoeCwgeSArIFNDTCwgU0NMLCBTQ0wsIGNvbG9yKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5jbGFzcyBUYWlsIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYWlsO1xuIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGNhbnZhcy5oZWlnaHQsIGNhbnZhcy53aWR0aCwgY3R4KTtcblxubmV3R2FtZS5sb2FkUGxheWVycygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiBuZXdHYW1lLmxldmVsID09PSAwICYmIG5ld0dhbWUucmVhZHkpIHtcbiAgICBzdGFydE5ld0dhbWUoKTtcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyICYmIG5ld0dhbWUubGV2ZWwgPiAwICYmIG5ld0dhbWUucmVhZHkpIHtcbiAgICBzdGFydE5ld0xldmVsKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFkZEtleUhvdmVyKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcmVtb3ZlS2V5SG92ZXIpO1xuXG5mdW5jdGlvbiBzdGFydE5ld0dhbWUoKSB7XG4gIG5ld0dhbWUucmVhZHkgPSBmYWxzZTtcbiAgY2hhbmdlQ2xhc3MoJ2ludHJvQmFja2dyb3VuZCcsICd0cm9uMycpO1xuICBkaXNwbGF5U2NvcmUoKTtcbiAgbmV3R2FtZS5zdGFydCgpO1xuICBwbGF5U29uZygpO1xuICBkaXNwbGF5V2lubmVyKCk7XG4gIG5ld0dhbWUuYW5pbWF0ZShjdHgpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5mdW5jdGlvbiBzdGFydE5ld0xldmVsKCkge1xuICBuZXdHYW1lLnJlYWR5ID0gZmFsc2U7XG4gIGNoYW5nZUNsYXNzKCd0cm9uNCcsICd0cm9uMycpO1xuICBuZXdHYW1lLm5ld0xldmVsKCk7XG4gIG5ld0dhbWUuYW5pbWF0ZShjdHgpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5mdW5jdGlvbiBnYW1lT3ZlckRpc3BsYXkoKSB7XG4gIGlmIChuZXdHYW1lLnBsYXllcnNbMF0uc2NvcmUgPCAzICYmIG5ld0dhbWUucGxheWVyc1sxXS5zY29yZSA8IDMpIHtcbiAgICBjaGFuZ2VDbGFzcygndHJvbjMnLCAndHJvbjQnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5ld0dhbWUucmVhZHkgPSB0cnVlO1xuICAgIH0sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlQ2xhc3MoJ3Ryb24zJywgJ3Ryb241Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjaGFuZ2VDbGFzcygndHJvbjUnLCAnaW50cm9CYWNrZ3JvdW5kJyk7XG4gICAgICBuZXdHYW1lLnJlYWR5ID0gdHJ1ZTtcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzcyhjbGFzczEsIGNsYXNzMikge1xuICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzczEpO1xuICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzczIpO1xufVxuXG5mdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIjMyXCJdYCk7XG5cbiAgYXVkaW8ubG9vcCA9IHRydWU7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3RvcFNvbmcoKSB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIzMlwiXWApO1xuXG4gIGF1ZGlvLnBhdXNlKCk7XG59XG5cbmZ1bmN0aW9uIGZyYW1lUmF0ZSgpIHtcbiAgbGV0IHJhdGU7XG5cbiAgc3dpdGNoIChuZXdHYW1lLmxldmVsKSB7XG4gIGNhc2UgMDpcbiAgICByYXRlID0gOTA7XG4gICAgYnJlYWs7XG4gIGNhc2UgMTpcbiAgICByYXRlID0gNjA7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gICAgcmF0ZSA9IDMwO1xuICB9XG4gIHJldHVybiByYXRlO1xufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChuZXdHYW1lLmxldmVsT3Zlcikge1xuICAgICAgZ2FtZU92ZXJEaXNwbGF5KCk7XG4gICAgICBkaXNwbGF5U2NvcmUoKTtcbiAgICAgIG5ld0dhbWUuaXNHYW1lT3ZlcihuZXdHYW1lLnBsYXllcnMpO1xuICAgICAgaWYgKG5ld0dhbWUuZ2FtZU92ZXIpIHtcbiAgICAgICAgc3RvcFNvbmcoKTtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlXaW5uZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH0sIGZyYW1lUmF0ZSgpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNjb3JlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMXdpbnMnKS5pbm5lckhUTUwgPSBuZXdHYW1lLnBsYXllcnNbMF0uc2NvcmU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyd2lucycpLmlubmVySFRNTCA9IG5ld0dhbWUucGxheWVyc1sxXS5zY29yZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1ibG9jaycpLmlubmVySFRNTCA9IG5ld0dhbWUud2lubmVyO1xufVxuXG5mdW5jdGlvbiBhZGRLZXlIb3ZlcihlKSB7XG4gIGNvbnN0IGRpcktleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXlbZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcblxuICBpZiAoZGlyS2V5KSB7XG4gICAgZGlyS2V5LmNsYXNzTGlzdC5hZGQoJ2tleS1ob3ZlcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUtleUhvdmVyKGUpIHtcbiAgY29uc3QgZGlyS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmtleVtkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuXG4gIGlmIChkaXJLZXkpIHtcbiAgICBkaXJLZXkuY2xhc3NMaXN0LnJlbW92ZSgna2V5LWhvdmVyJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICBsZXQgcE9uZUN5Y2xlID0gbmV3R2FtZS5wbGF5ZXJzWzBdO1xuICBsZXQgcFR3b0N5Y2xlID0gbmV3R2FtZS5wbGF5ZXJzWzFdO1xuXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gIGNhc2UgMzg6IC8vIFVQXG4gICAgaWYgKHBUd29DeWNsZS5kaXJlY3Rpb24gIT0gJ0Rvd24nKSB7XG4gICAgICBwVHdvQ3ljbGUuZGlyZWN0aW9uID0gJ1VwJztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgNDA6IC8vIERPV05cbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnVXAnKSB7XG4gICAgICBwVHdvQ3ljbGUuZGlyZWN0aW9uID0gJ0Rvd24nO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSAzNzogLy8gTEVGVFxuICAgIGlmIChwVHdvQ3ljbGUuZGlyZWN0aW9uICE9ICdSaWdodCcpIHtcbiAgICAgIHBUd29DeWNsZS5kaXJlY3Rpb24gPSAnTGVmdCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDM5OiAvLyBSSUdIVFxuICAgIGlmIChwVHdvQ3ljbGUuZGlyZWN0aW9uICE9ICdMZWZ0Jykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdSaWdodCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDg3OiAvLyBVUFxuICAgIGlmIChwT25lQ3ljbGUuZGlyZWN0aW9uICE9ICdEb3duJykge1xuICAgICAgcE9uZUN5Y2xlLmRpcmVjdGlvbiA9ICdVcCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDgzOiAvLyBET1dOXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ1VwJykge1xuICAgICAgcE9uZUN5Y2xlLmRpcmVjdGlvbiA9ICdEb3duJztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgNjU6IC8vIExFRlRcbiAgICBpZiAocE9uZUN5Y2xlLmRpcmVjdGlvbiAhPSAnUmlnaHQnKSB7XG4gICAgICBwT25lQ3ljbGUuZGlyZWN0aW9uID0gJ0xlZnQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA2ODogLy8gUklHSFRcbiAgICBpZiAocE9uZUN5Y2xlLmRpcmVjdGlvbiAhPSAnTGVmdCcpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==