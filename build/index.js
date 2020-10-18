"use strict";

require("regenerator-runtime/runtime.js");

var _database = _interopRequireDefault(require("./config/database"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get("port"), function () {
  return console.log("Servidor Funcionando, puerto: ".concat(_app["default"].get("port"), "!"));
});

(0, _database["default"])();
module.exports = _app["default"];