"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _registro = _interopRequireDefault(require("../controller/registro.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var controller = new _registro["default"]();
router.get("/", controller.registerControllerGet);
router.post("/", controller.registerControllerPost);
var _default = router;
exports["default"] = _default;