/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext('2d'); // const card = new Card({pos:[20, 80]})\n  // card.draw(ctx)\n\n  var v = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  ctx.font = '10px Arial';\n  ctx.fillText(\"STRAIGHT FLUSH\", 100, 20);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxZQUFNO0FBQ2pELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaLENBRmlELENBSWpEO0FBQ0E7O0FBRUEsTUFBSUMsQ0FBQyxHQUFHLElBQUlQLHFEQUFKLENBQVNLLEdBQVQsQ0FBUjtBQUNBQSxFQUFBQSxHQUFHLENBQUNHLElBQUosR0FBVyxZQUFYO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksUUFBSixDQUFhLGdCQUFiLEVBQStCLEdBQS9CLEVBQW9DLEVBQXBDO0FBQ0QsQ0FWRCIsInNvdXJjZXMiOlsid2VicGFjazovL0RvdWJsZS1Eb3VibGUtUG9rZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9zY3JpcHRzL2NhcmRcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtwb3M6WzIwLCA4MF19KVxuICAvLyBjYXJkLmRyYXcoY3R4KVxuXG4gIGxldCB2ID0gbmV3IEdhbWUoY3R4KTtcbiAgY3R4LmZvbnQgPSAnMTBweCBBcmlhbCc7XG4gIGN0eC5maWxsVGV4dChcIlNUUkFJR0hUIEZMVVNIXCIsIDEwMCwgMjApO1xufSlcblxuIl0sIm5hbWVzIjpbIkNhcmQiLCJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidiIsImZvbnQiLCJmaWxsVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(object) {\n    _classCallCheck(this, Card);\n\n    this.pos = object[\"pos\"];\n    this.color = \"#FF5733\";\n  }\n\n  _createClass(Card, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.rect(this.pos[0], this.pos[1], 45, 50);\n      ctx.stroke();\n    }\n  }]);\n\n  return Card;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQyxLQUFELENBQWpCO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLFNBQWI7QUFDRDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNSQSxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0YsS0FBckI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDRSxTQUFKO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTLEtBQUtMLEdBQUwsQ0FBUyxDQUFULENBQVQsRUFBc0IsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBdEIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUUsTUFBQUEsR0FBRyxDQUFDSSxNQUFKO0FBQ0Q7Ozs7OztBQUlILCtEQUFlUixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGNTczM1wiO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA0NSwgNTApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIkNhcmQiLCJvYmplY3QiLCJwb3MiLCJjb2xvciIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n/* harmony import */ var _table_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table_column */ \"./src/scripts/table_column.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DEFAULTS = {\n  DIM_X: 900,\n  DIM_Y: 750,\n  NUM_CARDS: 5\n};\nvar PAYOUTS = {\n  1: 250,\n  2: 50,\n  3: 400,\n  4: 160,\n  5: 160,\n  6: 80,\n  7: 50,\n  8: 9,\n  9: 6,\n  10: 4,\n  11: 3,\n  12: 1,\n  13: 1\n};\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.dim_x = DEFAULTS.DIM_X;\n    this.dim_y = DEFAULTS.DIM_Y;\n    this.num_cards = DEFAULTS.NUM_CARDS;\n    this.hand = [];\n    this.table = [];\n    this.addCards.bind(this)(ctx);\n    this.addColumns.bind(this)(ctx);\n    this.populateColumns.bind(this)(ctx);\n  }\n\n  _createClass(Game, [{\n    key: \"addCards\",\n    value: function addCards(ctx) {\n      for (var i = 0, j = 0; i < this.num_cards; i++, j += 55) {\n        var pos = [18 + j, 80];\n        var card = new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          pos: pos\n        });\n        this.hand.push(card);\n      }\n\n      this.drawCards(ctx);\n    }\n  }, {\n    key: \"drawCards\",\n    value: function drawCards(ctx) {\n      var _this = this;\n\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      var i = 0;\n      setInterval(function () {\n        _this.hand[i].draw(ctx);\n\n        i++;\n      }, 500);\n    }\n  }, {\n    key: \"addColumns\",\n    value: function addColumns(ctx) {\n      var y = 10;\n      var firstCol = new _table_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        pos: [18, y],\n        width: 64\n      });\n      this.table.push(firstCol);\n\n      for (var i = 0, j = 0; i < 5; i++, j += 40) {\n        var position = [82 + j, y];\n        var colWidth = 40;\n        var column = new _table_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          pos: position,\n          width: colWidth\n        });\n        this.table.push(column);\n      }\n\n      this.drawColumns(ctx);\n    }\n  }, {\n    key: \"drawColumns\",\n    value: function drawColumns(ctx) {\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n\n      for (var i = 0; i <= 5; i++) {\n        this.table[i].draw(ctx);\n      }\n    }\n  }, {\n    key: \"populateColumns\",\n    value: function populateColumns(ctx) {\n      for (var i = 1; i < this.table.length; i++) {\n        for (var j = 1, y = 15; j < 13; j++, y += 5) {\n          this.table[i].populate(ctx, PAYOUTS[j] * (i + 1), y);\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVlELENBQUMsR0FBQyxDQUFkLENBQTVCLEVBQThDWSxDQUE5QztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBS0gsK0RBQWV2QixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgdGFibGVDb2x1bW4gZnJvbSBcIi4vdGFibGVfY29sdW1uXCJcblxuY29uc3QgREVGQVVMVFMgPSB7IERJTV9YOiA5MDAsIERJTV9ZOiA3NTAsIE5VTV9DQVJEUzogNX1cbmNvbnN0IFBBWU9VVFMgPSAgeyAxOiAyNTAsIDI6IDUwLCAzOiA0MDAsIDQ6IDE2MCwgNTogMTYwLCA2OiA4MCwgNzogNTAsIDg6IDksIDk6IDYsIDEwOiA0LCAxMTogMywgMTI6IDEsIDEzOiAxIH1cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuZGltX3ggPSBERUZBVUxUUy5ESU1fWDtcbiAgICB0aGlzLmRpbV95ID0gREVGQVVMVFMuRElNX1k7XG4gICAgdGhpcy5udW1fY2FyZHMgPSBERUZBVUxUUy5OVU1fQ0FSRFM7XG4gICAgdGhpcy5oYW5kID0gW107XG4gICAgdGhpcy50YWJsZSA9IFtdO1xuICAgIHRoaXMuYWRkQ2FyZHMuYmluZCh0aGlzKShjdHgpO1xuICAgIHRoaXMuYWRkQ29sdW1ucy5iaW5kKHRoaXMpKGN0eCk7XG4gICAgdGhpcy5wb3B1bGF0ZUNvbHVtbnMuYmluZCh0aGlzKShjdHgpO1xuICB9XG4gIFxuICBhZGRDYXJkcyhjdHgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0aGlzLm51bV9jYXJkczsgaSsrLCBqICs9IDU1KSB7XG4gICAgICBsZXQgcG9zID0gWzE4ICsgaiwgODBdXG4gICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkKHsgcG9zIH0pXG4gICAgICB0aGlzLmhhbmQucHVzaChjYXJkKVxuICAgIH1cblxuICAgIHRoaXMuZHJhd0NhcmRzKGN0eClcbiAgfVxuXG5cbiAgZHJhd0NhcmRzKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIGxldCBpID0wXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kW2ldLmRyYXcoY3R4KTtcbiAgICAgIGkrK1xuICAgIH0sIDUwMClcbiAgfVxuXG4gIGFkZENvbHVtbnMoY3R4KSB7XG4gICAgbGV0IHkgPSAxMDtcbiAgICBsZXQgZmlyc3RDb2wgPSBuZXcgdGFibGVDb2x1bW4oe3BvczogWzE4LCB5XSwgd2lkdGg6IDY0fSk7XG4gICAgdGhpcy50YWJsZS5wdXNoKGZpcnN0Q29sKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IDU7IGkrKywgaiArPSA0MCkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gWzgyICsgaiwgeV07XG4gICAgICBsZXQgY29sV2lkdGggPSA0MDtcbiAgICAgIGxldCBjb2x1bW4gPSBuZXcgdGFibGVDb2x1bW4oeyBwb3M6IHBvc2l0aW9uLCB3aWR0aDogY29sV2lkdGggfSlcbiAgICAgIHRoaXMudGFibGUucHVzaChjb2x1bW4pXG4gICAgfVxuXG4gICAgdGhpcy5kcmF3Q29sdW1ucyhjdHgpXG4gIH1cblxuICBkcmF3Q29sdW1ucyhjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1OyBpKyspIHtcbiAgICAgIHRoaXMudGFibGVbaV0uZHJhdyhjdHgpXG4gICAgfVxuICB9XG5cbiAgcG9wdWxhdGVDb2x1bW5zKGN0eCkge1xuICAgIGZvciAobGV0IGk9MTsgaSA8IHRoaXMudGFibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGo9MSwgeT0xNTsgaiA8IDEzOyBqKyssIHkrPTUpIHtcbiAgICAgICAgdGhpcy50YWJsZVtpXS5wb3B1bGF0ZShjdHgsIFBBWU9VVFNbal0qKGkrMSksIHkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG4iXSwibmFtZXMiOlsiQ2FyZCIsInRhYmxlQ29sdW1uIiwiREVGQVVMVFMiLCJESU1fWCIsIkRJTV9ZIiwiTlVNX0NBUkRTIiwiUEFZT1VUUyIsIkdhbWUiLCJjdHgiLCJkaW1feCIsImRpbV95IiwibnVtX2NhcmRzIiwiaGFuZCIsInRhYmxlIiwiYWRkQ2FyZHMiLCJiaW5kIiwiYWRkQ29sdW1ucyIsInBvcHVsYXRlQ29sdW1ucyIsImkiLCJqIiwicG9zIiwiY2FyZCIsInB1c2giLCJkcmF3Q2FyZHMiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInNldEludGVydmFsIiwiZHJhdyIsInkiLCJmaXJzdENvbCIsInBvc2l0aW9uIiwiY29sV2lkdGgiLCJjb2x1bW4iLCJkcmF3Q29sdW1ucyIsImxlbmd0aCIsInBvcHVsYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/table_column.js":
/*!*************************************!*\
  !*** ./src/scripts/table_column.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar tableColumn = /*#__PURE__*/function () {\n  function tableColumn(object) {\n    _classCallCheck(this, tableColumn);\n\n    this.pos = object[\"pos\"];\n    this.width = object[\"width\"];\n    this.color = \"#FFFF00\";\n  }\n\n  _createClass(tableColumn, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.rect(this.pos[0], this.pos[1], this.width, 60);\n      ctx.stroke();\n    }\n  }, {\n    key: \"populate\",\n    value: function populate(ctx, payout, y) {\n      var right = this.pos[0] + this.width - 2;\n      ctx.font = '5px Arial';\n      ctx.color = this.color;\n      ctx.textAlign = 'right';\n      ctx.fillText(payout, right, y);\n    }\n  }]);\n\n  return tableColumn;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tableColumn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YWJsZV9jb2x1bW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNKLHVCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtDLEdBQUwsR0FBV0QsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxTQUFLRSxLQUFMLEdBQWFGLE1BQU0sQ0FBQyxPQUFELENBQW5CO0FBQ0EsU0FBS0csS0FBTCxHQUFhLFNBQWI7QUFDRDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNSQSxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0YsS0FBckI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDRSxTQUFKO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTLEtBQUtOLEdBQUwsQ0FBUyxDQUFULENBQVQsRUFBc0IsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBdEIsRUFBbUMsS0FBS0MsS0FBeEMsRUFBK0MsRUFBL0M7QUFDQUUsTUFBQUEsR0FBRyxDQUFDSSxNQUFKO0FBQ0Q7OztXQUVELGtCQUFTSixHQUFULEVBQWNLLE1BQWQsRUFBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCLFVBQUlDLEtBQUssR0FBRyxLQUFLVixHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEtBQW5CLEdBQTJCLENBQXZDO0FBQ0FFLE1BQUFBLEdBQUcsQ0FBQ1EsSUFBSixHQUFXLFdBQVg7QUFDQVIsTUFBQUEsR0FBRyxDQUFDRCxLQUFKLEdBQVksS0FBS0EsS0FBakI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDUyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FULE1BQUFBLEdBQUcsQ0FBQ1UsUUFBSixDQUFhTCxNQUFiLEVBQXFCRSxLQUFyQixFQUE0QkQsQ0FBNUI7QUFDRDs7Ozs7O0FBR0gsK0RBQWVYLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb3VibGUtRG91YmxlLVBva2VyLy4vc3JjL3NjcmlwdHMvdGFibGVfY29sdW1uLmpzPzcwZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgdGFibGVDb2x1bW4ge1xuICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICB0aGlzLnBvcyA9IG9iamVjdFtcInBvc1wiXTtcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0W1wid2lkdGhcIl07XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGRkYwMFwiO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLndpZHRoLCA2MCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcG9wdWxhdGUoY3R4LCBwYXlvdXQsIHkpIHtcbiAgICBsZXQgcmlnaHQgPSB0aGlzLnBvc1swXSArIHRoaXMud2lkdGggLSAyXG4gICAgY3R4LmZvbnQgPSAnNXB4IEFyaWFsJztcbiAgICBjdHguY29sb3IgPSB0aGlzLmNvbG9yXG4gICAgY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgY3R4LmZpbGxUZXh0KHBheW91dCwgcmlnaHQsIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYmxlQ29sdW1uOyJdLCJuYW1lcyI6WyJ0YWJsZUNvbHVtbiIsIm9iamVjdCIsInBvcyIsIndpZHRoIiwiY29sb3IiLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlIiwicGF5b3V0IiwieSIsInJpZ2h0IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/table_column.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb3VibGUtRG91YmxlLVBva2VyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;