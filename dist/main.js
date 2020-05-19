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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiles */ \"./src/tiles.js\");\n\n\n\n// board shape = [\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1]\n// ]\n\n\n\nclass Board {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.cols = 8;\n    this.rows = 8;\n    this.tsize = 52;\n    this.tiles = [];\n  }\n\n\n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.drawBoard(ctx);\n    setTimeout( ()=> {\n    this.drawTiles(ctx);\n    }, 50)\n  }\n  \n  drawBoard(ctx) {\n    function createImage(x,y) {\n      var img = new Image;\n      img.src = '../assets/scifitiles-sheet.png';\n      img.onload = function() {\n  \n        ctx.drawImage(img, 191, 31, 33, 33, x,y, 51, 51);\n        // ctx.fillStyle = 'black';\n        // ctx.font = \"20px Georgia\";\n        // ctx.fillText('0', x-20, y-20)\n        // setTimeout( ()=> {\n        //   ctx.fillStyle = 'black';\n        //   ctx.font = \"20px Georgia\";\n        //   ctx.fillText('0', x-20, y-20)\n        // }, 0)\n      }\n    }\n    \n    for (var c = 0, x=0; c < this.cols; c++, x+=this.tsize) {\n      for (var r = 0, y =0; r < this.rows; r++, y+=this.tsize) {\n        console.log(r,c)\n        createImage(x,y);\n      }\n    }\n\n\n\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  drawTiles(ctx) {\n    for (var c = 0; c < this.cols; c++) {\n      let gridr = []\n      for (var r = 0; r < this.rows; r++) {\n\n        let tile = new _tiles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tsize);\n        gridr.push(tile);\n\n        let xoff = 0 + c*this.tsize + 22\n        let yoff = 0 + r*this.tsize + 31\n\n        tile.drawTile(ctx, xoff, yoff)\n\n        // ctx.fillStyle = 'black';\n        // ctx.font = \"20px Georgia\";\n        // ctx.fillText('0', xoff, yoff)       \n      }\n      this.tiles.push(gridr)\n    }\n\n    console.log(this.tiles)\n  }\n\n\n  getTile(col, row) {\n\n  }\n\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumWarrior; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass NumWarrior {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    this.dimensions = { width: canvas.width, height: canvas.height };\n\n    this.restart();\n  }\n\n  restart() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions)\n    this.animate();\n  }\n\n  animate() {\n    this.board.animate(this.context)\n\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('game');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n\n})\n  \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tiles.js":
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tiles; });\n\nclass Tiles {\n  constructor(tsize) {\n    this.tsize = tsize\n    this.number = Math.floor(Math.random() * 10); \n  }\n\n\n  drawTile(ctx, xoff, yoff) {\n\n    ctx.fillStyle = 'black';\n    ctx.font = \"20px Georgia\";\n    ctx.fillText(this.number, xoff, yoff)   \n  }\n\n  getTileNum() {\n    return this.number\n  }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/tiles.js?");

/***/ })

/******/ });