"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _helmet = _interopRequireDefault(require("helmet"));

var _registro = _interopRequireDefault(require("./routes/registro.router"));

var _login = _interopRequireDefault(require("./routes/login.router"));

var _almacen = _interopRequireDefault(require("./routes/almacen.router"));

var _verificarToken = _interopRequireDefault(require("./middlewares/verificarToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

app.set("port", process.env.PORT || 3000);
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _helmet["default"])());
app.use("/almacen/registro", _registro["default"]);
app.use("/almacen/login", _login["default"]);
app.use("/almacen", _verificarToken["default"].verificarToken, _almacen["default"]);
var _default = app;
exports["default"] = _default;