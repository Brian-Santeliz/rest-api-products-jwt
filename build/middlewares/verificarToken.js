"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "verificarToken",
    value: function verificarToken(req, res, next) {
      var token = req.headers["almacen-auth"];
      if (!token) return res.status(401).json("No existe el Token");

      try {
        var tokenVerify = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);

        req.userId = tokenVerify.id;
        next();
      } catch (error) {
        res.status(403).json("El token es invalido o expiró");
      }
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports["default"] = _default;