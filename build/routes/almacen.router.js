"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _almacen = _interopRequireDefault(require("../controller/almacen.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var controller = new _almacen["default"]();
var router = (0, _express.Router)();
router.get("/", controller.almacenControllerGet);
router.get("/:id", controller.almacenControllerGetById);
router.post("/", controller.almacenControllerPost);
router.put("/:id", controller.almacenControllerPut);
router["delete"]("/:id", controller.almacenControllerDelete);
var _default = router;
exports["default"] = _default;